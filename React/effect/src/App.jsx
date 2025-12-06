import React, { useEffect, useState } from "react";

function App() {
  const [count, setC] = useState(0);
  useEffect(() => {
    console.log("Mounted");
    return ()=>{
      console.log("Unmounted")
    };
  });
  return (
    <div>
      <button onClick={() => setC(count + 1)}>Current count: {count}</button>
    </div>
  );
}

export default App;
