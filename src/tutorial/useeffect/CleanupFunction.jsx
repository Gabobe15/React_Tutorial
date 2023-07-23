import { useState, useEffect } from 'react'

function CleanupFunction() {
    const [toggle, setToggle] = useState(false)
    console.log('render');

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>toggle component</button>
      {toggle && < RandomComponent />}
    </div>
  );
}
// ex 01 
// const RandomComponent = () => {
//     useEffect(() => {
//         // console.log('hm, this is intresting');
//         const inttID = setInterval(() => {
//             // console.log('hello, from interval');
//         }, 1000);
//         return () => {
//             clearInterval(inttID)
//             console.log('cleanup');
//         };
//     }, [])
//     return <h1>hello there</h1>
// }

// ex02 
const RandomComponent = () => {
    useEffect(() => {
     const someFunc = () => {
      // some logic 
     }
     window.addEventListener('scroll', someFunc);
     return () => window.removeEventListener('scroll', someFunc)
    }, [])
    return <h1>hello there</h1>
}

export default CleanupFunction
