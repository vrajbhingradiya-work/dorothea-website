import * as React from "react";

export default function EmailTemplate({
  guestName,
  totalGuests,
  guestNumber,
  guestRequestedTime,
  guestRequestedDate,
}: any) {
  return (
    <div>
      <h1>Table Reservation Request by, {guestName}!</h1>
      <p>Guest Name: {guestName}</p>
      <p>Total No of Guests: {totalGuests}</p>
      <p>Guest Number: {guestNumber}</p>
      <p>Requested Date: {guestRequestedDate}</p>
      <p>Requested Time: {guestRequestedTime}</p>
    </div>
  );
}
