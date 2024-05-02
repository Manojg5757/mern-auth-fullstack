import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-500">
      <div className="flex justify-between items-center p-3 max-w-6xl">
        <h1 className="text-xl">React Mern Auth</h1>
        <ul className="flex gap-3">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/signin">
            <li>Signin</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
