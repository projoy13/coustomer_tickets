import React, { use } from 'react';
import Ticketcard from './Ticketcard';


const Coustomertickets = ({fetchTickets,setinProcess}) => {
        
    const Ticketsdata=use(fetchTickets)
    console.log(Ticketsdata)
    
       
    return (
        <div className="max-w-[1200px] mx-auto mt-10 px-4">

  {/* HEADER TITLES */}
  <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
    <h1 className="text-2xl font-bold"> Coustomers Tickets</h1>
    <h1 className="text-2xl font-bold ml-[-55px]">Task Status</h1>
  </div>

  {/* MAIN CONTENT */}
  <div className="flex flex-col lg:flex-row gap-8">

    {/* LEFT SIDE — Tickets */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">

      {
      Ticketsdata.map((ticket) => <Ticketcard ticket={ticket} setinProcess={setinProcess}>

      </Ticketcard>
        
      )
      }

    </div>

   
    <div className="space-y-5 lg:w-[320px] mt-6 lg:mt-0">

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">card Titel</h2>
        <div>
            <button className="btn btn-wide bg-green-600">Complete</button>
          </div>

        </div>
      </div>

      <div className=" bg-base-100 shadow-sm p-2">
        <div className="body">
          
          <p>Tasks currently being worked on.</p>
          
        </div>
      </div>

    </div>

  </div>

</div>
         
    );
};

export default Coustomertickets;