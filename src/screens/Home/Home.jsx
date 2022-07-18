import React from "react";
import { IoPersonCircle } from "react-icons/all";
import Layout from "../../components/Layout/Layout";
import "./Home.scss";

const Home = () => {
  return (
    <Layout sidebar={true}>
      <div className="flex flex-row justify-center homeContainer">
        <div className="homeSideContainer mt-4">
          <div class="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-12 px-8 mt-4">
            <div className="flex justify-center mb-8">
              <IoPersonCircle size={70} color="rgb(115 115 115)" />
            </div>
            <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
              Mirese erdhet ne Panelin e Administratorit
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="flex flex-col text-slate-500 text-lg">
                <p>
                  Ju mund te editoni te dhenat e produkteve, kategorive,
                  porosive.
                </p>
                <p>
                  Shtoni produkte, kategori te reja ose beni nje porosi te re.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
