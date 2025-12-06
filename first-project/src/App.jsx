import React from 'react'
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState(1);
  return (
    <div>
      <button onClick={()=>{setA(a*2)}}>Click = {a}</button>
    </div>
  )
}

export default App