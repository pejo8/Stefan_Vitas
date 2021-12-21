import axios from "axios";
import defaultCard from "../constant/defaultCard";

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

const getCard = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      url: "https://deckofcardsapi.com/api/deck/new/draw/?count=1",
    };

    const response = await axios(config);

    const { status } = response;
    if (status === 200) {
      const { data } = response;
      const { cards } = data;

      let { image, value, suit } = cards[0];
      value = getValue(value);
      return { image, value, suit };
    }

    return defaultCard;
  } catch (error) {
    return defaultCard;
  }
};

export default getCard;
