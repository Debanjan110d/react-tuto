import { useState } from 'react'
import Card from './components/card.jsx'
import AnotherCard from './components/another_card.jsx'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name: "Debanjan",
    age: 21,
    github: "https://github.com/DebanjanDutta"

  }
  const myArray = [1, 2, 3, 4, 5, 6]

  myArray.push(7, 8, 9, 10)
  return (
    <>
    <h1 className='text-3xl font-bold tracking-wide text-center text-amber-500 underline font-sans italic'>Hello Everyone This is a test for tailwind by </h1>
    <Card username="Hanumanji" img="https://i.pinimg.com/736x/63/4c/9c/634c9c72da3e5bc68e585a946f810764.jpg" />
    <Card username="Shivji" img="https://i.pinimg.com/1200x/46/32/9b/46329b83af9d73cb115a6f21e36152ee.jpg"/>
    <Card username="Ganeshji" img="https://i.pinimg.com/736x/55/84/6f/55846f4146eeddff45176d2602a6ab6d.jpg"/>
    <Card username="Little Krishna" img="https://i.pinimg.com/736x/8c/fd/14/8cfd143f60a0e6162f81d960fd6aa383.jpg"/>
    
    <AnotherCard username={myobj.name} text={myobj.github} />
    <AnotherCard username={myobj.name} text={myArray} />
      </>
  )
}

export default App
