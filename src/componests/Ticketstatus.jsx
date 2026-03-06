import React from "react";
import { toast } from "react-toastify";

const Ticketstatus = ({ selectedTicket, setinProcess, setResolved, setSelectedticket  }) => {

  const handleComplete = (ticket) => {
    setinProcess((prev) => prev - 1);
    setResolved((prev) => prev + 1);
    toast("process completed");
   

    
    setSelectedticket((prev) => prev.filter((t) => t.id !== ticket.id));

    toast("Ticket completed");
  };

  return (
    <div className="max-w-[1600px] mt-6">
      <h2 className="text-xl font-bold mb-4">Tasks In Process</h2>

      {selectedTicket.length === 0 && (
        <p className="text-gray-500">No tickets selected yet</p>
      )}

      {selectedTicket.map((ticket) => (
        <div

          key={ticket.id}
          className="card bg-base-100 shadow-sm mb-3 p-3 flex justify-between items-center"
        >
          <span>Complete the process {ticket.customer}</span>

        <button
  onClick={() => {
    handleComplete(ticket);
   
   
  }}
  className="btn btn-sm bg-green-600 text-white"
>
  Complete
</button>
        </div>
      ))}
       
    </div>
   
  );
};

export default Ticketstatus;