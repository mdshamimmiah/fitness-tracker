// src/components/Slot.js


const Slat = ({ slot, bookedBy, onBook, onReject }) => {
  return (
    <div className={`bg-gray-200 p-4 ${bookedBy ? 'text-red-500' : 'text-green-500'}`}>
      <p>Slot: {slot}</p>
      {bookedBy && <p>Booked by: {bookedBy}</p>}
      <button onClick={onBook} disabled={bookedBy} className='btn btn-primary'>
        Book Slot
      </button>
      {bookedBy && (
        <button onClick={onReject} disabled={!bookedBy} className='btn btn-primary'>
          Reject
        </button>
      )}
    </div>
  );
};

export default Slat;