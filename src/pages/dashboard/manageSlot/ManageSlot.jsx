// src/pages/dashboard/manageSlot/ManageSlot.jsx
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Slat from './Slat';

const ManageSlot = () => {
  const [slots, setSlots] = useState([
    { id: 1, slot: '10:00 AM', bookedBy: 'John Doe' },
    { id: 2, slot: '11:00 AM', bookedBy: null },
    // Add more slots as needed
  ]);

  const handleBookSlot = (slotId, bookedBy) => {
    const updatedSlots = slots.map((slot) =>
      slot.id === slotId ? { ...slot, bookedBy } : slot
    );
    setSlots(updatedSlots);
  };

  const handleRejectSlot = (slotId, bookedBy) => {
    emailjs
      .send('service_zmn0s7s', 'template_puofxx9', {
        to_email: bookedBy, // Assuming 'bookedBy' is the email address of the user
        slot_time: slots.find((slot) => slot.id === slotId)?.slot || 'N/A',
      }, 'Q_5hRcST4KImyCYOs')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
  };

  return (
    <div className="flex flex-wrap gap-4">
      {slots.map((slot) => (
        <Slat
          key={slot.id}
          slot={slot.slot}
          bookedBy={slot.bookedBy}
          onBook={() => handleBookSlot(slot.id, 'Trainer Name')}
          onReject={() => handleRejectSlot(slot.id, slot.bookedBy)}
        />
      ))}
    </div>
  );
};

export default ManageSlot;