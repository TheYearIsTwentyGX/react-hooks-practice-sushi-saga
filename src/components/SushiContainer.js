import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, onEatSushi}) {
  const [sushiPage, setSushiPage] = useState(0);

  function handleEat(sushi) {
    onEatSushi(sushi);
  }

  function handleNextPage() {
    if (sushiPage * 4 + 5 > sushi.length)
      setSushiPage(0);
    else
      setSushiPage(sushiPage + 1);
  }
  return (
    <div className="belt">
      {sushi.map((s) => (<Sushi key={s.id} sushi={s} eatSushi={handleEat} />)).slice(sushiPage * 4, sushiPage * 4 + 4)}
      <MoreButton handleMore={handleNextPage} />
    </div>
  );
}

export default SushiContainer;
