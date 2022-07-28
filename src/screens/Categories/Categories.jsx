import React, { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getAllCategories, getCategoriesPaginate } from "../../actions";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/UI/Table/Table";
import Swal from "sweetalert2";
import "./Categories.scss";
import NewCategory from "./NewCategory";
import { CATEGORY } from "../../actions/constants";

const Categories = () => {
  const dispatch = useDispatch();
  const initCategory = {
    name: "",
    categoryImage: "",
    //for sub categories
    parentId: "",
  };

  useEffect(()=> {
    dispatch(getAllCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.category.categories);
  console.log(categories, "categories");

  const [newCategory, setNewCategory] = useState(initCategory);
  const [editCategory, setEditCategory] = useState(initCategory);
  const [showModal, setShowModal] = useState(false);
  // const [currentItems, setCurrentItems] = useState([]);


  const handleAddCategory = () => {
    setNewCategory(initCategory);
    setEditCategory(initCategory);
    setShowModal(true);
  };
  const handleDeleteCategory = (category) => {
    Swal.fire({
      icon: "warning",
      title: "A jeni te sigurt qe doni ta fshini kete kategori?",
      showConfirmButton: true,
      confirmButtonText: "Po",
      showCancelButton: true,
      cancelButtonText: "Jo",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCategory(category._id));
        dispatch(getAllCategories());
      }
    });
  };
  const handleEditCategory = (category) => {
    setShowModal(true);
    setEditCategory(category);
  };
  return (
    <Layout sidebar={true}>
      {showModal ? (
        <NewCategory
          showModal={showModal}
          setShowModal={setShowModal}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          categoryToEdit={editCategory}
          setEditCategory={setEditCategory}
          isEdit={editCategory.name !== ""}
        />
      ) : (
        <div className="categoriesContainer">
          <div className="flex flex-row titleContainer">
            <h2 className="text-2xl leading-9 font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
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
          <div className="flex flex-col mt-4">
            {categories.length > 0 ? (
              <Table
                colHeader={["#", "Emri", "Nen Kategori"]}
                data={categories}
                dataType={CATEGORY}
                showDetailsColumn={false}
                setShowModal={setShowModal}
                isCategoryData={true}
                handleDeleteItem={handleDeleteCategory}
                handleEditItem={handleEditCategory}
                handlePagination={getCategoriesPaginate}
                // currentPage={currentPage}
                // itemsPerPage={itemsPerPage}
                // totalItems={currentItems.length}
                // paginateBack={paginateBack}
                // paginateFront={paginateFront}
              />
            ) : (
              <h2 className="text-center text-red">Error fetching data.</h2>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Categories;
