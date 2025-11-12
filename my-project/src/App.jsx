import './App.css'
import data from './data.json'

function App() {

  return (
    <>
      <div className='bg-gray-900'>
        {data.map(function(phoneDetails, index){
          return (
            <div key={index} className='flex justify-between aligns-center border-2 border-gray-600 m-4 p-4 rounded-lg bg-gray-800 text-white'>
              <div className='w-1/4 flex justify-center items-center' >
                <img src={phoneDetails.image} alt={phoneDetails.name} />
              </div>
              <div className='flex-1'>
                <h1 className='font-bold text-xl'>{phoneDetails.title}</h1>
                <h3>⭐{phoneDetails.rating} | {phoneDetails.reviews}</h3>
                <li>{phoneDetails.details[0]}</li>
                <li>{phoneDetails.details[1]}</li>
                <li>{phoneDetails.details[2]}</li>
                <li>{phoneDetails.details[3]}</li>
                <li>{phoneDetails.details[4]}</li>
                <li>{phoneDetails.details[5]}</li>
              </div>
              <div className='flex justify-center items-center'>
                <div>{phoneDetails.price}</div>
                <div className='line-through'>{phoneDetails.originalPrice}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
