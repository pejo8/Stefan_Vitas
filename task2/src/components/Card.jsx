import React from "react";
import "../css/Card.css";

const Card = (props) => {
  const markedCard = () => {
    const { selectedCards } = props;
    let card = document.getElementById(`card_img_${props.numOfCard}`);
    if (
      selectedCards.length === 1 &&
      selectedCards[0].numOfCard === props.numOfCard
    ) {
      props.setSelectedCards([]);
      card.src = "/card.png";
    } else if (selectedCards.length < 2) {
      props.setSelectedCards([
        ...selectedCards,
        { value: props.value, numOfCard: props.numOfCard },
      ]);
      card.src = props.image;
    }
  };

  return (
    <div className="card" onClick={markedCard} id={`card_${props.numOfCard}`}>
      <img
        src='/card.png'
        alt="card"
        id={`card_img_${props.numOfCard}`}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Card;
