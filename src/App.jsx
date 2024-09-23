import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  

  const addCount = () => {
    setCounter(counter+1)
  }
  const removeCount = () => {
    setCounter(counter-1)
  }
  

  return (
    <>
     <h1>My First Counter Project</h1>
     <button onClick={addCount} >Add Count </button>
     <br /> <br />
     <button onClick={removeCount}> Remove Count  </button>

     <br /> <br />
     <h1>{counter}</h1>
    </>
  )
}

export default App
