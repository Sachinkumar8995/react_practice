import React from 'react'

const Student = ({name, age, isCr}) => {
  return (
    <div style={{backgroundColor: '#111f1f' , padding: '20px', borderRadius: '10px', border: '2px solid red' , color: 'white', textAlign: 'center', margin: '20px auto'}}>
      <h1 className='font-bold text-4xl text-blue-600'>Name:  {name}</h1>
      <h2 className='font-bold text-4xl text-blue-600'>Age : {age}</h2>
      <h2 className='font-bold text-4xl text-blue-600' >Class Representative : {isCr ? "Yes" : "No"}</h2>
    </div>
  )
}

export default Student
