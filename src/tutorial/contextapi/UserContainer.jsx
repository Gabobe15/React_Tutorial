// import { useContext } from "react";
// import { NavbarContext } from "./Navbar";

import { useAppContext } from "./Navbar";

const UserContainer = () => {
  // const {user, logout} = useContext(NavbarContext) 
  const {user, logout} = useAppContext()  // useAppContext is custom which replaces useContext and import variable of that had the value
  return (
    <div className="user-container">
      {
        user ? (<><p>Hello there, {user?.name?.toUpperCase()}</p>
      <button onClick={logout} className="btn">logout</button>
        </>): 
        (
          <p>Please login</p>
        )
      }
      
    </div>
  );
};

export default UserContainer


