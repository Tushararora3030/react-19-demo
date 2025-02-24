import { useState } from "react";
import './style.css'

function Header() {
  console.log("Header", Math.random());
  return (
    <header>
      <h3>React Counter</h3>
    </header>
  );
}

const Example1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <Header />
      <div className="counter">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default Example1;