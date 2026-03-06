
import { Suspense, useState } from 'react'
import './App.css'


import Coustomertickets from './componests/Coustomertickets'
import Middelbar from './componests/Middelbar'
import Navbar from './componests/Navbar'
import Ticketstatus from './componests/Ticketstatus'
import { ToastContainer } from 'react-toastify';

const fetchTickets=fetch("/tickets.json")
.then(res =>res.json())



function App() {
 
 const [inProcess,setinProcess]=useState(0)
 const [resolved,setResolved]=useState(0)
 const [selectedTicket,setSelectedticket]=useState([])
//  console.log(selectedTicket)


  return (
    <>
     <Navbar>
    
  </Navbar>

  <Middelbar inProcess={inProcess} resolved={resolved} >

  </Middelbar>
    

    
   


 


<div className='flex'>
  <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
  <Coustomertickets fetchTickets={fetchTickets} setinProcess={setinProcess} setResolved={setResolved} selectedTicket={selectedTicket} setSelectedticket={setSelectedticket}   >
   

</Coustomertickets>


</Suspense>




<Ticketstatus  selectedTicket={selectedTicket} fetchTickets={fetchTickets} setinProcess={setinProcess} setResolved={setResolved} >
 
</Ticketstatus>



</div>




<footer className="bg-black text-white px-10 py-10 mt-10 max-w-[1600px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

   
    <div className="max-w-md text-left">
    <h1 className='text-xl font-bold'> Ticket system</h1>
      <p>
        Our company ticket system is designed to efficiently manage and track
        employee requests, technical issues, and support tasks within the
        organization. 
      </p>
    </div>

    
    <div>
      <ul className="space-y-2">
        <li className="font-bold">Contact</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Our Mission</li>
        <li>Contact Sales</li>
      </ul>
    </div>

    
    <div>
      <ul className="space-y-2">
        <li className="font-bold">Service</li>
        <li>Product & Service</li>
        <li>Customer Stories</li>
        <li>Download App</li>
      </ul>
    </div>

    
    <div>
      <ul className="space-y-2">
        <li className="font-bold">Information</li>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
        <li>Join Us</li>
      </ul>
    </div>

    
    <div>
      <ul className="space-y-2">
        <li className="font-bold">Social Links</li>
        <li>@CS — Ticket System</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Email</li>
      </ul>
    </div>

  </div>

  
  <div className="border-t border-gray-700 mt-8 pt-4 text-center">
    <p>© 2025 CS — Ticket System. All rights reserved.</p>
  </div>
</footer>








    
     <ToastContainer />
    </>
  )
}

export default App
