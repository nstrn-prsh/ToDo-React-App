import React from "react";
import { Alert } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <Alert>
        <ul className='nav nav-pills justify-content-center'>
          <li className='nav-item'>
            <Link
              to='/'
              className={
                props.location.pathname === "/" ? "ml-3 nav-link bg-dark active" : "ml-3 nav-link"
              }
            >
              لیست کارها!
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className={
                props.location.pathname === "/about" ? "ml-3 nav-link bg-dark active" : "ml-3 nav-link"
              }
            >
              درباره سازنده
            </Link>
          </li>
        </ul>
      </Alert>
    </div>
  );
};

export default withRouter(Nav);
