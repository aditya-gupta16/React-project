import React from 'react'
import ServiceData from './ServiceData.json'




const Service = () => {
  return (
    <>

     <h1 className='bg-zinc-700 text-center text-white py-4 tracking-tight text-3xl' >Welcome To Service Section</h1> 
     <div className='w-full flex  justify-around mt-10'>
      {ServiceData.map((Data)=>{
        return(

          <div className='w-64 p-6 rounded-lg h-64 bg-blue-200'>
            <h1 className='text-3xl'>{Data.name}</h1>
            <p>{Data.Service}</p>
            <p>{Data.Location}</p>
            <p>{Data.Time}</p>
            <p className='text-red-900'>{Data.Status}</p>
            <p className='mt-2 text-xl'>{Data.Rating}</p>
          
          </div> 

        )
      })}




        

        
    </div>

    </>
    
  )
}

export default Service


// fetch('http://localhost:3000/api/user')
//   .then((response) => response.json()) // Response ko JSON mein convert karta hai
//   .then((data) => console.log(data))   // Data use karta hai
//   .catch(error => console.error('Error:', error));