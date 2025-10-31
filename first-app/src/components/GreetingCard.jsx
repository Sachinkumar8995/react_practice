import React from 'react'

const GreetingCard = ({name,message}) => {
  return (
    <div>
      <div className='bg-amber-400 p-6 rounded-lg text-center m-4'>
        <h1>Welcome to the Greeting Card Component!</h1>
        <h2>Hello {name}</h2>
        <h2>{name} := {message}</h2>
      </div>
    </div>
  )
}

export default GreetingCard
