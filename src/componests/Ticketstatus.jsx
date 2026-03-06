// Ticketstatus.jsx
import React from "react";

const Ticketstatus = ({ selectedTicket }) => {
  return (
    <div className="max-w-[400px] mt-6">
      <h2 className="text-xl font-bold mb-4">Tasks In Process</h2>

      {selectedTicket.length === 0 && (
        <p className="text-gray-500">No tickets selected yet</p>
      )}

      {selectedTicket.map((ticket, index) => (
        <div
          key={index}
          className="card bg-base-100 shadow-sm mb-3 p-3 flex justify-between items-center"
        >
          <span> Complete the process {ticket.coustomer}</span>
          <button
          
          className="btn btn-sm bg-green-600 text-white">
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Ticketstatus;