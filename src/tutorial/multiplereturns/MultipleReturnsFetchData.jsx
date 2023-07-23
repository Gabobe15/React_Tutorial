import { useEffect, useState } from 'react'

const url = `https://api.github.com/users/QuincyLarson`

function MultipleReturnsFetchData() {
    // conversion to setup booleans with isSomething
    const [isloading, setIsloading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState(null)
    



    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await fetch(url)
                const user = await resp.json()
                if(!resp.ok){
                    setIsloading(false)
                    setIsError(true)
                    return
                }
                // console.log(resp)
                setUser(user)
            } catch (error) {
                setIsError(true)
                console.log(error);
            }

            setIsloading(false)
        }

        fetchUser()
    }, [url, user])

    if(isloading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>Ther is an Error... 404</h2>
    }


    // you cannot call hook inside condition (if statement) and also we don't put it after condtional statement
    // ** useEffect should be above condtional statemts 

      
    // loading condition / text should be set before the .jsx or before the return value 

//N/B  if you destructuring you have to do it after return because the value(state) is null **

    // destructuring object 
    const {avatar_url, name, company, bio } = user
  return (
    <>
        <h2>Fetch Data</h2>
        <img style={{width:'150', borderRadius:'25px'}} src={avatar_url} alt={name} />
        <h1>{name}</h1>
        <h2>{company}</h2>
        <p>{bio}</p>
   
    </>
  )
}

export default MultipleReturnsFetchData
