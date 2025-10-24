"use client";

export default function Newsletter() {
  return (
    <div className="sm:ml-auto flex flex-col sm:flex-row gap-6 items-center ">
      <div className="text-bold text-sm text-white leading-6">
        Subscribe to our newsletter
      </div>
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className="w-full sm:w-[24vw] bg-white py-3 px-6 text-sm  border  border-gray-300 rounded-3xl"
      />
      <button className="w-full sm:w-[9vw] bg-[#0395da] text-white px-4 py-2 font-semibold rounded-lg shadow">
        Subscribe
      </button>
    </div>
  );
}
