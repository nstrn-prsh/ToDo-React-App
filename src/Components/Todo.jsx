import React, { Fragment } from "react";

const Todo = ({ text, isCompleted, deleted, completed }) => {
  return (
    <Fragment>
      <div
        // age task done shode bood sabz beshe age na zard bashe
        className={`todo-indicator ${
          isCompleted ? "bg-success" : "bg-warning"
        }`}
      ></div>

      <div className='widget-content p-0'>
        <div className='widget-content-wrapper'>
          <div className='widget-content-right flex1'>
            {/* age task done shode bood khat bekesh roosh dar gheire in sorat khode text gharab begire */}
            <div className='widget-heading'>
              {isCompleted ? <del>{text}</del> : text}
            </div>
          </div>

          <div className='widget-content-left'>
            {" "}
            {/* task done beshe */}
            <button
              className='border-0 btn-transition btn btn-outline-success'
              onClick={completed}
            >
              {" "}
              <i className='fa fa-check'></i>
            </button>{" "}
            {/* task delete beshe */}
            <button
              className='border-0 btn-transition btn btn-outline-danger'
              onClick={deleted}
            >
              {" "}
              <i className='fa fa-trash'></i>{" "}
            </button>{" "}
          </div>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
