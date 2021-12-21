import React, { useEffect, useState } from "react";
import "../css/MainPage.css";
import getCards from "../helpers/getCards";
import Card from "./Card";

const MainPage = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const cards = await getCards();
      setCards(cards);
    };

    fetchData();
  }, []);

  return (
    <div className="mainPage">
      <div className="cards-row">
        {cards.slice(0, 13).map((card) => {
          return (
            <Card
              image={card.image}
              value={card.value}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
              suit={card.suit}
              numOfCard={card.numOfCard}
              key={card.numOfCard}
            />
          );
        })}
      </div>

      <div className="cards-row">
        {cards.slice(13, 26).map((card) => {
          return (
            <Card
              image={card.image}
              value={card.value}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
              suit={card.suit}
              numOfCard={card.numOfCard}
              key={card.numOfCard}
            />
          );
        })}
      </div>

      <div className="cards-row">
        {cards.slice(26, 39).map((card) => {
          return (
            <Card
              image={card.image}
              value={card.value}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
              suit={card.suit}
              numOfCard={card.numOfCard}
              key={card.numOfCard}
            />
          );
        })}
      </div>

      <div className="cards-row">
        {cards.slice(39, 52).map((card) => {
          return (
            <Card
              image={card.image}
              value={card.value}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
              suit={card.suit}
              numOfCard={card.numOfCard}
              key={card.numOfCard}
            />
          );
        })}
      </div>

      
      <button
        onClick={() => {
          if (selectedCards.length === 2) {
            if (selectedCards[0].value === selectedCards[1].value) {
              document.getElementById(
                `card_${selectedCards[0].numOfCard}`
              ).style.pointerEvents = "none";
              document.getElementById(
                `card_${selectedCards[0].numOfCard}`
              ).style.opacity = "0.5";

              document.getElementById(
                `card_${selectedCards[1].numOfCard}`
              ).style.pointerEvents = "none";
              document.getElementById(
                `card_${selectedCards[1].numOfCard}`
              ).style.opacity = "0.5";

            } else {
              document.getElementById(
                `card_img_${selectedCards[0].numOfCard}`
              ).src = "/card.png";
              
              document.getElementById(
                `card_img_${selectedCards[1].numOfCard}`
              ).src = "/card.png";
            }
            setSelectedCards([]);
          } else {
            window.alert("Select card");
          }
        }}
      >
        Compare
      </button>
    </div>
  );
};

export default MainPage;
