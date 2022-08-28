import React from "react";

const Pagination = (props) => {
  const { currentPage, itemsPerPage, totalItems, paginateBack, paginateFront } =
    props;
  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Duke treguar &nbsp;
          <span className="font-medium">{currentPage * itemsPerPage - 5}</span>
          &nbsp;deri ne
          <span className="font-medium"> {currentPage * itemsPerPage}</span>
          &nbsp;rezultate
        </p>
      </div>
      <div className="w-10 inline-flex space-between">
        <div
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginateBack();
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Para</span>
          </button>

          <button
            onClick={() => {
              paginateFront();
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Tjetra</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
