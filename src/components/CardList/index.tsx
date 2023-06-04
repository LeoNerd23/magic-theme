import React from "react";
import "./styles.css";

interface Card {
  imageUrl: string;
  name: string;
  text: string;
}

interface CardListProps {
  data: Card[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="CardList__Container">
      {data.map((item, index) => (
        <div className="CardList__Item" key={index}>
          <div className="CardList__ImageContainer">
            <img className="CardList__Image" src={item.imageUrl} alt={item.name} />
          </div>
          <div className="CardList__CardContent">
            <h3 className="CardList__Title">{item.name}</h3>
            <p className="CardList__Description">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
