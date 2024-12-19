import React from 'react'
import AboutData from './AboutData.json'
// import Navbar from './Navbar'  

const About = () => {
  return (
    <div>
   
       <div className='w-full h-auto py-8 flex items-center justify-center flex-col  '>
        <img className='h-44 w-44 rounded-full ' src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVufGVufDB8fDB8fHww" alt="" />

        <div className='w-1/2 text-center capitalize'>
        <h1>hello This is Our Company</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos, animi ducimus temporibus illo id laudantium obcaecati doloremque dignissimos mollitia similique consectetur harum distinctio dolores!</p>
        <button className='px-7 py-1 border-2 rounded border-black text-lg  '>Explore</button>
        </div>

  
      
      <div className="cards w-[80%] m-auto text-gray-200 gap-20 flex-wrap flex mt-14 justify-around  ">
      {AboutData.map((data) =>{
          return (
            <div className='h-auto w-64 p-4 bg-purple-400 rounded-lg'>
              <h1 className='text-2xl'>Name: {data.name}</h1>
              <h1 className='text-lg'>Age: {data.age}</h1>
              <h1 className='text-lg'>Email: {data.email}</h1>
              <h1 className='text-xl'>Quality: {data.Quality}</h1>
              
         </div>

          )
        })}

         
      </div>

       </div>

    </div>
  )
}

export default About