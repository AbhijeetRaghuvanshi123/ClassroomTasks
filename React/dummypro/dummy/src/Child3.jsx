import React from 'react'
import {useState, useMemo} from 'react'

const Child3 = () => {
  const [count, setC] = useState(0);
  function sum(){
    let sum = 0;
    for(let i = 0; i < 1000000000; i++){
      sum = sum + i;
    }
    return sum;
  }

  const res = useMemo(()=>sum(), []);
  return (
    <div>
      <p>Sum: {res}</p>
      <p>Count: {count}</p>
      <button onClick={()=>setC(count+1)}>Increase</button>
    </div>
  )
}

export default Child3