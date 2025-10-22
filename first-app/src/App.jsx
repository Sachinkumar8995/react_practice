import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

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

  return (
    <>
      <h1>name : {obj.car} model : {obj.model}</h1>
      <h1>{display()}</h1>

    </>
  )
}

export default App

