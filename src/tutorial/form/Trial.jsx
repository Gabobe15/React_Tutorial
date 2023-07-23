import  { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

// imports 
import del from '../../assets/delete.svg'
import {data} from '../data'

// console.log(data);

const Trial = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState(data)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name) return;
        const Id = uuidv4()
        const newUser = {id: Id, name} // creating object
        const updateUser = [...users, newUser] // adding new object to exiting one
        setUsers(updateUser) // giving updated to setUser
        setName("")
    }

    const deleteItem = (id) => {
      const remainingUsers = users.filter(user => user.id !== id)
      setUsers(remainingUsers)
    }
   
    // const deleteAll = (a) => {
    //     // setUsers([])
    //     console.log('you clicked me!');
    //     // console.log(id);
    // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <label htmlFor="name">Name:</label> <br />
         <input 
            type="text"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value) }
        />
        <br />
        <button>Submit</button>
      </form>
      <div>
        <h2>Users</h2>
        <button >Delete All users</button>
        {
            users.map(user => {
                const {id, name} = user
                return (
                  <div key={id} style={{ display: "flex" }}>
                    <h4 style={{ flex: 1 }}>{name}</h4>
                    <button
                      onClick={() => deleteItem(id)}
                      style={{
                        border: "none",
                        outline: "0",
                        background: "transparent",
                      }}
                    >
                      <img src={del} alt="" style={{ width: "20px" }} />
                    </button>
                  </div>
                );
            })
        }
      </div>
    </div>
  );
}

export default Trial