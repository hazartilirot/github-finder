import React from "react";
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
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