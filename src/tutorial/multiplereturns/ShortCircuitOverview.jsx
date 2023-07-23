import { useState } from 'react'

function ShortCircuitOverview() {
    // falsy 
    const [text, setText] = useState('')
    // trully 
    const [name, setName] = useState('Susan')
    const [user, setUser] = useState({name: 'john'})
    const [isEditing, setIsEditing] = useState(false)
  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {/*  true  */}
      {text && <div>
         <h2>whatever return</h2>
         <h2>{name}</h2>
        </div>}

      {/* not true  */}
      {/* {!text && <div>
         <h2>whatever return</h2>
         <h2>{name}</h2>
        </div>} */}

        {user && <SomeComponent name={user.name} />}

        {/* ternery operater  */}
        {/* condition ? true : false  */}

        <h2 style={{margin: '1rem 0'}}>Ternanary Operator</h2>
        <button>{isEditing ? "Edit" : 'add'}</button>
        {
          user ? (<div> <h4>Hello there user {user.name}</h4></div>) : (<div><h2>Please login</h2></div>)
        }

    </div>
  )
}

const SomeComponent = ({name}) => {
  return(
    <div>
      <h2>Some component</h2>
      <h2>{name}</h2>
    </div>
  )
}


export default ShortCircuitOverview
