import React, { useEffect, useState } from "react";
import getCard from "../helpers/getCard";
import defaultCard from "../constant/defaultCard";
import "../css/MainPage.css";

const MainPage = () => {
  const [card1, setCard1] = useState(defaultCard);
  const [card2, setCard2] = useState(defaultCard);
  const [selected, setSelected] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const getNewCard = async () => {
    const newCard = await getCard();
    setCard2(newCard);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newCard = await getCard();
      setCard1(newCard);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setDisabled(
      (selected === 1 && card1.value > card2.value) ||
        (selected === 2 && card1.value < card2.value)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card2.value]);

  return (
    <div className="mainPage">
      <div className="cards">
        <img src={card1.image} alt="card" style={{ marginRight: "58px" }} />
        {card2.value === 0 ? (
          <h2>Choose your card!</h2>
        ) : (
          <img src={card2.image} alt="card" />
        )}
      </div>
      <div style={{ marginLeft: "20%", paddingLeft: "90px", float: "left" }}>
        <button
          onClick={() => {
            getNewCard();
            setSelected(1);
          }}
          disabled={disabled}
        >
          Lower
        </button>
        <button
          onClick={() => {
            getNewCard();
            setSelected(2);
          }}
          disabled={disabled}
        >
          Higer
        </button>
      </div>
    </div>
  );
};

export default MainPage;
