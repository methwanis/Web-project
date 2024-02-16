import React from "react";
import "./Wrapper.css";

function Wrapper({ Component, handlePageChange }) {
  return (
    <main id="main-wrapper">
      <Component handlePageChange={handlePageChange} />
    </main>
  );
}

export default Wrapper;
