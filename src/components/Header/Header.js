import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        OMDb API<p>The Open Movie Database 🍿</p>
      </Link>
    </div>
  );
};

export default Header;
