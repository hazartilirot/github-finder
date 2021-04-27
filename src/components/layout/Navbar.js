import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

//defaultProps serves as an alternative provided props haven't been passed
Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github",
}
Navbar.propsTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;