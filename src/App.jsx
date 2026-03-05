
import './App.css'
import btnImg from "./assets/Vector.png"
import logo from "./assets/logo.avif"
import vec1 from "./assets/vector1.png"


function App() {
 

  return (
    <>
    <div className='bg-gray-100'>

    
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
        
        <li><a>Item 3</a></li>
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


  <div className='Middel banner max-w-[1200px] m-auto p-2px flex justify-center space-x-10 mt-10 '>


  <div className=' rounded-md w-[500px] h-[200px] text-center  bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2]   '>

   
  <div className="flex items-center justify-center gap-4">
  
  <div className="image-1 mt-5">
    <img src={vec1} alt="" />
  </div>

  <div>
    <h1 className="text-2xl text-white">Resolved</h1>
  <span className='text-4xl text-white'>0</span>

  </div>
  <div className='mt-20 '>
   
  </div>

  <div className="image-2 mt-5">
    <img className="flip-img" src={vec1} alt="" />
  </div>

</div>
    
    
  </div>

  <div className='rounded-md w-[500px] h-[200px] text-center  bg-gradient-to-r from-[#54CF68] via-[#2AA971] to-[#00827A] '>
    <div className="flex items-center justify-center gap-4">
  
  <div className="image-1 mt-5">
    <img src={vec1} alt="" />
  </div>

   <div>
    <h1 className="text-2xl text-white">Resolved</h1>
  <span className='text-4xl text-white'>0</span>

  </div>

  <div className="image-2 mt-5">
    <img className="flip-img" src={vec1} alt="" />
  </div>

</div>
    
    
  </div>

</div>

</div>
    
    
    </>
  )
}

export default App
