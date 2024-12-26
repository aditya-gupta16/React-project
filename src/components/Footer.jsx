import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <div className='w-full p-14 pt-4 h-96 bg-black text-white'>
            <div className='Logo text-lg '>
                <h1 className='text-5xl'>Logo</h1>
                <div className='mt-4 w-1/2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam voluptate molestiae reprehenderit aperiam voluptatum libero esse obcaecati explicabo, excepturi distinctio modi accusantium voluptas aspernatur.</p>
                </div>
                <div className="links">
                    <ul className='list-none flex mt-4 text-2xl'>
                        <li className='m-2'>
                            <a href="https://instagram.com"><IoLogoInstagram /></a>
                        </li>
                        <li className='m-2'>
                            <a href="https://facebook.com"><IoLogoFacebook/></a>
                        </li>
                        <li className='m-2'>
                            <a href="https://whatsapp.com"><IoLogoWhatsapp/></a>
                        </li>
                        <li className='m-2'>
                            <a href="https://telegram.com"><FaTelegram /></a>
                        </li>
                    </ul>

                    <input className='px-4 py-2 rounded-lg mt-2 outline-none text-black' type="text" placeholder='Enter You Email' /> <br /><br />
                    <button className='border-2 border-white p-1 px-6 rounded-full' type='submit'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer