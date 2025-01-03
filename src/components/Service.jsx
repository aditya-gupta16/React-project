import React from 'react'
import ServiceData from './ServiceData.json'
import { MdOutlinePhoneCallback } from "react-icons/md";


fetch('http://localhost:3000/api/login')
  .then((response) => response.json()) // Response ko JSON mein convert karta hai
  .then((data) => console.log(data))   // Data use karta hai
  .catch(error => console.error('Error:', error));

  fetch('http://localhost:3000/api/about')
  .then((response) => response.json()) // Response ko JSON mein convert karta hai
  .then((data) => console.log(data))   // Data use karta hai
  .catch(error => console.error('Error:', error));

  



const Service = () => {
  return (
    <>

     <h1 className='bg-zinc-700 text-center text-white py-4 tracking-tight text-3xl' >Welcome To Service Section</h1> 
     <div className='w-full m-auto flex flex-wrap gap-32 bg-gray-900 pb-32 p-10  justify-around mt-10'>
      {ServiceData.map((Data)=>{
        return(

          <div className='w-64 p-6 shadow-xl shadow-black rounded-lg h-64 bg-blue-200'>
            <h1 className='text-3xl'>{Data.name}</h1>
            <p>{Data.Service}</p>
            <p>{Data.Location}</p>
            <p>{Data.Time}</p>
            <p className='text-red-900'>{Data.Status}</p>
            <p className='mt-2 text-xl'>{Data.Rating}</p>
            <a href=""> <p className='px-2 py-1 hover:bg-slate-600 border-2 rounded-lg w-44 m-2.5 mx-4 cursor-pointer text-center border-black'>{Data.button}</p></a>
          
          </div> 

        )
      })}

    </div>

     <div>
      <div className='w-[70%] font-["Gilroy"] my-10 relative mt-[-3.5%] flex justify-around items-center h-24 m-auto rounded-xl bg-orange-500'>
           <div>
           <h1 className='flex text-2xl gap-4 items-center'>< MdOutlinePhoneCallback className='border-white border-2 text-4xl px-2 rounded-full' /> Get A Free Consultation </h1>
           <h2 className='px-12  text-2xl'>+91-9039574104</h2>
           </div>
           <div>
            <a href="/contact"><button className='text-xl border-2 border-white p-4 text-white rounded-full'>Make Appointment</button></a>
           </div>

      </div>

     </div>

    </>
    
  )
}

export default Service


