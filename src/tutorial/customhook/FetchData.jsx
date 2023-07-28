import useFetch from "./useFetch"
const url = 'https://api.github.com/users/QuincyLarson'



const FetchData = () => {
const {isError, isLoading, data:user} = useFetch(url)
    // order matters 
    // don't place user JSX before loading or error 
    if(isLoading) {
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>There was an error....</h2>
    }

    // destructuring the data from api 
    const { avatar_url, name, company, bio } = user

  return (
    <div style={{textAlign:'center'}}>
        <img src={avatar_url} alt={name} width='200px' />
        <h2>{name}</h2>
        <h4>Works At {company}</h4>
        <p>{bio}</p>
    </div>
  )
}

export default FetchData