import React, { useContext, Fragment } from "react";
import { Button } from "react-bootstrap";
import TodoContext from "./../context/todoContext";
import Todos from "./Todos";

const TodoButton = () => {
  const context = useContext(TodoContext);
  const { buttonList, showList } = context;

  return (
    <Fragment>
      <div className='d-flex justify-content-center container'>
        <div className='col-md-8'>
          <div className='rtl text-center'>
            <Button
              variant={buttonList ? "light btn-large" : "dark btn-large"}
              onClick={showList}
              active
            >
              نمایش لیست
            </Button>
          </div>
          <div className='card-hover-shadow-2x mb-3 card'>
            {buttonList ? <Todos /> : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoButton;
