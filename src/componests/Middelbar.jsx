import React from 'react';
import vec1 from "../assets/vector1.png"

const Middelbar = ({inProcess}) => {
    return (
        <div  className='bg-gray-100 max-w-[1600px]'>
            <div className="}middel-banner max-w-[1600px] mx-auto p-4 flex flex-col md:flex-row gap-6 mt-10">

  {/* Card 1 */}
  <div className="rounded-md w-full md:w-1/2 h-[180px] flex items-center justify-center bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2]">

    <div className="flex items-center justify-center gap-4">

      <div>
        <img src={vec1} alt="" className="" />
      </div>

      <div className="text-center">
        <h1 className="text-lg md:text-2xl text-white">In Process</h1>
      <span className="text-3xl md:text-4xl text-white">{inProcess}</span>
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
            
        </div>
    );
};

export default Middelbar;