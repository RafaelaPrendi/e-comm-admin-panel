import React from "react";

const Pagination = (props) => {
    const {
        currentPage,
        itemsPerPage,
        totalItems,
        paginateBack,
        paginateFront} = props;
    console.log("current page=", currentPage, "curr itm=", totalItems, "items per page", itemsPerPage , "from comp")

  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">{currentPage * itemsPerPage - 5}</span>
          to
          <span className="font-medium"> {currentPage * itemsPerPage} </span>
          of
          <span className="font-medium"> {totalItems} </span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginateBack();
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Previous</span>
          </button>

          <button
            onClick={() => {
              paginateFront();
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
