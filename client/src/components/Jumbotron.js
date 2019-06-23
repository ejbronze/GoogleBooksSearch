import React from "react";

function Jumbotron() {
  return (
    <div className="container mt-3 text-center">
      <div className="jumbotron jumbotron-fluid bg-success">
        <h1 className="display-4 font-weight-bold text-white">
          (REACT) GOOGLE BOOK SEARCH
        </h1>
        {/*insert image */}
        <h3 className="font-weight-bold text-white">
          Search for and Save Books of Interest
        </h3>
      </div>
    </div>
  );
}

export default Jumbotron;
