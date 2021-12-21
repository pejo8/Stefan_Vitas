import axios from "axios";

const getValue = (value) => {
  switch (value) {
    case "ACE":
      return 1;
    case "JACK":
      return 11;
    case "QUEEN":
      return 12;
    case "KING":
      return 13;
    default:
      return value;
  }
};

const getCards = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      url: "https://deckofcardsapi.com/api/deck/new/draw/?count=52",
    };

    const response = await axios(config);

    const { status } = response;
    if (status === 200) {
      const { data } = response;
      const { cards } = data;
      let allCards = [];
      cards.forEach((card, numOfCard) => {
        let { image, value, suit } = card;
        value = getValue(value);
        allCards.push({ image, value, suit, numOfCard });
      });

      return allCards;
    }

    return [];
  } catch (error) {
    return [];
  }
};

export default getCards;
