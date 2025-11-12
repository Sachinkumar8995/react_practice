import React from 'react'

const ContactCard = ({name,number}) => {
  return (
    <div className='flex justify-center w-[300px] h-[220px] bg-indigo-300 border-2 border-red-300 rounded-xl '>
      <div className='mt-4'>
        <h1 className='font-bold text-2xl'>Contact Card Component</h1>
        <h1>Name: {name}</h1>
        <h1>Phone No. : {number}</h1>
        <div className='flex justify-center items-center mt-4'>
            <button className='border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300' onClick={() => alert(`${name} Calling...`)}>Call Now📞</button>
            
        </div>
      </div>
    </div>
  )
}

export default ContactCard
