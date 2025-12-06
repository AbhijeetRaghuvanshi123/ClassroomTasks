import React, { useState } from 'react'
import Student from './Student'

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Student name={name} setName={setName} />
    </div>
  )
}

export default App