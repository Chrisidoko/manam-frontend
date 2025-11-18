"use client";
import { useState } from "react";

export default function Newsletter() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailSubmit = () => {
    if (email && email.includes("@")) {
      setStep(2);
    }
  };

  const handleFinalSubmit = async () => {
    if (!name) return;

    setIsLoading(true);
    setMessage("");

    try {
      // ✅ Use an absolute base URL
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

      const response = await fetch(`${baseUrl}/api/newsletter/subscribe`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
        }),
      });

      if (response.ok) {
        setMessage("Successfully subscribed!");
        setEmail("");
        setName("");
        setTimeout(() => {
          setStep(1);
          setMessage("");
        }, 3000);
      } else {
        setMessage("Something went wrong. Please try again.");
        const errorData = await response.json();
        setMessage(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setMessage("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action();
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="sm:ml-auto flex flex-col sm:flex-row gap-6 items-center ">
        <div className="text-bold text-sm text-white leading-6">
          Subscribe to our newsletter
        </div>

        {step === 1 ? (
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, handleEmailSubmit)}
              className="w-full sm:w-[24vw] bg-white py-3 px-6 text-sm  border  border-gray-300 rounded-3xl transition-all duration-300"
            />
            <button
              onClick={handleEmailSubmit}
              className="w-full sm:w-[9vw] bg-[#0395da] text-white px-4 py-2 font-semibold rounded-lg shadow hover:bg-[#ffffff] hover:text-[#0395da] transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, handleFinalSubmit)}
              autoFocus
              className="w-full sm:w-[24vw] bg-white py-3 px-6 text-sm  border  border-gray-300 rounded-3xl transition-all duration-300 animate-fade-in"
            />
            <button
              onClick={handleFinalSubmit}
              disabled={isLoading}
              className="w-full sm:w-[9vw] bg-[#0395da] text-white px-4 py-2 font-semibold rounded-lg shadow hover:bg-[#0380c0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "..." : "Finish"}
            </button>
          </div>
        )}

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
      </div>

      {message && (
        <div
          className={`text-sm font-medium ${
            message.includes("Success") ? "text-green-300" : "text-red-300"
          } animate-fade-in`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
