// import Card from "./Card";
import { CardsData } from "./CardsData";
import Card from "./Card";

const Cards = () => {
  return (
    <section className="card">
      {CardsData.map((card, index) => {
        return <Card key={index} card={card} />;
      })}
    </section>
  );
};

export default Cards;
