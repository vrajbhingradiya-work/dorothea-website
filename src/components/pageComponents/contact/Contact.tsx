import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="">
      <div className="content-box grid grid-cols-1 md:grid-cols-2 gap-8 justify-start items-start p-8 ">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
