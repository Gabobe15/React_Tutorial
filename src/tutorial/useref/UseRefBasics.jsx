import { useState, useEffect, useRef } from "react"

const UseRefBasics = () => {
    const [value, setValue] = useState(0);
    const refContainer = useRef(null)
    const isMounted = useRef(false)
    // console.log(refContainer);

    useEffect(() => {
        refContainer.current.focus()
    })


    // does not run on when page mounts 
    useEffect(() => {
        if(!isMounted.current){
            isMounted.current = true
            return;
        }
        console.log('re-render');
    }, [value])

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = refContainer.current.value;
        console.log(name);
    };


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
}

export default UseRefBasics


// useRef can be used as uncontrolled input 

// since useRef does not triger re-render you would not have infinite loop if you use useEffect without dependency array  and then updating the state value 