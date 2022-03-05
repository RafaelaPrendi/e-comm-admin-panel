import { useState } from "react";
import { AiOutlineClose, GiHamburgerMenu } from "react-icons/all";
import { useHistory } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const history = useHistory();

  return (
    <>
      {showSidebar ? (
        <div className={`sidebarContainer ease-in-out duration-300 `}>
          <button
            className="flex text-4xl text-black items-center cursor-pointer mr-0 ml-auto z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <AiOutlineClose />
          </button>
          <ul>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => history.push("/")}
            >
              Faqja Kryesore
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => history.push("/products")}
            >
              Produkte
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => history.push("/orders")}
            >
              Porosi
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => history.push("/categories")}
            >
              Kategori
            </button>
          </ul>
        </div>
      ) : (
        <button
          className="flex text-4xl text-black cursor-pointer hamburger mt-4"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <GiHamburgerMenu />
        </button>
      )}
    </>
  );
};

export default Sidebar;
