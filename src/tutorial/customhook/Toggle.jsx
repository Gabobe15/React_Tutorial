import useToggle from "./UseToggle"

const Toggle = () => {
  const {show, toggle} =  useToggle(false)
  return (
    <div>
        <h2>Custom hook</h2>
        <button onClick={toggle} >
            toggle
        </button>
        {show && <h4>Use custom hook</h4>}
    </div>
  )
}

export default Toggle