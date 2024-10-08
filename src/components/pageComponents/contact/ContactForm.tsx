"use client";
import CarModel from "@/model/Car";
import React, { useEffect, useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmailId: "",
    clientNumber: "",
    // clientLocation: "",
    clientMessage: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (
      formData.clientName.length > 0 &&
      formData.clientEmailId.length > 0 &&
      formData.clientNumber.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      setButtonDisabled(true);
      const response = await fetch("/api/send-inquiry-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: formData.clientName,
          clientEmailId: formData.clientEmailId,
          clientNumber: formData.clientNumber,
          // clientLocation: formData.clientLocation,
          clientMessage: formData.clientMessage,
        }), // Convert formData to JSON string
      });
      alert("Message successfully sent");
      setFormData({
        clientName: "",
        clientEmailId: "",
        clientNumber: "",
        // clientLocation: "",
        clientMessage: "",
      });
      setButtonDisabled(false);
      setLoading(false);
    } catch (err: any) {
      console.error(err);
      alert("Error, please try resubmitting the form");
      setButtonDisabled(false);
    }
  };
  return (
    <div className="pt-16 w-full  flex justify-center items-center  ">
      <form
        onSubmit={handleSubmit}
        className=" w-full  md:w-[70%] xl:w-[600px]  md:max-w-[700px] p-8 md:p-8 grid grid-cols-1 gap-4 bg-white rounded-xl  "
      >
        <div className="flex items-center justify-start">
          <span className="text-2xl md:text-3xl text-black font-medium">
            SHOOT A MESSAGE TO US
          </span>
        </div>
        <div>
          <input
            value={formData.clientName}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                clientName: e.target.value,
              })
            }
            className=" p-2 md:p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="YOUR NAME*"
            type="text"
          />
        </div>
        <div>
          <input
            required
            value={formData.clientEmailId}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientEmailId: e.target.value,
              })
            }
            className=" p-2 md:p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="EMAIL*"
            type="email"
          />
        </div>
        <div>
          <input
            value={formData.clientNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientNumber: e.target.value,
              })
            }
            className=" p-2 md:p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="MOBILE NUMBER"
            min={1000000000}
            type="number"
          />
        </div>
        {/* <div className="">
          <input
            value={formData.clientLocation}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                clientLocation: e.target.value,
              })
            }
            className=" p-2 md:p-4  w-full rounded-lg  border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider"
            placeholder="LOCATION*"
            type="text"
          />
        </div> */}
        <div className="row-span-3">
          <input
            value={formData.clientMessage}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                clientMessage: e.target.value,
              })
            }
            className=" p-4 py-16 text-wrap  w-full rounded-lg   border-[#CCCCCC] border-[1px] placeholder-[#CCCCCC] text-black font-medium tracking-wider "
            placeholder="MESSAGE*"
            type="text"
          />
        </div>
        {/* <div>
          captcha integration
        </div> */}
        <div>
          <button
            type="submit"
            disabled={buttonDisabled}
            className="bg-black hover:bg-white hover:text-black border-black hover:border-[1px] w-full
            px-4 pl-6 py-4 flex justify-center items-center group transition ease-in-out duration-300 rounded-lg tracking-[.2em]"
          >
            {loading ? "PROCESSING..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
