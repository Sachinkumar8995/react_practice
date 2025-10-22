import React from 'react'

const Card = ({name}) => {
  return (
    <div className=''>
      <div className='w-[300px] h-auto bg-gradient-to-r from-blue-400 to-pink-400 rounded-xl'>
        <div className='flex justify-center h-[150px] w-[150px] mx-auto mt-4 overflow-hidden'>
            <img className='rounded-full' src="https://rukminim2.flixcart.com/image/832/832/xif0q/dress/v/q/7/-original-imahg2zrvvx3eun6.jpeg?q=70&crop=false" />
        </div>
        <div className='text-center mt-4'>
            <h1 className='font=bold text-2xl '>{name}</h1>
        </div>
        <div>
            <p className='text-center mt-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
        <div className='flex justify-center mb-4 gap-4 mt-4'>
            <button className='bg-blue-500 mx-auto block text-white p-2 rounded-lg mb-4'>Follow</button>
            <button className='bg-green-500  mx-auto block text-white p-2 rounded-lg mb-4'>Message</button>
            <button className='bg-red-500  mx-auto block text-white p-2 rounded-lg mb-4'>See More</button>
        </div>

      </div>
    </div>
  )
}

export default Card
