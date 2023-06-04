import React from "react";
import "./styles.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="Pagination__Container">
      {pageNumbers.map((number) => (
        <li
          className={`Pagination__Item ${
            number === currentPage ? "Pagination__Item--active" : ""
          }`}
          key={number}
        >
          <a
            className="Pagination__Link"
            href="#"
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
