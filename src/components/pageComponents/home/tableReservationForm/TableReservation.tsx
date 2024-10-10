/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";

function TableReservation() {
  const today = new Date().toISOString().split("T")[0];

  // Get the current time and add 30 minutes
  const currentTime = new Date();
  currentTime.setMinutes(currentTime.getMinutes() + 30);
  const minTime = currentTime.toTimeString().slice(0, 5);
  const [formData, setFormData] = useState({
    guestName: "",
    guestNumber: "",
    totalGuests: "1",
    guestRequestedDate: today,
    guestRequestedTime: minTime,
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (
      formData.guestName.length > 0 &&
      formData.totalGuests.length > 0 &&
      formData.guestNumber.length > 0 &&
      formData.guestRequestedDate.length > 0 &&
      formData.guestRequestedTime.length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsProcessing(true);
      setIsDisabled(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert formData to JSON string
      });
      console.log(response);
      alert("Message successfully sent");
      setFormData({
        guestName: "",
        guestNumber: "",
        totalGuests: "",
        guestRequestedDate: today,
        guestRequestedTime: minTime,
      });
      setIsProcessing(false);
    } catch (err: any) {
      console.error(err);
      alert("Error, please try resubmitting the form");
      setIsProcessing(false);
      setIsDisabled(false);
    }
  };

  // Get today's date in YYYY-MM-DD format

  return (
    <div id="booking" className="   flex items-center justify-center">
      <div className="  flex gap-4 justify-center items-center w-full lg:max-w-full">
        <div className="flex flex-col justify-between  p-6 w-full lg:min-w-[85%]">
          <span className="text-center  w-full text-[2rem] md:text-[3rem] xl:text-[4rem] py-4  font-heading">
            RESERVE A TABLE
          </span>
          {/* |
          <div className="hidden lg:block h-full w-full overflow-hidden">
            <Image
              src={image}
              className="h-full w-full "
              objectFit="cover"
              alt="image"
            />
          </div> */}
          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="full-name">Full Name</label>
              <input
                className="bg-white/10 rounded-lg px-2 py-3 placeholder:text-white/60 text-white border-2 border-white/50"
                id="full-name"
                type="text"
                placeholder="Your Name"
                value={formData.guestName}
                onChange={(e) =>
                  setFormData({ ...formData, guestName: e.target.value })
                }
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="time">Time</label>
              <input
                className="w-full bg-white/10 rounded-lg px-2 py-3 placeholder:text-white/60 text-white border-2 border-white/50"
                id="time"
                type="time"
                min={minTime}
                placeholder="20:00"
                value={formData.guestRequestedTime}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guestRequestedTime: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                className="bg-white/10 rounded-lg px-2 py-3 placeholder:text-white/60 text-white border-2 border-white/50"
                id="phone-number"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.guestNumber}
                onChange={(e) =>
                  setFormData({ ...formData, guestNumber: e.target.value })
                }
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="total-guests">Guests</label>
              <input
                className="bg-white/10 rounded-lg px-2 py-3 placeholder:text-white/60 text-white border-2 border-white/50"
                id="total-guests"
                type="number"
                min={1}
                placeholder="2"
                value={formData.totalGuests}
                onChange={(e) =>
                  setFormData({ ...formData, totalGuests: e.target.value })
                }
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="date">Date</label>
              <input
                className="w-full bg-white/10  fill-white rounded-lg px-2 py-3 placeholder:text-white/60 text-white border-2 border-white/50"
                id="date"
                type="date"
                min={today}
                value={formData.guestRequestedDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guestRequestedDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label>
                <br />
              </label>
              <button
                className={` ${
                  isDisabled ? "hidden" : " "
                } rounded-lg w-full text-white border-2 border-white hover:text-secondary-default hover:bg-white px-2 py-3   transition hover:ease-in-out duration-150`}
                type="submit"
                disabled={isDisabled}
              >
                {isProcessing ? "Processing..." : "RESERVE"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TableReservation;
