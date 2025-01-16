import React, { useState } from "react";

const Contact = () => {
  const data = {
    name: "",
    email: "",
    password: "",
  };

  const [input, setInput] = useState(data);
  // console.log(input)

  const eventhandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  let [msg, setMsg] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    console.log(input); // Log the input data to check if it's filled correctly

    if (!input.name || !input.email || !input.password) {
      alert("All fields are required");
    } else {
      // Show the message and reset it after 2 seconds
      fetch("http://localhost:5000/api/logins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      })
        .then((response) => response.json())

        .then((newUser) => {
          // console.log(newUser); // Log the response from the backend
          setMsg(true); // Set the message to show on successful submission
          alert("Form submitted successfully");
        })
        .catch((error) => {
          console.error("Error:", error); // Handle errors
        });

      // .then((data)=>{
      //   // console.log(data)
      //   setMsg(data.message)
      //   setTimeout(() => {
      //       setMsg(false)
      //   }, 2000)
      // })

      setInput(data); // Reset input to initial state
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold py-4">
        Hello from Contact!
      </h1>
      <h2 className="text-center">{msg}</h2>
      <div className="w-full flex justify-center text-center ">
        <form
          onSubmit={submit}
          method="post"
          action=""
          className="w-72 my-10 rounded-lg border-2 border-black py-16"
        >
          <input
            onChange={eventhandle}
            name="name"
            value={input.name}
            className="border-2 border-black rounded-sm px-4 py-1 "
            type="text"
            placeholder="Name"
          />{" "}
          <br />
          <br />
          <input
            onChange={eventhandle}
            name="email"
            value={input.email}
            className="border-2 border-black rounded-sm px-4 py-1 "
            type="email"
            placeholder="Email"
          />{" "}
          <br />
          <br />
          <input
            onChange={eventhandle}
            name="password"
            value={input.password}
            className="border-2 border-black rounded-sm px-4 py-1 "
            type="password"
            placeholder="Password"
          />{" "}
          <br />
          <br />
          <button className="px-8 rounded-lg hover:bg-slate-500 border-black border-2 py-1">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

// import React, { useState } from 'react';

// const Contact = () => {
//   const data = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   const [input, setInput] = useState(data);
//   const [msg, setMsg] = useState(false);

//   const eventhandle = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const submit = (event) => {
//     event.preventDefault();

//     // Check if all fields are filled
//     if (!input.name || !input.email || !input.password) {
//       alert("All fields are required");
//     } else {
//       // Send form data to the backend via POST request
//       fetch('http://localhost:3000/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(input), // Send form data as the request body
//       })
//         .then((response) => response.json()) // Parse the response as JSON
//         .then((newUser) => {
//           console.log(newUser); // Log the response from the backend
//           setMsg(true); // Set the message to show on successful submission
//           alert("Form submitted successfully");
//         })
//         .catch((error) => {
//           console.error('Error:', error); // Handle errors
//         });
//     }
//   };

//   return (
//     <>
//       <h1 className="text-4xl text-center font-bold py-4">Hello from Contact!</h1>
//       <h2 className="text-center">{msg ? input.name + " Successfully Login" : null}</h2>
//       <div className="w-full flex justify-center text-center">
//         <form onSubmit={submit} method="post" action="" className="w-72 my-10 rounded-lg border-2 border-black py-16">
//           <input onChange={eventhandle} name="name" value={input.name} className="border-2 border-black rounded-sm px-4 py-1" type="text" placeholder="Name" /> <br /><br />
//           <input onChange={eventhandle} name="email" value={input.email} className="border-2 border-black rounded-sm px-4 py-1" type="email" placeholder="Email" /> <br /><br />
//           <input onChange={eventhandle} name="password" value={input.password} className="border-2 border-black rounded-sm px-4 py-1" type="password" placeholder="Password" /> <br /><br />
//           <button className="px-8 rounded-lg hover:bg-slate-500 border-black border-2 py-1">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Contact;

// fetch('http://localhost:3000/api/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(input), // Form data
// })
//   .then((response) => response.json())
//   .then((newUser) => {
//     console.log(newUser);  // Check the response from the backend
//     // setMsg(true);
//     // alert("Form submitted successfully");
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// fetch('http://localhost:3000/api/users',{
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(input)
// })
// .then((response) => response.json())
// .then((data) => {
//   if(data.message) {
//     alert(data.message);

//   }
//   else{
//      alert('saving success user')
//   }
// })
