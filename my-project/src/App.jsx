
import './App.css'
import data from './data.json'

function App() {

  return (
    <>
      <div className='bg-gray-900'>
        {data.map(function(phoneDetails, index){
          return (
            <div key={index} className='flex justify-between aligns-center border-2 border-gray-600 m-4 p-4 rounded-lg bg-gray-800 text-white'>
              <div>
                <img src={phoneDetails.image} alt={phoneDetails.name} />
              </div>
              <div>
                <h1 className=''>{phoneDetails.title}</h1>
                <li>{phoneDetails.details[0]}</li>
                <li>{phoneDetails.details[1]}</li>
                <li>{phoneDetails.details[2]}</li>
                <li>{phoneDetails.details[3]}</li>
                <li>{phoneDetails.details[4]}</li>
                <li>{phoneDetails.details[5]}</li>
              </div>
              <div>
                <h1>Price : {phoneDetails.price}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
