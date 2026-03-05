import React, { use } from 'react';

const Coustomertickets = ({fetchTickets}) => {
        
    const Ticketsdata=use(fetchTickets)
    console.log(Ticketsdata)
    return (
        <div className='bg-gray-100'>
<h1 className='text-2xl'>
    Coustomer Tickets
</h1>
{
    Ticketsdata.map(ticket=>  <div className="card-1  bg-base-100 w-96 shadow-sm hover:scale-110 transition duration-300">
      <div className="card-body">
<div className='flex justify-between justify-items-center'>
     <div> <h2 className="card-title">{ticket.title}</h2></div>
     <div className=' border-1 rounded-2xl w-20 text-center'><p>{ticket.status}</p></div>

</div>
<div>
    <p>{ticket.description}</p>
</div>
   
    
    <div className="card-end">

     <div className='flex justify-between'>
        <div className='flex space-x-3'>
            <h1>{ticket.id}</h1>
            <p className={`${
    ticket.priority === "High"
      ? "text-red-500"
      : ticket.priority === "Medium"
      ? "text-yellow-500"
      : "text-green-500"
  }`}>{ticket.priority}</p>
        </div>
        <div className=' flex space-x-3'>
            <h1>{ticket.customer}</h1>
            <p>{ticket.createdAt}</p>

        </div>

     </div>


    </div>
  </div>
</div>)
}

         
           
        </div>
    );
};

export default Coustomertickets;