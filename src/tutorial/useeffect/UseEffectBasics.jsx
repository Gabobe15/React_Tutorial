import {useEffect, useState} from 'react'

function UseEffectBasics() {
    const [value, setValue] = useState(0)

    const handleClick = () => {
        // setValue(value + 1)
        console.log(`The value is `);
    }

    handleClick()

    useEffect(() => {
        console.log("useEffect hook")
    }, [])
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>increment</button>
    </div>
  );
}

export default UseEffectBasics

// onMount 
// with the second parameter([]), it is going to render at the first time 
    // useEffect(() => {}, []);
