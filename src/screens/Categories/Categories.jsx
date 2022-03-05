import React, { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, addCategory } from "../../actions";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/UI/Input/Table";
import "./Categories.scss";
import Swal from "sweetalert2";
import NewCategory from "./NewCategory";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const newCategory = useSelector((state) => state.category.newCategory);

  const [categoryList, setCategoryList] = useState([]);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  useEffect(() => {
    setCategoryList(categories);
  }, [categories]);
  const handleAddCategory = () =>{
    dispatch(addCategory({name : "ble bla bla"}));
    setShowModal(true);
    if(newCategory?.name) Swal.fire({icon: "success", title: "Kategoria u shtua me sukses!", timer: 3000});
  }

  return (
    <Layout sidebar={true}>
     {showModal ? <NewCategory showModal={showModal} setShowModal={setShowModal} /> :  <div className="categoriesContainer">
        <div className="flex flex-row titleContainer">
          <h2 class="text-2xl leading-9 font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
            Kategorite
          </h2>
          <button
            className="inline-flex hover:bg-gray-700 text-white font-semibold text-lg py-2 px-4 border rounded shadow"
            style={{ backgroundColor: "#16c79a" }}
            onClick={handleAddCategory}
          >
            Shto Kategori
            <IoAddOutline size={30} color="white" className="ml-2" />
          </button>
        </div>
        <div className="flex flex-row mt-4">
          {categoryList.length > 0 ? (
            <Table colHeader={["Emri", "Nen Kategori"]} data={categoryList} />
          ) : (
            <h2 className="text-center text-red">Error fetching data.</h2>
          )}
        </div>
      </div>}
    </Layout>
  );
};

export default Categories;
