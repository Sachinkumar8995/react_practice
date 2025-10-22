import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='ml-4 flex justify-start gap-8'>
      <Card name='Sachin Kumar'/>
      <Card name='Rohit Singh'/>
      <Card name='Shyam Ram'/>
    </div>
      
  )
}

export default App
