// components/ui/modal.tsx
import Image from "next/image";
import { RiCloseLine } from "@remixicon/react";
import { formatInTimeZone } from "date-fns-tz";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

type ModalProps = {
  price: number;
  date: string;
  image: string;
  title: string;
  event_id: string;
  onClose: () => void;
};

export default function Modal({
  price,
  date,
  image,
  title,
  event_id,
  onClose,
}: ModalProps) {
  const api_url = "https://mana-event.onrender.com";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    agreed: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    // Store original overflow style
    const originalOverflow = document.body.style.overflow;

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Cleanup function to restore original scroll behavior
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreed) {
      alert("Please agree to the terms and conditions");
      return;
    }

    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const token = Cookies.get("token");

      // Split name into first and last name
      const nameParts = formData.name.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const response = await fetch(
        `https://mana-event.onrender.com/api/initiate-payment-anonymous/${event_id}`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            first_name: firstName,
            last_name: lastName,
            organization: formData.organization,
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.paymentLink) {
        // Show success state first
        setSuccess(true);

        // Pre-open the tab during user action
        const newTab = window.open("", "_blank");

        if (newTab) {
          // Load the payment link after a brief delay
          setTimeout(() => {
            newTab.location.href = result.paymentLink;
          }, 5000);
        } else {
          // If tab was blocked or couldn't open, fallback
          alert("Please allow popups to open check out link.");
        }
      } else {
        alert(
          result.message || "Failed to initiate payment. Please try again."
        );
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Enhanced close handler to restore body scroll
  const handleClose = () => {
    document.body.style.overflow = "";
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-md w-full max-w-5xl shadow-lg my-4 sm:my-8 overflow-hidden flex min-h-[90vh] sm:min-h-0 sm:max-h-[95vh] mt-66 sm:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid sm:grid-cols-[2fr_1fr] gap-4 h-full overflow-hidden w-full">
          <div className="relative w-full flex flex-col overflow-hidden">
            <div className="flex items-center text-gray-700 p-2 flex-shrink-0">
              <RiCloseLine
                onClick={handleClose}
                className="h-6 cursor-pointer"
              />
              <span className="mx-auto text-xl text-center font-semibold">
                Checkout
              </span>
            </div>

            <div className="mt-4 md:border-y md:border-[#f7f6f9] flex-shrink-0"></div>

            {/* Scrollable content area */}
            <div className="flex overflow-y-auto px-4 sm:px-9 pb-4 flex-1">
              {success ? (
                // Success message
                <div className="flex flex-col items-center justify-center h-full text-center py-12 sm:flex-row">
                  <div className="mb-6 ml-0 sm:ml-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Registration Initiated!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your payment window will open shortly. After completing
                      payment:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg text-left">
                      <p className="text-sm text-blue-800 font-medium mb-2">
                        📧 Check your email for:
                      </p>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Event registration confirmation</li>
                        <li>• Unique event access code</li>
                        <li>• Event details and instructions</li>
                      </ul>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      Present your registration code at the event for admission
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-gray-700 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                // Original form content
                <div className="mt-4 py-6 w-full">
                  <span className="text-2xl font-bold">
                    Contact Information
                  </span>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>Personal Attendee Info</span>
                    <span className="mr-2">
                      <span className="text-red-500">*</span> Required
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                      <div>
                        <label className="block text-xs font-medium text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[#7cd6fd] focus:border-[#7cd6fd]"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[#7cd6fd] focus:border-[#7cd6fd]"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[#7cd6fd] focus:border-[#7cd6fd]"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700">
                          Organization <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[#7cd6fd] focus:border-[#7cd6fd]"
                          placeholder="Enter your organization"
                        />
                      </div>
                    </div>

                    {/* summary mobile */}
                    <div className="sm:hidden px-0">
                      {/* border */}
                      <div className="mt-8 border-t border-[#f7f6f9]"></div>
                      <h2 className="text-sm font-bold mt-8">
                        Reservation Summary
                      </h2>
                      <p className="text-xs text-gray-700 mt-4">
                        You&apos;re about to reserve a spot for{" "}
                        <strong>₦{price}</strong> <br />
                        Event is on{" "}
                        <strong>
                          {" "}
                          {formatInTimeZone(
                            date,
                            "Africa/Lagos",
                            "EEE, MMM d • h:mmaaa"
                          )}
                        </strong>
                        .
                      </p>

                      <span className="mt-4 font-bold flex items-center justify-between">
                        Total: <p>₦{price}</p>
                      </span>
                    </div>

                    {/* disclaimer */}
                    <div className="mt-8">
                      <label className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          name="agreed"
                          checked={formData.agreed}
                          onChange={handleInputChange}
                          required
                          className="mt-1 accent-green-600 flex-shrink-0"
                        />
                        <span className="text-xs">
                          I have reviewed and confirmed that all the information
                          provided are accurate and valid. I understand that I
                          will receive an event registration code via email, and
                          admission to the event will be granted upon presenting
                          this credential.
                        </span>
                      </label>
                    </div>

                    {/* border */}
                    <div className="mt-8">
                      <div className="border-t border-[#f7f6f9]"></div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 px-4 py-2 w-full sm:w-70 rounded-sm bg-[#0095DA] text-white font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? "Please Wait" : "Register"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
          {/* Desktop sidebar */}
          <div className="hidden sm:block w-[22rem] h-full bg-[#f2f7fb] rounded-sm overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src={
                  image
                    ? `${api_url}/${image.replace(/^\/+/, "")}`
                    : "/No-Image.png"
                }
                alt={title}
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="px-4 h-[calc(100%-240px)] overflow-y-auto">
              <h2 className="text-sm font-bold mt-4">Reservation Summary</h2>
              <p className="text-sm text-gray-700 mt-4">
                You&apos;re about to reserve a spot for{" "}
                <strong>₦{price}</strong> <br />
                <br />
                Event is on{" "}
                <strong>
                  {" "}
                  {formatInTimeZone(
                    date,
                    "Africa/Lagos",
                    "EEE, MMM d • h:mmaaa"
                  )}
                </strong>
                .
              </p>
              {/* border */}
              <div className="mt-8 border-t border-[#f7f6f9]"></div>
              <span className="mt-12 font-bold flex items-center justify-between">
                Total: <p>₦{price}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
