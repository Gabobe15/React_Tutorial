import { useState } from "react"

const ControlledInputs = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')

    // const handleChange = (e) => {
    //     setUser(e.target.value)
    //     setEmail(e.target.value);
    //     // something 
    // }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, email);
        setUser("")
        setEmail("")
    }
 
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          id="name"
          className="form-input"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          id="email"
          className="form-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
}

export default ControlledInputs