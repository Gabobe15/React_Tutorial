import  { useState } from 'react'
import './App.css'

const UnControlledInput = () => {
    const [value, setValue] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        // console.log(formData);
        // const email = formData.get("email")
        // console.log(email);
        // console.log([...formData.entries()]);

        // convert nested arrays to object with key value pair 
        const newUser = Object.fromEntries(formData)
        console.log(newUser);
        // updating state 
        setValue(value + 1)
        e.currentTarget.reset()
    }

  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <h4>Form Data API</h4>
            {/* name  */}
            <div className="form-row">
                <label htmlFor="name" className="form-label">Name</label><br />
                <input type="text"  id="name"  name ="name" className="form-input" />
            </div>
            {/* email  */}
            <div className="form-row">
                <label htmlFor="email" className="form-label">Email</label><br />
                <input type="text"  id="email"  name ="email" className="form-input" />
            </div>
            {/* password  */}
            <div className="form-row">
                <label htmlFor="password" className="form-label">Password</label><br />
                <input type="password"  id="password"  name ="password" className="form-input" />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UnControlledInput