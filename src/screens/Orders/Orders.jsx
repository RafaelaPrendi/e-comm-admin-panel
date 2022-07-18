import React from "react";
import Layout from "../../components/Layout/Layout";
import { IoAddOutline } from "react-icons/io5";
import Table from "../../components/UI/Table/Table";

import "./Orders.scss";

const Orders = () => {
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
      <div className="ordersContainer">
        <div className="flex flex-row titleContainer">
          <h2 className="text-2xl leading-9 font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
            Porosite
          </h2>
          <button
            className="inline-flex hover:bg-gray-700 text-white font-semibold text-lg py-2 px-4 border rounded shadow"
            style={{ backgroundColor: "#16c79a" }}
          >
            Shto Porosi
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

export default Orders;
