import "./SingleCard.css";

export default function SingleCard({ card, handleClick }) {
  const handleChoice = () => {
    handleClick(card);
  };
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleChoice}
          alt="card back"
        />
      </div>
    </div>
  );
}
