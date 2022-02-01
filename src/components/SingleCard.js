import "./SingleCard.css";

export default function SingleCard({ card, handleClick, flipped, disable }) {
  const handleChoice = () => {
    if (!disable && !flipped) {
      handleClick(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
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
