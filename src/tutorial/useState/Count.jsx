import { useState } from "react"
function Count() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Count
