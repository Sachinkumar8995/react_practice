import './App.css'
// import Student from './components/Student.jsx'
// import Card from './components/Card.jsx'
import GreetingCard from './components/GreetingCard.jsx'

function App() {
  const display = () =>{
    return "hello love you all"
  }

  const obj= {
    car:"thar",
    model:"2024",
    comany:"mahindra",
    city:"New York"
  }

  const handleClick = (name) =>{
    console.log(`${name} clicked the button`)
  }

  return (
    <>
      {/* <Card name='Sachin Kumar' email='sachinkumae239@lpu.in' city='Motuhari'/> */}
      {/* <GreetingCard name='Sachin' message='How are yoe'/> */}
      <button onClick={() => handleClick("Sachin")} className='bg-blue-500 text-white px-4 py-2 rounded-lg m-4 hover:bg-blue-700 transition-colors'>Click Me</button>
    </>
  )
}

export default App


{/* <h1>name : {obj.car} model : {obj.model}</h1>
<h1>{display()}</h1> */}
{/* <Student name='Sachin kumar' age={21} isCr={true}/> */}