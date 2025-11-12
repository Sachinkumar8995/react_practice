import React from 'react'

const ChangeState = () => {
    // const [fruts, setFruts] = React.useState("mango")
    // const changeFruts = () => {
    //     setFruts("banana")
        
    // }
    const [increment, setIncrement] = React.useState(0)
    const incrementValue = () => {
        setIncrement(increment + 1)
    }
    // const [decrement, setDecrement] = React.useState(0)
    const decreaseValue = () => {
        setIncrement(increment - 1)
    }
  return (
    <div>
      {/* <button onClick={changeFruts} className='border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300'>Change fruts name</button>
      <h1>fruts name is : {fruts}</h1> */}
      <button onClick={incrementValue}>Icrement</button>
        <h1>Increment value is : {increment}</h1>
      <button onClick={decreaseValue}>Decrement</button>
        {/* <h1>Decrement value is : {increment}</h1> */}
    </div>
  )
}
export default ChangeState

