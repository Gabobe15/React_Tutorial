import  { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { data } from '../data'
import del from '../../assets/delete.svg'

import './App.css'
// console.log(data);
const AddingData = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState(data)

    // console.log(name);
    const handleSubmit = (e) => {
        e.preventDefault()
        const Id = uuidv4()
        const newUser = {id:Id, name}
        const updateUser = [...users, newUser]
        setUsers(updateUser)
        setName("")
    }

    const deleteItem = (id) => {
        const newArray = users.filter(user => user.id !== id)
        setUsers(newArray)
    }

  return (
    <div>
      <h2>Adding Data to Existing data using form input</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      <h3>Users List</h3>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <ul key={id}>
            <li>{name} <span><img src={del} alt={name} onClick={() => deleteItem(id)}  /></span></li>
          </ul>
        );
      })}
    </div>
  );
}

export default AddingData