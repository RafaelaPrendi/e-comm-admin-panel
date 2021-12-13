import React from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import "./SignIn.scss";

const SignIn = (props) => {
  return (
    <Layout>
      <div className="container form-container">
        <div className="w-full max-w-md form-box">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Email"
                label="Email"
                showMessageText={false}
              />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                placeholder="************"
                messageText="Zgjidhni nje fjalekalim."
                className="border-red-500"
                label="Fjalekalimi"
                showMessageText={false}
                onClick={() => console.log()}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Hyr
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/"
              >
                Harruat Fjalekalimin?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
