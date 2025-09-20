import { useState } from "react"
function App() {
  

  const [count, setCount]= useState(1) 

//  let count = 0
 

//  const  setCount= useState(0)

 const increment = () => {
    setCount(count + 1)
   console.log(count);
 }
 const proper_jumping_decrement = () => {
    setCount((prevCount) => {
        return prevCount - 1   //simple callback
    })     
    setCount((prevCount) => {
        return prevCount - 1   //simple callback
    })     
    setCount((prevCount) => {
        return prevCount - 1   //simple callback
    })     
 }
 const decrement = () => {
    setCount(0)
 }
  return (
    <>
      <h1>React course with Debanjan </h1>
      <h2>Hello Everyone  {count}</h2>
      <button 
      onClick={increment}
      >Add Value</button>{"  "}
      <button
      onClick={decrement}
      >Remove Value</button>
      <button
      onClick={proper_jumping_decrement}
      >Jumping Decrement</button>

      <p>footer:  {count}</p>
    </>
    )
}

export default App

