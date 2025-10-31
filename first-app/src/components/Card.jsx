import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Card = ({name,email,city}) => {
  return (
    <div className='pl-4 '>
      <div className='w-[300px]  bg-gradient-to-r from-blue-400 to-pink-400 rounded-xl pb-4 h-[350px]'>
        <div className='flex justify-center h-[150px] w-[150px] mx-auto mt-4 overflow-hidden pt-4'>
            <img className='rounded-full' src="whpic.jpg" />
        </div>
        <div className='text-center mt-4'>
            <h1 className='font=bold text-2xl text-blue-900 text-shadow-blue-800 '>Name: {name}</h1>
            <h2 className='font=bold text-xl '>Email: {email}</h2>
            <h3 className='font=bold text-lg '>City: {city}</h3>
        </div>
        <div className='flex justify-evenly pt-6 text-3xl'>
            
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors">
                <FaFacebook />
            </a>
            <a
                href="https://www.linkedin.com/in/sachin-kumar-636651298/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors">
                <FaLinkedin />
            </a>
            <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors">
                <FaInstagram />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Card
