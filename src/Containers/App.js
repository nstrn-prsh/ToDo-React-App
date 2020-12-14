import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import AddNewTask from "../Components/AddNewTask";
import Header from "./../Common/Header";
import TodoButton from "./../Components/TodoButton";
// component tabeii

const App = () => {
  return (
    <Fragment>
      <div className='rtl text-center'>
        <Header />
      </div>
      <TodoButton />
      <AddNewTask />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
