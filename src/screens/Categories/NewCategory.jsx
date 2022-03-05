import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions";
import Input from "../../components/UI/Input/Input";

const NewCategory = (props) => {
  const initCategory = {
    name: "",
    categoryImage: "",
    //for sub categories
    parentId: "",
  };

  const [error, setError] = useState("");
  const [newCategory, setNewCategory] = useState(initCategory);
  const [parentCategorySelected, setParentCategorySelected] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const handleCategoryName = (event) => {
    event.preventDefault();
    setNewCategory({ ...props.newCategory, name: event.target.value });
  };
  const handleSaveCategory = () => {
    if (newCategory.name.length > 0) {
      dispatch(addCategory(newCategory));
      props.setShowModal(false);
    } else setError("Please add category name");
  };
  const generateListClassName = (categoryID) => {
    let className = "";
    console.log(categoryID, "category id");
    parentCategorySelected && newCategory.parentId === categoryID
      ? (className = "p-3 cursor-pointer")
      : (className = "p-3 cursor-pointer bg-blue-600 text-blue-200");
    //   console.log(categoryID, "category from list");

    // console.log(newCategory.parentId === categoryID);

    return className;
  };
  console.log(categories, "CATEGORIES HERE");

  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Shto nje kategori te re
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-4">
                    <Input
                      type="text"
                      placeholder="Elektronike"
                      label="Emri i kategorise"
                      messageText="Shkruani emrin per kategorine."
                      className={
                        error.length > 0 ? "border-red-500" : "border-black-500"
                      }
                      showMessageText={error.length > 0}
                      value={newCategory.name}
                      onChange={handleCategoryName}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-check form-check-inline">
                      <p className="text-gray-700 font-bold">
                        Eshte nenkategori?
                      </p>
                      <input
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="Po"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        for="inlineRadio10"
                      >
                        Po
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="Jo"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        for="inlineRadio20"
                      >
                        Jo
                      </label>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-lg mt-4">
                      <ul className="divide-y-2 divide-gray-100 max-h-52 overflow-auto">
                        {categories.length > 0 &&
                          categories.map((category) => {
                            return (
                              <li
                                className={"p-3 cursor-pointer active:bg-blue-600 active:text-blue-200"}
                                onClick={() => {
                                  setParentCategorySelected(
                                    !parentCategorySelected
                                  );
                                  console.log(category, "new category");
                                  setNewCategory({
                                    ...newCategory,
                                    parendId: category._id,
                                  });
                                }}
                              >
                                {category.name}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Mbyll
                  </button>
                  <button
                    className="bg-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSaveCategory}
                  >
                    Ruaj Ndryshimet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default NewCategory;
