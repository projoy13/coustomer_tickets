import React, { use } from 'react';
import Ticketcard from './Ticketcard';


const Coustomertickets = ({fetchTickets,setinProcess,setResolved,selectedTicket,setSelectedticket}) => {
        
    const Ticketsdata=use(fetchTickets)
    // console.log(Ticketsdata)
    
       
    return (
        <div className="max-w-[1600px] mx-auto mt-10 px-4">

  
  <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
    <h1 className="text-2xl font-bold"> Coustomers Tickets</h1>
   
  </div>

  
  <div className="flex flex-col lg:flex-row gap-8">

   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">


      {
      /* amara adike map korci ar ata k patahici ticket card a */}

      {
      Ticketsdata.map((ticket) => <Ticketcard ticket={ticket} setinProcess={setinProcess} setResolved={setResolved} selectedTicket={selectedTicket} setSelectedticket={setSelectedticket}>

      </Ticketcard>
        
      )
      }

    </div>

   
   

  </div>

</div>
         
    );
};

export default Coustomertickets;