import React, { useEffect } from 'react'


const img = [
  {
    id: 1,
    name: "Amazon",
    src: "https://i.pinimg.com/236x/fa/16/b8/fa16b892512b3df516211c68fc489134.jpg",
    alt: "Image 1",
    value: "Submit"
  },

  {
    id: 2,
    name: "Flipkart",
    src: "https://i.pinimg.com/236x/b3/1b/72/b31b724d0258ec3e6475843cb4efc7a6.jpg",
    alt: "Image 1",
    value: "Submit"
  },

  {
    id: 3,
    name: "Ajio",
    src: "https://i.pinimg.com/236x/df/6b/f1/df6bf1e56460cc26f20b99f85af896ae.jpg",
    alt: "Image 1",
    value: "Submit"
  },
 
]



const Home = () => {

  useEffect(()=>{
    console.log("Component Mounted")
    alert("Component Mounted")
    
    return(()=>{
      console.log('Component UnMounted')
      alert("Component Unmounted")
    })

    

  },[])

  // <%= %>


  // useEffect(()=>{
  //   console.log('Component Mounted')

  //   return()=>{
  //     console.log('Component Unmounted')
  //     // cleanup code here (e.g., cancel subscriptions, clear timers)
  //   }
  // },[])

  var a = 12;
  return (
   
    <>
    <h1 className='bg-zinc-700 w-full text-center text-3xl tracking-tighter py-6'>Welcome to Our Home Section</h1>
    <div className='grid grid-cols bg-red-500 md:w-full text-center py-2 justify-around md:flex md:gap-4 md:py-4'>
        {img.map((data)=>(
         <li className='list-none'>
           <p className='text-center text-3xl capitalize mt-14 '>{data.name}</p>
            <img className='mt-4' src={data.src} alt="" />
            <button className='px-6 py-1 shadow-lg hover:shadow-black border-2 hover:border-blue-500 border-black mt-4 rounded-lg '>{data.value}</button>
         </li>
        ))}
        
    </div>

    </>
  )
}

export default Home