import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import AddNewTask from "./../Components/AddNewTask";
import Header from "./../Common/Header";
import About from "./../Common/About";
import TodoButton from "./../Components/TodoButton";

// component tabeii

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path='/' exact component={TodoButton} />
        <Route path='/about' component={About} />
      </Switch>
      <AddNewTask />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
