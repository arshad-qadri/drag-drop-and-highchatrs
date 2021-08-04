import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-800 w-full h-16 px-28 flex justify-between items-center">
        <NavLink
          className="text-white text-lg font-bold hover:text-yellow-500"
          to="/"
        >
          DnD & Chatrs
        </NavLink>
        <div className="">
          <NavLink
            className="text-white text-lg font-bold hover:text-yellow-500 mr-12"
            to="/"
          >
            DragDrop
          </NavLink>
          <NavLink
            className="text-white text-lg font-bold hover:text-yellow-500"
            to="/charts"
          >
            Charts
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
