import React from 'react'

const ArrayProps = (data) => {
  return (
    <div className='bg-emerald-300 border-b-amber-900'>
      <h1>Student name is {data.name}, age {data.age} and email is {data.email}</h1>
      <li>{data.hobbies.map((ele,idx)=> <li key={idx} >{ele} </li>)}</li>
    </div>
  )
}

export default ArrayProps
