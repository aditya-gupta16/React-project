import { name } from 'ejs';
import React from 'react'


const img = [
  {
    id: 1,
    name: "hello world",
    src: "https://images.unsplash.com/photo-1733169128556-6faa85ba76e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
  },

  {
    id: 2,
    name: "world",
    src: "https://images.unsplash.com/photo-1733513458601-281b27dc5edc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
  },

  {
    id: 3,
    name: "world hello",
    src: "https://images.unsplash.com/photo-1733169128556-6faa85ba76e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
  },
 
]




const Home = () => {
  var a = 12;
  return (
   
    <div>
        {img.map((data)=>(
         <li>
           <p>{data.name}</p>
            <img src={data.src} alt="" />
         </li>
          

        ))}
        
    </div>
  )
}

export default Home