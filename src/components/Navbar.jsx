import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-emerald-700 flex py-5 px-10 items-center justify-between">
        <h1 className="text-2xl">Osama</h1>
        <div className="flex gap-10 items-center">
          <h4 className="text-xl">Home</h4>
          <h4 className="text-xl">About Us</h4>
          <h4 className="text-xl">Contact</h4>
          <h4 className="text-xl">Profile</h4>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
