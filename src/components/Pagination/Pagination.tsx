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
  const { total, searchText } = useAppSelector((state) => state.table);
  const itemsPerPage = 10;
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
  }, [currentPage, dispatch]);

  return (
    <div className="flex items-center">
      <div className={styles.text}>
        {startIndex} - {endIndex} of {total} {totalPages}
      </div>
      <div className="flex items-center gap-[20px]">
        <button
          onClick={() => handlePageChange(1)}
          disabled={searchText.length !== 0 || currentPage === 1}
        >
          <ArrowLastLeftSvg
            disabled={searchText.length !== 0 || currentPage === 1}
          />
        </button>

        <div className="ml-[8px]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={searchText.length !== 0 || currentPage === 1}
          >
            <ArrowLeftSvg
              disabled={searchText.length !== 0 || currentPage === 1}
            />
          </button>
        </div>
        <input
          value={currentPage}
          onChange={handleInputChange}
          className={styles.input}
          type="number"
          disabled={searchText.length !== 0}
        />
        <div className="mr-[8px]">
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={searchText.length !== 0 || currentPage === totalPages}
          >
            <ArrowRightSvg
              disabled={searchText.length !== 0 || currentPage === totalPages}
            />
          </button>
        </div>
        <button
          onClick={() => handlePageChange(21)}
          disabled={searchText.length !== 0 || currentPage === totalPages}
        >
          <ArrowLastRightSvg
            disabled={searchText.length !== 0 || currentPage === totalPages}
          />
        </button>
      </div>
    </div>
  );
};
