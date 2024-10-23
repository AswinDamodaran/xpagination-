import React from "react";
import styles from "./Pagination.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

function Pagination({ updatePage, currentPage, totalPages }) {
  const handleNext = () => {
    if (totalPages != currentPage) {
      updatePage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      updatePage((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.paginationMain}>
      <button className={styles.btn} onClick={handlePrev} disabled={currentPage == 1}>
      Previous
      </button>
      <div className={styles.page} ><p  >{currentPage}</p></div>
      <button  className={styles.btn} onClick={handleNext} disabled={currentPage == totalPages}>
      Next
      </button>
    </div>
  );
}

export default Pagination;
