import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="home-component">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Home;
