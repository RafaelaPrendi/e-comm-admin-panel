import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./SignUp.scss";
import { signup } from "../../actions";
import Swal from "sweetalert2";

const SignUp = (props) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [emri, setEmri] = useState({ value: "", error: "" });
  const [mbiemri, setMbiemri] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const newUser = useSelector((state) => state.newUser);

  const dispatch = useDispatch();

  const handleEmri = (event) => {
    event.preventDefault();
    setEmri({ value: event.target.value, error: "" });
  };
  const handleMbiemri = (event) => {
    event.preventDefault();
    setMbiemri({ value: event.target.value, error: "" });
  };
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail({ value: event.target.value, error: "" });
  };
  const handleConfirmPassword = (event) => {
    event.preventDefault();
    setConfirmPassword({ value: event.target.value, error: "" });
  };
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword({ value: event.target.value, error: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    !emri.value.length > 0 && setEmri({ ...emri, error: "Name is required." });
    !mbiemri.value.length > 0 &&
      setMbiemri({ ...mbiemri, error: "Lastname is required." });
    !email.value.length > 0 && setEmail({ ...email, error: "Email required!" });
    !password.value.length > 0 &&
      setPassword({ ...password, error: "Password required" });
    !confirmPassword.value.length > 0 &&
      setConfirmPassword({
        ...confirmPassword,
        error: "Password confirmation required",
      });
    confirmPassword.value !== password.value &&
      setConfirmPassword({
        ...confirmPassword,
        error: "Password not confirmed",
      });
    if (
      emri.error === "" &&
      mbiemri.error === "" &&
      email.error === "" &&
      password.error === "" &&
      confirmPassword.error === ""
    ) {
      const newUser = {
        firstName: emri.value,
        lastName: mbiemri.value,
        email: email.value,
        password: password.value,
      };
      dispatch(signup(newUser));
    }
    //handle swal alerts
    if (newUser.loading)
      Swal.fire({
        text: "Duke krijuar admin te ri",
        didOpen: Swal.showLoading()
      });
    else if (!newUser.loading && newUser.error) {
      Swal.fire({
        icon: "error",
        text: "Pati nje gabim ne shtimin e perdoruesit!",
        timer: 2000,
      });
    } else if (!newUser.loading && !newUser.error)
      Swal.fire({
        icon: "success",
        text: "Admin i ri u krijua! Hyni me llogarine e re.",
        showConfirmButton: true,
        confirmButtonText: "Hyr",
      }).then((result) => {
        if (result.isConfirmed) history.push("/signin");
      });
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout sidebar={false}>
      <div className="container form-container">
        <div className="w-full max-w-lg form-box">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  type="text"
                  placeholder="Emri"
                  messageText="Fusha eshte e kerkuar."
                  className={
                    emri.error.length > 0 ? "border-red-500" : "border"
                  }
                  label="Emri"
                  showMessageText={emri.error.length > 0}
                  onChange={handleEmri}
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <Input
                  type="text"
                  placeholder="Mbiemri"
                  className={
                    mbiemri.error.length > 0 ? "border-red-500" : "border"
                  }
                  messageText="Fusha eshte e kerkuar."
                  showMessageText={mbiemri.error.length > 0}
                  label="Mbiemri"
                  onChange={handleMbiemri}
                />
              </div>
            </div>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Email"
                label="Email"
                showMessageText={email.error.length > 0}
                onChange={handleEmail}
              />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                placeholder="************"
                messageText="Zgjidhni nje fjalekalim."
                className={
                  password.error.length > 0 ? "border-red-500" : "border"
                }
                label="Fjalekalimi"
                showMessageText={password.error.length > 0}
                onChange={handlePassword}
              />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                placeholder="************"
                messageText="Perserit fjalekalimin."
                className={
                  confirmPassword.error.length > 0 ? "border-red-500" : "border"
                }
                label="Perserit Fjalekalimin"
                showMessageText={confirmPassword.error.length > 0}
                onChange={handleConfirmPassword}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Regjistrohuni
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/signin"
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
