import React from "react";
import { Alert } from "react-bootstrap";
import { withRouter, NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <Alert>
        <ul className='nav nav-pills justify-content-center'>
          <li className='nav-item'>
            <NavLink
              to='/'
              className='ml-3 nav-link'
              activeClassName='active'
              activeStyle={{ color: "white", backgroundColor: "#DC3545" }}
              exact
            >
              لیست کارها!
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/about'
              className='ml-3 nav-link'
              activeStyle={{ color: "white", backgroundColor: "#DC3545" }}
            >
              درباره سازنده
            </NavLink>
          </li>
        </ul>
      </Alert>
    </div>
  );
};

export default withRouter(Nav);
