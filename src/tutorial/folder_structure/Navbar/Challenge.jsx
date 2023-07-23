import { people } from '../../data'
import avatar from '../../../assets/avatar.svg'

const lists = people.map(list => {
  console.log(list);
  const {id, name, nickName='shakeAndBake', images } = list

  // long method 
  // it is going to show images if they are already provide else it leave with blank space and it avoids error 

  // const img = images && images[0] && images[0].small && images[0].small.url

  // short method 
  // the only difference is ?? and || 
  // ** search later the difference **

  // const img = images?.[0]?.small?.url || avatar
  const img = images?.[0]?.small?.url ?? avatar

    return (
      <div key={id}>
        <img src={img} alt={name} style={{width:"100px"}} />
        <h2>My name is: {name} </h2>
        <p>People call me by my nickname: {nickName} </p>

      </div>
    );
})

const Challenge = () => {
  return (
    <div>
        {lists}
    </div>
  )
}

export default Challenge



// fetching data from API and avoiding error that might halt the program 