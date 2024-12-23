import React, { useState } from 'react'

const Contact = () => {

  const data = {
    name: "",
    email: "",
    password: "",
  }

  const [input, setInput] = useState(data);
  console.log(input)

  const eventhandle = (e)=>{
    setInput({...input, [e.target.name]:e.target.value })
    

  }

  const [msg, setMsg] = useState(false);

  const submit = (event) =>{
    event.preventDefault();
    

    if(!input.name || !input.email || !input.password){
      alert("All fields are required")
      
    } 
    else{
      setMsg(true)
      alert("Form submitted successfully")

    }
  }

 

  return (
   <>

      <h1 className='text-4xl text-center font-bold py-4'>Hello from Contact!</h1>
      <h2 className='text-center'>{msg ? input.name + " Successfully Login" : null}</h2>
    <div className='w-full flex justify-center text-center '>
      
        
        <form onSubmit={submit} action="" className='w-72 my-10 rounded-lg border-2 border-black py-16'>
          <input onChange={eventhandle} name='name' value={input.name} className='border-2 border-black rounded-sm px-4 py-1 ' type="text" placeholder='Name' /> <br /><br />
          <input onChange={eventhandle} name='email' value={input.email} className='border-2 border-black rounded-sm px-4 py-1 ' type="email" placeholder='Email'/> <br /><br />
          <input onChange={eventhandle} name='password' value={input.password} className='border-2 border-black rounded-sm px-4 py-1 ' type="password" placeholder='Password'/> <br /><br />
          <button className='px-8 rounded-lg hover:bg-slate-500 border-black border-2 py-1'>Submit</button>
        </form>
    </div>


    </>
  )
}

export default Contact