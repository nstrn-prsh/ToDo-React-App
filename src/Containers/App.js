import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import TodoButton from "./../Components/Tasks/TodoButton";
import About from "./../Components/Common/About";
import Nav from "../Components/Common/Nav";

// component tabeii

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route path='/' exact component={TodoButton} />
        <Route path='/about' component={About} />
      </Switch>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
