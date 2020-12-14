import React, { useContext } from "react";
import { Alert, Badge } from "react-bootstrap";
import TodoContext from './../../context/todoContext';
//9.4

const Header = () => {
  const context = useContext(TodoContext);
  const { todos } = context;

  let badgeStyle = "";
  if (todos.length >= 3) badgeStyle = "info";
  else badgeStyle = "danger";

  return (
    <div className='rtl text-center'>
      <Alert>
        <h5 className='alert'>
          تعداد کارها
          <Badge pill variant={badgeStyle}>
            {todos.length}
          </Badge>{" "}
          میباشد.{" "}
        </h5>
      </Alert>
    </div>
  );
};

export default Header;
