import { useState } from "react";
import ReactGA from "react-ga4";

const Home = () => {
  const [count, setCount] = useState(0);

  const onBtnClicked = (isPlus: boolean) => {
    if (isPlus) {
      setCount(count + 1);
      ReactGA.event({
        category: "clicked_plus",
        action: "clicked_plus",
        label: "clicked_plus", // optional
      });
    } else {
      setCount(count - 1);
      ReactGA.event({
        category: "clicked_minus",
        action: "clicked_minus",
        label: "clicked_minus", // optional
      });
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
