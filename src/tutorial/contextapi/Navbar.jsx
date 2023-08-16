import { useState, createContext } from 'react'
import NavLinks from './NavLinks'
import { useContext } from 'react'

// creating custom hook for useContext 

export const useAppContext = () => useContext(NavbarContext)

export const NavbarContext = createContext()

const Navbar = () => {
  const [user, setUser] = useState({name:'bob'})
  const logout = () => {
    setUser(null)
  }
  return (
    <NavbarContext.Provider value={{user, logout}}>
      <nav className='navbar'>
          <h5>CONTEXT API</h5>
          <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar

// the reason we are using double curly brackets is that we are passing object 

// another way we can do is by assiging the object with variable then passing the value 