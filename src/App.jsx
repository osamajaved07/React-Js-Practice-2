import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <Card a="Osama" />
      <Card a="Ali" />
      <Card a="Usman" />
      <Card a="Orhan" />
    </>
  );
};

export default App;
