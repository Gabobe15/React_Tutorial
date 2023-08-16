import { useCallback, useEffect, useState } from 'react'

import './App.css'

function Challenge() {
    const url = `https://api.github.com/users`;
    // const url = `https://jsonplaceholder.typicode.com/users`;
    const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch(url) 
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // }, [])


    // better way of dealing with fetching API 
    // async and try catch 

    const fetchData = useCallback(async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    }, []);  

    useEffect(() => {
        fetchData()
    }, [fetchData])
    
  return (
    <div className="container">
      <h1>Fetch Data Example</h1>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Challenge

