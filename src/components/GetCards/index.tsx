import React, { useEffect, useState } from "react";
import CardList from "../CardList";
import Pagination from "../Pagination";

import "./styles.css";

interface Card {
  imageUrl: string;
  name: string;
  text: string;
}

const GetCards: React.FC = () => {
  const [data, setData] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.magicthegathering.io/v1/cards"
        );
        const jsonData = await response.json();

        const uniqueCards: Card[] = jsonData.cards.filter(
          (card: Card, index: number, self: Card[]) =>
            self.findIndex((c) => c.name === card.name) === index
        );

        setData(uniqueCards);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalItems: number = data.length;
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Card[] = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="GetCards__Container">
        <CardList data={currentItems} />

        {data.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalItems / itemsPerPage)}
            paginate={paginate}
          />
        )}
      </div>
    </>
  );
};

export default GetCards;
