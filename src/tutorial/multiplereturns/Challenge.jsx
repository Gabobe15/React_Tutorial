import { useState } from 'react'

function Challenge() {
    const [user, setState] = useState('Gabobe')
    const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
        { user && isLogin ? <h2>Welcome {user}</h2> : <h2>Please login</h2>
        } 
      <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "singout" : "signIn"}</button>
    </div>
  )
}

export default Challenge
