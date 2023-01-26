import React, { useContext } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Context from "../../Context/Context";
import "./cards.scss";

const Cards: React.FC = () => {
  const state = useContext(Context);

  return (
    <>
      <Search />
      <div className="cards">
        {state.cards.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </div>
    </>
  );
};

export default Cards;
