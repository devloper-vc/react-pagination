import "./styles.css";
import JsonData from "./MOCK_DATA.json";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0);

  // display items per page
  const usersPerPage = 10;

  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });
  // page count logic
  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {displayUsers}
      {/* pagination logic */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        containerClassName={"paginationBttns"}
        onPageChange={changePage}
        pageCount={pageCount}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
