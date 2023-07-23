import {useEffect, useState} from 'react'

function MultipleEffect() {
    const [value, setValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)

     useEffect(() => {
        console.log(`useEffect hook`);
     }, [value])

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Value</button>
      <h1>Value: {secondValue}</h1>
      <button onClick={() => setSecondValue(secondValue + 1)}>Second Value</button>
    </div>
  );
}

export default MultipleEffect


// onMount 
// with the second parameter([]), it is going to render at the first time 
    // useEffect(() => {}, []);

// onUpdate 
// the page is going to re-render when we update the array 
//    useEffect(() => {
//      console.log(`useEffect hook`);
//    }, [value]);