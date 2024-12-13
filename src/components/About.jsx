import React from 'react'
// import Navbar from './Navbar'  

const About = () => {
  return (
    <div>
   
       <div className='w-full h-screen bg-red-600 flex items-center justify-center flex-col  '>
        <img className='h-44 w-44 rounded-full ' src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVufGVufDB8fDB8fHww" alt="" />

        <div className='w-1/2 text-center capitalize'>
        <h1>hello This is Our Company</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos, animi ducimus temporibus illo id laudantium obcaecati doloremque dignissimos mollitia similique consectetur harum distinctio dolores!</p>
        <button className='px-7 py-1 border-2 rounded border-black text-lg  '>Explore</button>
        </div>
      
      <div className="cards w-full flex mt-14 justify-around  ">
        <div className="card h-44 w-44 bg-slate-500 border-red-100 border-2 rounded-sm "></div>
        <div className="card h-44 w-44 bg-slate-500 border-red-100 border-2 rounded-sm "></div>
        <div className="card h-44 w-44 bg-slate-500 border-red-100 border-2 rounded-sm "></div>
        <div className="card h-44 w-44 bg-slate-500 border-red-100 border-2 rounded-sm "></div>
      </div>

       </div>

    </div>
  )
}

export default About