import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.actions";
import Products from "./screens/Products/Products";
import Orders from "./screens/Orders/Orders";
import Categories from "./screens/Categories/Categories";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    // clear local storage on first mount
    localStorage.clear();
  }, []);
  useEffect(() => {
    if (!auth.token) {
      dispatch(isUserLoggedIn());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home}></PrivateRoute>
        <PrivateRoute path="/products" component={Products}></PrivateRoute>
        <Route path="/categories" component={Categories}></Route>
        <PrivateRoute path="/orders" component={Orders}></PrivateRoute>
        {/* public routes */}
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/signout" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
