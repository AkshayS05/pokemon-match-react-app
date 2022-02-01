import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
import Winner from "./components/Winner";
const cardImages = [
  {
    src: "/img/helmet-1.png",
    matched: false,
  },
  {
    src: "/img/potion-1.png",
    matched: false,
  },
  {
    src: "/img/ring-1.png",
    matched: false,
  },
  {
    src: "/img/scroll-1.png",
    matched: false,
  },
  {
    src: "/img/shield-1.png",
    matched: false,
  },
  {
    src: "/img/sword-1.png",
    matched: false,
  },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disable, setDisable] = useState(false);
  const [winner, setWinner] = useState(false);
  // const [winner, setWinner] = useState(false);
  //duplicate each card ones
  //shuffle cards
  const shuffleCards = () => {
    const doubleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(doubleCards);
    setTurns(0);
  };

  const handleClick = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setDisable(true);
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisable(false);
  };
  //start the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleClick={handleClick}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disable={disable}
          />
        ))}
      </div>
      <h2>Turns Taken: {turns}</h2>
      {cards.every((card) => card.matched === true) && (
        <Winner turns={turns} shuffleCards={shuffleCards} />
      )}
    </div>
  );
}
export default App;
