import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" href="/">
        Accordion
      </Link>
      <Link className="item" href="/list">
        Search
      </Link>
      <Link className="item" href="/translate">
        Translate
      </Link>
      <Link className="item" href="/dropdown">
        Dropdown
      </Link>
    </div>
  );
};

export default Header;
