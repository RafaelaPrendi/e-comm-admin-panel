import React, {  useState } from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import "./SignIn.scss";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.auth);

  const handleEmail = (event) => {
    event.preventDefault();
    setError(null);
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    event.preventDefault();
    setError(null);
    setPassword(event.target.value);
  };
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    if (email.length > 0 && password.length > 0) {
      const user = {
        email: email,
        password: password,
      };
      dispatch(login(user));
      const loggeduser = localStorage.getItem("user", JSON.stringify(user));
      console.log("logged=", loggeduser);

    } else {
      email.length > 0 && !password.length > 0 && setError("password empty!");
      !email.length > 0 && password.length > 0 && setError("email empty!");
      !email.length > 0 && !password.length > 0 && setError("fields empty!");
    }
  };
  const isEmailEmpty = error?.includes("email") || error?.includes("fields");
  const isPasswordEmpty =
    error?.includes("password") || error?.includes("fields");
  // useEffect(() => {
  //   if (auth.error)
  //     Swal.fire({
  //       icon: "error",
  //       text: "Pati nje gabim ne kycje!",
  //       timer: 2000,
  //     });
  
  // }, [auth]);
  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout sidebar={false}>
      <div className="container form-container">
        <div className="w-full max-w-md form-box">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleLogin}
          >
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Email"
                label="Email"
                messageText="Shkruani email-in."
                className={isEmailEmpty ? "border-red-500" : "border-black-500"}
                showMessageText={isEmailEmpty}
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                placeholder="************"
                messageText="Shkruani fjalekalimin."
                className={
                  isPasswordEmpty ? "border-red-500" : "border-black-500"
                }
                label="Fjalekalimi"
                showMessageText={isPasswordEmpty}
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
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
