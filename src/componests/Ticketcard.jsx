const Ticketcard = ({ ticket, setinProcess, selectedTicket, setSelectedticket }) => {

  const handleClick = (ticket) => {
    setinProcess((prev) => prev + 1);

    setSelectedticket([...selectedTicket, ticket]);
  };

  return (
    <div>
      <div
        onClick={() => handleClick(ticket)}
        className="bg-base-100 w-full shadow-sm rounded-lg hover:scale-105 transition duration-300"
      >
        <div className="card-body">

          <div className="flex justify-between items-center">
            <h4 className="card-title">{ticket.title}</h4>

            <div
              className={`border rounded-2xl px-3 py-1 text-center
              ${
                ticket.status === "Open"
                  ? "text-green-700 bg-green-300"
                  : ticket.status === "In Progress"
                  ? "text-yellow-700 bg-yellow-200"
                  : ""
              }`}
            >
              {ticket.status}
            </div>
          </div>

          <p>{ticket.description}</p>

        </div>
      </div>
    </div>
  );
};

export default Ticketcard;