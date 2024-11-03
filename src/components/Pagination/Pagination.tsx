import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import { ArrowRightSvg } from "../Svg/ArrowRightSvg";
import { ArrowLastRightSvg } from "../Svg/ArrowLastRightSvg";
import { ArrowLeftSvg } from "../Svg/ArrowLeftSvg";
import { ArrowLastLeftSvg } from "../Svg/ArrowLastLeftSvg";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getUsers } from "../../features/table/tableSlice";

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { total, searchText, itemsPerPage } = useAppSelector(
    (state) => state.table
  );
  const totalPages = Math.ceil(total / itemsPerPage);
  const dispatch = useAppDispatch();
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, total);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(Number(e.target.value));

    if (Number(e.target.value) >= totalPages) {
      setCurrentPage(Number(totalPages));
    }
    if (Number(e.target.value) < 1) {
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    dispatch(
      getUsers(
        `https://dummyjson.com/users?limit=${itemsPerPage}&skip=${
          (currentPage - 1) * itemsPerPage
        }`
      )
    );
  }, [currentPage, dispatch, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div className="flex items-center">
      <div className={styles.text}>
        {startIndex} - {endIndex} of {total}
      </div>
      <div className="flex items-center gap-[14px]">
        <button
          onClick={() => handlePageChange(1)}
          disabled={searchText.length !== 0 || currentPage === 1}
          className="px-[6px] py-[4px]"
        >
          <ArrowLastLeftSvg
            disabled={searchText.length !== 0 || currentPage === 1}
          />
        </button>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={searchText.length !== 0 || currentPage === 1}
          className="px-[6px] py-[4px]"
        >
          <ArrowLeftSvg
            disabled={searchText.length !== 0 || currentPage === 1}
          />
        </button>
        <input
          value={currentPage}
          onChange={handleInputChange}
          className={styles.input}
          type="number"
          disabled={searchText.length !== 0}
        />
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={searchText.length !== 0 || currentPage === totalPages}
          className="px-[6px] py-[4px]"
        >
          <ArrowRightSvg
            disabled={searchText.length !== 0 || currentPage === totalPages}
          />
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={searchText.length !== 0 || currentPage === totalPages}
          className="px-[6px] py-[4px]"
        >
          <ArrowLastRightSvg
            disabled={searchText.length !== 0 || currentPage === totalPages}
          />
        </button>
      </div>
    </div>
  );
};
