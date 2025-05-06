// components/ui/modal.tsx
import Image from "next/image";
import { RiCloseLine } from "@remixicon/react";

type ModalProps = {
  price: string;
  date: string;
  image: string;
  title: string;
  onClose: () => void;
};

export default function Modal({
  price,
  date,
  image,
  title,
  onClose,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-2 w-full h-full sm:h-146 max-w-5xl shadow-lg">
        <div className="grid sm:grid-cols-[2fr_1fr] gap-4">
          <div className="relative w-full flex flex-col">
            <div className="flex items-center text-gray-700">
              {" "}
              <RiCloseLine onClick={onClose} className="h-6" />
              <span className="mx-auto text-xl text-center font-semibold">
                Checkout
              </span>
            </div>

            <div className="mt-8 md:border-y md:border-[#f7f6f9]"></div>
            <div className="mt-10 px-9">
              <span className="text-2xl font-bold">Contact Information</span>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>Personal Attendee Info</span>
                <span>
                  <span className="text-red-500">*</span> Required
                </span>
              </div>

              <form className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6">
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[#7cd6fd] focus:border-[#7cd6fd]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[#7cd6fd] focus:border-[#7cd6fd]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[#7cd6fd] focus:border-[#7cd6fd]"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[#7cd6fd] focus:border-[#7cd6fd]"
                    placeholder="Enter your organization"
                  />
                </div>
              </form>

              {/* summary mobile */}

              <div className="sm:hidden px-0">
                {/* border */}
                <div className="mt-2 md:border-y md:border-[#f7f6f9]"></div>
                <h2 className="text-sm font-bold mt-8">Reservation Summary</h2>
                <p className="text-xs text-gray-700 mt-4">
                  You're about to reserve a spot for <strong>{price}</strong>{" "}
                  <br />
                  Event is on <strong>{date}</strong>.
                </p>

                <span className="mt-4 font-bold flex items-center justify-between">
                  Total: <p>{price}</p>
                </span>
              </div>
              {/* disclaimer */}
              <div className="mt-8">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-green-600"
                  />
                  <span className="text-xs">
                    I have reviewed and confirmed that all the information
                    provided are accurate and valid. I understand that I will
                    receive an event registration code via email, and admission
                    to the event will be granted upon presenting this
                    credential.
                  </span>
                </label>
              </div>

              {/* border */}
              <div className="mt-auto">
                <div className="mt-8 md:border-y md:border-[#f7f6f9]"></div>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 w-full sm:w-70 rounded-sm bg-[#0095DA] text-white font-semibold cursor-pointer"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block h-142 bg-[#f2f7fb] rounded-sm">
            <div className="relative w-full h-60">
              <Image
                src={image || "/No-Image.png"}
                alt={title}
                fill
                className="object-cover rounded-sm hidden sm:block"
              />
            </div>
            <div className="px-4">
              <h2 className="text-sm font-bold mt-4">Reservation Summary</h2>
              <p className="text-sm text-gray-700 mt-4">
                You're about to reserve a spot for <strong>{price}</strong>{" "}
                <br />
                <br />
                Event is on <strong>{date}</strong>.
              </p>
              {/* border */}
              <div className="mt-8 md:border-y md:border-[#f7f6f9]"></div>
              <span className="mt-12 font-bold flex items-center justify-between">
                Total: <p>{price}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
