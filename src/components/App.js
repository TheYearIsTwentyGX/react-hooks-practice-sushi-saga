import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [funds, setFunds] = useState(300);
  const [sushi, setSushi] = useState([]);
  const [sushiEaten, setSushiEaten] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushi) => setSushi(sushi));
  }, []);
  function handleEat(sushi) {
    if (funds >= sushi.price) {
      setFunds(funds - sushi.price);
      setSushiEaten([...sushiEaten, sushi.id]);
    }
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushi.filter(s => !sushiEaten.includes(s.id))} onEatSushi={handleEat}/>
      <Table plates={sushiEaten} funds={funds}/>
    </div>
  );
}

export default App;
