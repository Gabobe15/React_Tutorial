import React from 'react'
import "./App.css";

import { mock } from '../fakedata'

function Mock() {
    const [users, setUsers] = React.useState(mock)
    
    const removeItem = (id) => {
        const newUsers = users.filter(user => user.id !== id)
        setUsers(newUsers)
    }

    const removeAll = () => {
        setUsers([])
    }

    const data =   users.map((user) => {
           const { id, name, email } = user;
        //    console.log(user);
           return (
             <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{email}</td>
               <button type='button' onClick={() => removeItem(id)}>Delete</button>
             </tr>
           );
      });

  return (
    <div>
      <h3>Json Placeholder</h3>
        {data.length > 0
         ? ( 
         <>
            <button style={{margin:'1rem 0'}} onClick={removeAll}>Remove all data</button>
            <table border={1}>
                <thead>
                    <tr>
                    <th>NO</th>
                    <th>Names</th>
                    <th>Account</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>    
        </>
      )
         :<h2>Nothing to Display</h2>
    }
    </div>
  );
}

export default Mock
