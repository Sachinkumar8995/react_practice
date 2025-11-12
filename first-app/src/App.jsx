import './App.css'
import ChangeState from './components/ChangeState.jsx'
// import ArrayProps from './components/ArrayProps.jsx'
// import ContactCard from './components/ContactCard.jsx'
// import Student from './components/Student.jsx'
// import Card from './components/Card.jsx'
// import GreetingCard from './components/GreetingCard.jsx'

function App() {
  const hobbies = ['reading','coding','playing','travelling']

  return (
    <>
      
      {/* <ArrayProps name="Sachin Kumar" age={21} email="sachinkumar@gmail.com" hobbies={hobbies}/> */}
      {/* <ContactCard name="Sachin Kumar" number="+1234567890" /> */}
      <ChangeState />
    </>
  )
}

export default App


{/* <h1>name : {obj.car} model : {obj.model}</h1>
<h1>{display()}</h1> */}
{/* <Student name='Sachin kumar' age={21} isCr={true}/> */}