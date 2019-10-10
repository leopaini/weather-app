import React from "react";

const Header = props => (
  <nav>
    <div className="nav-wrapper navigation-bar">
      <a href="#!" className="brand-logo">
        {props.title}
      </a>
    </div>
  </nav>
);

export default Header;
