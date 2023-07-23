import React  from "react"
import { data } from "../data"
import './App.css'

function ListChall() {
  const [people, setPeople] = React.useState(data)

  // pass id 
  const removeItem = (id) => {
    // console.log(id);
    const newPeople = people.filter(people =>  people.id !== id)
    setPeople(newPeople)
  }

  const clearAllItem = () => {
    setPeople([])
  }


  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={clearAllItem}>Remove all</button>
    </div>
  );
}

export default ListChall
