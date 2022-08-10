import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import "./Table.scss";
import Pagination from "../Pagination";
import { CATEGORY, ORDER, PRODUCT } from "../../../actions/constants";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesPaginate } from "../../../actions";

const Table = (props) => {
  const {
    colHeader,
    data,
    showDetailsColumn,
    setShowModal,
    isCategoryData,
    handleDeleteItem,
    handleEditItem,
    dataType,
  } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  //manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [currentItems, setCurrentItems] = useState(
    categories.slice(indexOfFirstItem, indexOfLastItem)
  );
  // Change page
  const paginateFront = () => {
    if (currentItems.length === 0) {
      getMoreItems();
    }
    if (categories.length < indexOfLastItem - indexOfFirstItem) {
      setCurrentItems(categories);
    }
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const getMoreItems = () => {
    if (dataType === CATEGORY) {
      dispatch(getCategoriesPaginate(currentPage, itemsPerPage));

      // setTableData
    } else if (dataType === PRODUCT) {
    } else if (dataType === ORDER) {
    }
  };
  console.log(
    "current page=",
    currentPage,
    "curr itm=",
    currentItems,
    "categories",
    categories,
    categories.length < indexOfLastItem - indexOfFirstItem,
    indexOfLastItem - indexOfFirstItem
  );

  useEffect(() => {
    const filtered = data.filter((item) => {
      if (searchTerm === "") return item;
      else if (
        searchTerm !== "" &&
        item?.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return item;
      else return null;
    });
    setTableData(filtered);
  }, [data, searchTerm]);
  useEffect(() => {
    setCurrentItems(categories.slice(indexOfFirstItem, indexOfLastItem));
  }, [categories, currentItems, indexOfFirstItem, indexOfLastItem]);
  const renderSubCategories = (item, key, index) => {
    let jsx = [];
    if (key === "_id") jsx.push(<span key={index}>{index + 1}</span>);
    else {
      if (Array.isArray(item[key]) && item[key].length !== 0) {
        item[key].forEach((subItem, index) => {
          // if it has no more sub categories just return name
          if (!Array.isArray(subItem[key]) && !subItem[key].length > 0) {
            jsx.push(<p key={index}>{subItem.name.length}</p>);
          } else {
            //make a list of sub categories of that sub category
            subItem[key].forEach((sub, index) => {
              jsx.push(
                <p key={index}>
                  {subItem.name} : {sub.name}
                </p>
              );
            });
          }
        });
      } else jsx.push(<span key={index}>{item[key]}</span>);
    }
    return jsx;
  };

  return (
    <div className="flex flex-col" style={{ width: "85%" }}>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle dark:bg-gray-800">
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Kerko
            </label>
            <div className="relative mt-1">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <table className="divide-y divide-gray-200 table-auto dark:divide-gray-700 overflow-scroll">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  {colHeader.map((header, index) => {
                    return (
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        style={
                          header === "#"
                            ? { width: "50px" }
                            : { width: "350px" }
                        }
                        key={index}
                      >
                        {header}
                      </th>
                    );
                  })}
                  {showDetailsColumn && (
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      style={{ width: "100px" }}
                    >
                      <span>Shiko Detaje</span>
                    </th>
                  )}
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    style={{ width: "100px" }}
                  >
                    <span>Edito</span>
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    style={{ width: "100px" }}
                  >
                    <span>Fshi</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {categories.length > 0 ? (
                  currentItems.map((item, index) => {
                    return (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        key={index}
                      >
                        {Object.keys(item).map((key) => {
                          return (
                            <td
                              className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              key={Math.random()}
                            >
                              {isCategoryData
                                ? renderSubCategories(item, key, index)
                                : key === "_id"
                                ? index + 1
                                : item[key]}
                            </td>
                          );
                        })}
                        {showDetailsColumn && (
                          <td className="py-4 px-6 text-sm font-medium whitespace-nowrap mr-auto ml-auto">
                            <button
                              className="text-blue-600 dark:text-blue-500 hover:underline ml-2 mr-2 inline-flex items-center"
                              onClick={() => {
                                setShowModal(true);
                              }}
                            >
                              <AiFillEye color="black" />
                            </button>
                          </td>
                        )}
                        <td className="py-4 px-6 text-sm font-medium whitespace-nowrap mr-auto ml-auto">
                          <button
                            className="text-blue-600 dark:text-blue-500 hover:underline ml-2 mr-2"
                            onClick={() => handleEditItem(item)}
                          >
                            <BsFillPencilFill color="blue" />
                          </button>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium whitespace-nowrap mr-auto ml-auto">
                          <button
                            className="text-blue-600 dark:text-blue-500 hover:underline ml-2 mr-2"
                            onClick={() => handleDeleteItem(item)}
                          >
                            <AiFillDelete color="red" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <p className="p-2 m-6">Nuk ka me te dhena!</p>
                )}
              </tbody>
            </table>
            <div>
              <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={currentItems.length}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                getMoreItems={getMoreItems}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
