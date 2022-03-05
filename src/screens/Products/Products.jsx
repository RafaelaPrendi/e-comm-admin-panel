import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Products.scss";
import { IoAddOutline } from "react-icons/io5";
import Table from "../../components/UI/Input/Table";

const Products = () => {
  const fakeData = [
    {
      name: "electronics",
      children: [],
    },
    {
      name: "electronics",
      children: [],
    },
    {
      name: "electronics",
      children: [],
    },
    {
      name: "electronics",
      children: [
        {
          name: "electronics",
          children: [],
        },
        {
          name: "electronics",
          children: [],
        },
      ],
    },
  ];
  return (
    <Layout sidebar={true}>
    <div className="productsContainer">
      <div className="flex flex-row titleContainer">
        <h2 class="text-2xl leading-9 font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
          Produktet
        </h2>
        <button
          className="inline-flex hover:bg-gray-700 text-white font-semibold text-lg py-2 px-4 border rounded shadow"
          style={{ backgroundColor: "#16c79a" }}
        >
          Shto Produkt
          <IoAddOutline size={30} color="white" className="ml-2" />
        </button>
      </div>
      <div className="flex flex-row mt-4">
        <Table colHeader={["Emri", "Nen Kategori"]} data={fakeData} />
      </div>
    </div>
    </Layout>
  );
};

export default Products;
