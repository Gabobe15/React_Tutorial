import { useState, useEffect } from 'react'

const MultipleReturnsBasics = () => {
  const [isloading, setIsLoading] = useState(true);

  //  loading using if statement
  //     if(isloading){
  //         return <h2>Loading...</h2>
  //     }

  // loading using useEffect hook
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

      if(isloading){
          return <h2>Loading...</h2>
      }

  return (
    <div>
      <h2>Multiple Return Basics</h2>
    </div>
  );
}

export default MultipleReturnsBasics
