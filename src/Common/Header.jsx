import React, { useContext, Fragment } from "react";
import { Alert, Badge } from "react-bootstrap";
import TodoContext from "./../context/todoContext";
//9.4

const Header = () => {
  const context = useContext(TodoContext);
  const { todos } = context;

  let badgeStyle = "";
  if (todos.length >= 3) badgeStyle = "info";
  else badgeStyle = "danger";

  return (
    <Fragment>
      <Alert variant='warning'>
        <h2> لیست کارها ! </h2>
      </Alert>
      <Alert>
        <h5 className='alert'>
          تعداد کارها
          <Badge pill variant={badgeStyle}>
            {todos.length}
          </Badge>{" "}
          میباشد.{" "}
        </h5>
      </Alert>
    </Fragment>
  );
};

export default Header;
