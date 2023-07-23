import {  useState } from "react";
import {v4 as uuidv4} from 'uuid'
import del from '../../assets/delete.svg'
import { data } from '../data'


const UserChallenge = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState(data)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      // does not submit empty input 
      if(!name) return;
      // uuid provide id 
      const Id = uuidv4()
      // passing new object
      const newUser = {id: Id, name};
      // adding new items to the exisiting list (we don't want to override existing data)
      const updateUser = [...users, newUser]
      // update the sent item so that we can loop through 
      setUsers(updateUser)
      setName("");
    }

  const deleteItem = (id) => { 
    const updateUsers = users.filter(person => person.id !== id)
    setUsers(updateUsers)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>{" "}
          <br />
          <input
            className="form-input"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <div>
        <h2>Users Names</h2>
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div key={id} style={{ display: "flex", margin: "0 1rem" }}>
              <h4>{name}</h4>
              <button
                onClick={() => deleteItem(id)}
                style={{
                  cursor: "pointer",
                  border: "none",
                  outline: "0",
                  background: "transparent",
                  marginLeft: "40px",
                }}
              >
                <img src={del} alt="" style={{ width: "20px", color: "red" }} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserChallenge