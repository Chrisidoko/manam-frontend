// components/ui/checkout.tsx
"use client";

import { useState } from "react";
import { RiInformationLine } from "@remixicon/react";
import Modal from "@/components/ui/modal";
import { formatInTimeZone } from "date-fns-tz";

type CheckoutProps = {
  price: number;
  date: string;
  image: string;
  title: string;
  event_id: string;
  space_available: number;
};

export function Checkout({
  price,
  date,
  image,
  title,
  event_id,
  space_available,
}: CheckoutProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex mt-10 h-46 flex-col justify-center space-y-3 p-4 rounded-xl ring-2 ring-gray-200/80">
        <div className="flex justify-between">
          <span className="text-gray-800">Spaces Available</span>
          <span className="text-xl font-semibold">{space_available}</span>
        </div>
        <span className="flex gap-2 items-center font-semibold">
          ₦{price}
          <div
            className="flex items-center justify-center rounded-full h-7 w-7 hover:bg-[#eeedf2] cursor-pointer"
            onClick={() => setShowInfo(!showInfo)}
          >
            <RiInformationLine className="h-5" />
          </div>
        </span>
        {showInfo && (
          <p className="text-xs text-gray-600 text-right">
            Sales end on{" "}
            {formatInTimeZone(date, "Africa/Lagos", "EEE, MMM d • h:mmaaa")}
          </p>
        )}
        <button
          className="mt-2 w-full h-12 rounded-md bg-[#28A745] text-white font-semibold cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Reserve a spot
        </button>
      </div>

      {/* Modal rendered inside Checkout */}
      {showModal && (
        <Modal
          price={price}
          date={date}
          image={image}
          title={title}
          event_id={event_id}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
