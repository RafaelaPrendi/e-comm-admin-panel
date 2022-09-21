import React, { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getAllCategories,
  getCategoriesPaginate,
} from "../../actions";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/UI/Table/Table";
import Swal from "sweetalert2";
import "./Categories.scss";
import NewCategory from "./NewCategory";
import { CATEGORY } from "../../actions/constants";
import MUIDataTable from "mui-datatables";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeProvider } from "@mui/material/styles";
import { getMuiTableTheme } from "../../components/UI/Theme";

const Categories = () => {
  const dispatch = useDispatch();
  const initCategory = {
    name: "",
    categoryImage: "",
    //for sub categories
    parentId: "",
  };
 

  const categories = useSelector((state) => state.category.categories);
  console.log(categories, "categories");

  const [newCategory, setNewCategory] = useState(initCategory);
  const [editCategory, setEditCategory] = useState(initCategory);
  const [showModal, setShowModal] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [tableState, setTableState] = useState({
    page: 1,
    count: 1,
    rowsPerPage: 3,
    sortOrder: {},
    data: [["Loading Data..."]],
    isLoading: false,
  });
  useEffect(() => {
    
    const getData = () => {
      setTableState({ ...tableState, isLoading: true });
      const rows = getTableRows();
      setTableState(() => {
        return {...tableState,
        isLoading: false,
        data: rows,
        count: categories?.length,}
      });
    };
    dispatch(getCategoriesPaginate(1, 5));
    getData();
  }, [dispatch]);
  console.log(tableState, "table state")
  
  const changePage = (page, rowsPerPage) => {
    setTableState({ ...tableState, isLoading: true });
    dispatch(getCategoriesPaginate(page, rowsPerPage));
    const rows = getTableRows();
    setTableState({
      ...tableState,
      isLoading: false,
      data: rows,
      count: categories.length,
    });
  };
  // const sort = (page, sortOrder) => {
  //   setTableState({ ...tableState, isLoading: true });
  //   this.xhrRequest('', page, sortOrder).then(res => {
  //     setTableState({
  //       data: res.data,
  //       page: res.page,
  //       sortOrder,
  //       isLoading: false,
  //       count: res.total,
  //     });
  //   });
  // };
  // useEffect(() => {
  //   const currentCat = currentItems;
  //   const catList = currentCat.concat(categories);
  //   // console.log(catList, "categories here")
  //   setCurrentItems(catList)
  // }, [page, rowsPerPage, currentItems])

  const handleAddCategory = () => {
    setNewCategory(initCategory);
    setEditCategory(initCategory);
    setShowModal(true);
  };
  const handleDeleteCategory = (categoryIndex) => {
    const category = categories[categoryIndex];
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
  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    pagination: true,
    rowsPerPageOptions: [1, 3, 5, 6],
    jumpToPage: false,
    // serverSide: true,
    count: tableState.count,
    rowsPerPage: tableState.rowsPerPage,
    selectableRows: "single",
    textLabels: {
      pagination: {
        jumpToPage: "Shko tek Faqja: ",
        next: "Para >",
        previous: "< Kthehu",
        rowsPerPage: "Kategorite per Faqe",
        displayRows: "Nga",
      },
    },
    onChangePage(currentPage) {
      changePage(currentPage, tableState.rowsPerPage);
      setTableState({
        ...tableState,
        page: currentPage,
      });
      console.log({ currentPage }, currentPage, "change");
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
      changePage(tableState.page, numberOfRows);
      setTableState({
        ...tableState,
        rowsPerPage: numberOfRows,
      });
    },
    // onTableChange: (action, tableState) => {
    //   console.log(action, tableState);
    //   if (action === "changePage") {
    //     changePage(tableState.page, tableState.sortOrder);
    //   }
    // },
    onRowsDelete: (e) => {
      handleDeleteCategory(e.data[0].dataIndex);
    },
  };
  const columns = [
    "#",
    "Emri",
    {
      name: "Edito",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <EditIcon
              className="cursor-pointer"
              onClick={() => handleEditCategory(tableMeta.rowData[1])}
            />
          );
        },
      },
    },
  ];
  const getTableRows = () => {
    let rows = [];
    if (categories && categories.length > 0)
      for (let index = 0; index < categories.length; index++) {
        rows.push([index + 1, categories[index].name]);
      }
    return rows;
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
            <button
              className="inline-flex hover:bg-gray-700 text-white font-semibold text-lg py-2 px-4 border rounded shadow"
              style={{ backgroundColor: "#16c79a" }}
              onClick={handleAddCategory}
            >
              Shto Kategori
              <IoAddOutline size={30} color="white" className="ml-2" />
            </button>
          </div>
          <div className="flex flex-col mt-4 tableContainer">
            {categories && categories.length > 0 ? (
              <ThemeProvider theme={getMuiTableTheme()}>
                <MUIDataTable
                  title={"Lista e Kategorive"}
                  data={tableState.data}
                  columns={columns}
                  options={options}
                />
              </ThemeProvider>
            ) : (
              // <Table
              //   colHeader={["#", "Emri"]}
              //   data={categories}
              //   dataType={CATEGORY}
              //   showDetailsColumn={false}
              //   setShowModal={setShowModal}
              //   isCategoryData={true}
              //   handleDeleteItem={handleDeleteCategory}
              //   handleEditItem={handleEditCategory}
              //   handlePagination={getCategoriesPaginate}
              //   // currentPage={currentPage}
              //   // itemsPerPage={itemsPerPage}
              //   // totalItems={currentItems.length}
              //   // paginateBack={paginateBack}
              //   // paginateFront={paginateFront}
              // />
              <h2 className="text-center text-red">Error fetching data.</h2>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Categories;
