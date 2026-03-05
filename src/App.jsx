
import './App.css'
import btnImg from "./assets/Vector.png"
import logo from "./assets/logo.avif"
import vec1 from "./assets/vector1.png"


function App() {
 

  return (
    <>
    <div className='bg-gray-100 max-w-[1200px] '>

    
    <div className=" banner navbar bg-base-100 shadow-sm max-w-[1200px] m-auto p-20px  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        
         
      </ul>
    </div>
    <img className='w-[70px]' src={logo} alt="" />
  </div>
 
  <div className="navbar-end">
     <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home </a></li>
      <li><a>FAQ</a></li>
      <li><a>Chnagelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      
      
    </ul>
  </div>
  
  <div className='btn  bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2]'>

  <button className=''>
    <div className='flex  gap-3 justify-between justify-center'>


      <div>
         <img className='w-[7px] h-[7px] mt-2' src={btnImg} alt="" />

      </div>
<div className='text-white'>
 New Ticket
</div>
    </div>
   

 

  </button>
  

</div>
  </div>
</div>


 <div className="middel-banner max-w-[1200px] mx-auto p-4 flex flex-col md:flex-row gap-6 mt-10">

  {/* Card 1 */}
  <div className="rounded-md w-full md:w-1/2 h-[180px] flex items-center justify-center bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2]">

    <div className="flex items-center justify-center gap-4">

      <div>
        <img src={vec1} alt="" className="" />
      </div>

      <div className="text-center">
        <h1 className="text-lg md:text-2xl text-white">Resolved</h1>
        <span className="text-3xl md:text-4xl text-white">0</span>
      </div>

      <div>
        <img src={vec1} alt="" className="flip-img " />
      </div>

    </div>

  </div>

  {/* Card 2 */}
  <div className="rounded-md w-full md:w-1/2 h-[180px] flex items-center justify-center bg-gradient-to-r from-[#54CF68] via-[#2AA971] to-[#00827A]">

    <div className="flex items-center justify-center gap-4">

      <div>
        <img src={vec1} alt="" className="" />
      </div>

      <div className="text-center">
        <h1 className="text-lg md:text-2xl text-white">Resolved</h1>
        <span className="text-3xl md:text-4xl text-white">0</span>
      </div>

      <div>
        <img src={vec1} alt="" className="flip-img " />
      </div>

    </div>

  </div>

</div>




<footer className="bg-black text-white px-10 py-10 mt-10">
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

</div>






    
    
    </>
  )
}

export default App
