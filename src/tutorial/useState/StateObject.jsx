import React from 'react'

function StateObject() {
    const [state, setState] = React.useState({
            name: '',
            age:'',
            hobby: '',
        })

    const {name, age, hobby} = state
 
    // changing one value from the state object
    // const DisplayPerson = () => {
    //     setState({...state, name:'abdullahi'})
    // }

    const handleChange = (e) => {
      setState({...state, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setState({
        name:'',
        age:{},
        hobby:''
      })
    }


  return (
    <div>
      <h4>Name: {name} </h4>
      <h4>Age: {age} </h4>
      <p>Hobby: {hobby} </p>
      {/* <button onClick={DisplayPerson}>Display</button> */}

      <form onSubmit={handleSubmit}>
        <label>Full Name:</label><br />
        <input
          placeholder="name"
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          //   onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>My age is</label><br />
        <input
          placeholder="age"
          type="number"
          value={age}
          name="age"
          onChange={handleChange}
          //   onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label>My hobby is:</label><br />
        <input
          placeholder="hobby"
          type="text"
          value={hobby}
          name="hobby"
          onChange={handleChange}
          //   onChange={(e) => setHobby(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default StateObject
