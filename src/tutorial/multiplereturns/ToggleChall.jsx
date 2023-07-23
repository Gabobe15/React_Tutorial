import { useState } from 'react'

function ToggleChall() {
    const [user, setUser ] = useState(null)

    const login = () => {
        setUser({name: 'vegan food truck'})
    }

    const logout = () => {
        setUser(null)
    }

  return (
    <div>
        {
            user ? (
                <div>
                    <h4> Hello there, {user.name} </h4>
                    <button onClick={logout} >logout</button>
                </div>
            ) : (
                <div>
                    <h2>Please login</h2>
                    <button onClick={login}>login</button>
                </div>
            )
        }
    </div>
  )
}


export default ToggleChall
