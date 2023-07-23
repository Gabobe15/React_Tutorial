import  { useState } from 'react'

const MultipleInputs = () => {
    const [state, setState] = useState({
        name:'',
        email:'',
        password:''
    })

    const {name, email, password} = state

    const handleChange = (e) => {
        setState({...state, [e.target.name]:e.target.value})
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !email || !password) return;
        setState({
            name:'',
            email:'',
            password:''
        })
    }

    // console.log(name);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>MultipleInputs</h2>
         <div>
            <label htmlFor="name">Name:</label><br />
            <input 
                type="text"
                name='name'
                value={name}
                onChange={handleChange}
            />
         </div>
         <div>
            <label htmlFor="name">Email:</label><br />
            <input 
                type="email"
                name='email'
                value={email}
                onChange={handleChange}
            />
         </div>
         <div>
            <label htmlFor="name">Password:</label><br />
            <input 
                type="password"
                name='password'
                value={password}
                onChange={handleChange}
            />
         </div>
         <button>Submit</button>
      </form>
    </div>
  );
}

export default MultipleInputs