import React from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import "./SignUp.scss";

const SignUp = (props) => {
  return (
    <Layout>
      <div className="container form-container">
        <div className="w-full max-w-lg form-box">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  type="text"
                  placeholder="Emri"
                  messageText="Fusha eshte e kerkuar."
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  label="Emri"
                  showMessageText={false}
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <Input
                  type="text"
                  placeholder="Mbiemri"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  messageText="Fusha eshte e kerkuar."
                  showMessageText={false}
                  label="Mbiemri"
                />
              </div>
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Email" label="Email" />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                placeholder="************"
                messageText="Zgjidhni nje fjalekalim."
                className="border-red-500"
                label="Fjalekalimi"
              />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                placeholder="************"
                messageText="Perserit fjalekalimin."
                className="border-red-500"
                label="Perserit Fjalekalimin"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Regjistrohuni
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/"
              >
                Jeni regjistruar tashme?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
