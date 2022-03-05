import React from "react";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const Table = (props) => {
  const { colHeader, data } = props;
  return (
    <div className="flex flex-col" style={{ width: "85%" }}>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle dark:bg-gray-800">
          <div className="p-4">
            <label for="table-search" className="sr-only">
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
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 table-auto dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  {colHeader.map((header) => {
                    return (
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        style={{width: "20%"}}
                      >
                        {header}
                      </th>
                    );
                  })}
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    style={{width: "13%"}}
                  >
                    <span>Shiko Detaje</span>
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    style={{width: "13%"}}
                  >
                    <span>Edito</span>
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    style={{width: "13%"}}
                  >
                    <span>Fshi</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {data.map((item) => {
                  return (
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {Object.keys(item).map((key) => {
                        return (
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {Array.isArray(item[key]) && item[key].length !== 0
                              ? item[key].map((subItem) => {
                                  return <li>{subItem.name}</li>;
                                })
                              : item[key]}
                          </td>
                        );
                      })}
                      <td className="py-4 px-6 text-sm font-medium whitespace-nowrap mr-auto ml-auto">
                        <button className="text-blue-600 dark:text-blue-500 hover:underline ml-2 mr-2 inline-flex items-center">
                          <AiFillEye color="black" />
                        </button>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium whitespace-nowrap mr-auto ml-auto">
                        <button className="text-blue-600 dark:text-blue-500 hover:underline ml-2 mr-2">
                          <BsFillPencilFill color="blue" />
                        </button>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium whitespace-nowrap mr-auto ml-auto">
                        <button className="text-blue-600 dark:text-blue-500 hover:underline ml-2 mr-2">
                          <AiFillDelete color="red" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
