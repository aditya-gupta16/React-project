import React from 'react'


const Hero = () => {
  const cardData = [
    {
      id: 1,
      title: 'Hello Card 1',
      content: 'This is a sample content for the first card',
    },
    {
      id: 2,
      title: 'Hello Card 2',
      content: 'This is a sample content for the Second card',
    },
    {
      id: 3,
      title: 'Hello Card 3',
      content: 'This is a sample content for the Third card',
    }
  ]

  return (
    <div>
        <div className='h-24 w-full py-6 bg-red-400 '>
            <h1 className='text-4xl text-center text-blue-800'>Welcome to the Hero Section</h1>
        </div>

        <div className='w-full bg-zinc-400 h-auto flex justify-around px-20 py-12'>
           <div className='card h-80 w-80 bg-yellow-500 text-center  rounded-lg'>
               <h1>Hello Card</h1>
           </div>
           <div className='card h-80 w-80 bg-yellow-500 text-center rounded-lg'>
            <h1>hello card 2</h1> 
           </div>
           <div className='card h-80 w-80 bg-yellow-500 text-center rounded-lg'>
            <h1>Hello card 3</h1>
           </div>
           <div className='card h-80 w-80 bg-yellow-500 text-center rounded-lg'>
            <h1>Hello card 4</h1>
           </div>
        </div>

        {cardData.map((data)=>{
            return (
                <div key={data.id} className='card w-full bg-blue-200'>
                    <div className='w-full flex flex-col items-center  '>
                     <h1 className='bg-cyan-950 p-4 rounded-lg text-white '>{data.title}</h1>
                     <p className='bg-slate-700 m-4 text-white'>{data.content}</p>
                    </div>
                </div>
            )
        })}
        



        
    </div>
  )
}

export default Hero