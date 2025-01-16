// import React, { useEffect, useState } from "react";


// const Register = () => {



//   const data = {
//     name: "",
//     email: "",
//     password: "",
//   }

//   const [input, setInput] = useState(data)
// //   console.log(input)

//   const [msg, setMsg] = useState(false)

//   const evenHandle = (e)=>{
//     setInput({...input, [e.target.name]: e.target.value })
    

//   }

//   const submit = (e)=>{
//     e.preventDefault();
//     console.log(input)
//     // call the API to register user
//     if(!input.name || !input.email || !input.password){
//             alert("All fields are required")
//     }

//     else{
//       fetch('http://localhost:3000/api/register',{
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(input), // Send form data as the request body
//       })

//       .then((response) => response.json())
//       .then((user)=> {
//         console.log(user)
//         setMsg(`${input.name} Successfully registered`)
//         setTimeout(() => {
//             setMsg("")
//         }, 2000); // Clear success message after successful registration
        
//       })
      

//       .catch((error) => {
//         console.error('Error:', error);
//       })
      
//       setInput({ name: "", email: "", password: "" })
//     }
    

//   }

//   return (
//     <div>
//       <section class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 class="text-2xl font-bold text-center mb-6">Register</h2>
//         <form action="" onSubmit={submit} method="post">
//           <div>{msg}</div>
//           {/* <!-- Name Field --> */}
//           <div class="mb-4">
//             <label for="name" class="block text-gray-700 font-medium mb-1">
//               Name
//             </label>
//             <input
//             onChange={evenHandle}
//               value={input.value}
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* <!-- Email Field --> */}
//           <div class="mb-4">
//             <label for="email" class="block text-gray-700 font-medium mb-1">
//               Email
//             </label>
//             <input
//             onChange={evenHandle}
//               value={input.value}
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* <!-- Password Field --> */}
//           <div class="mb-4">
//             <label for="password" class="block text-gray-700 font-medium mb-1">
//               Password
//             </label>
//             <input
//             onChange={evenHandle}
//             value={input.value}
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* <!-- Submit Button --> */}
//           <button
//             type="submit"
//             class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//           >
//             Register
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Register;
