import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const { gtag } = window;

  const onBtnClicked = (isPlus: boolean) => {
    if (!isPlus) {
      setCount(count + 1);
      gtag("event", "clicked_plus");
    } else {
      setCount(count - 1);
      gtag("event", "clicked_minus");
    }
  };
  return (
    <div className="home-component">
      <button onClick={() => onBtnClicked(true)}>-</button>
      <span>{count}</span>
      <button onClick={() => onBtnClicked(false)}>+</button>
    </div>
  );
};

export default Home;
