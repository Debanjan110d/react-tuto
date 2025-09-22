//rfce react funtion component
//rafce react arrow function component
import React from 'react'

// function Card (props)  { //Its good but multiple time saying the same thing is not good so 

//we will destructuer it 
const Card =({username="🙏🏻", img="Null",alter_name="Not Available yet"}) => { // We just de-structure the props
  
  // console.log(props);
  
  return (
    <div className='flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg'>
      <img 
        src={img} 
        alt={alter_name}
        className='w-64 h-64 object-cover rounded-full border-4 border-amber-500 shadow-md' 
      />
      <h1 
        className='mt-4 text-3xl font-bold text-center text-amber-400 tracking-wide bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500'
      >
      {/* props.username// after de structuring we do not hav eto use props everytime  */}
      {username}
      </h1>
    </div>
  )
}

export default Card
