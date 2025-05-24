// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Card from "./components/Card";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Footer />
//       <Card a="Osama" />
//       <Card a="Ali" />
//       <Card a="Usman" />
//       <Card a="Orhan" />
//     </>
//   );
// };

// export default App;
// import Card from "./components/Card";

// const App = () => {
//   const users = [
//     {
//       name: "Aarav Mehta",
//       city: "Mumbai",
//       age: 28,
//       profession: "Software Engineer",
//       profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
//     },
//     {
//       name: "Sara Khan",
//       city: "Delhi",
//       age: 25,
//       profession: "UI/UX Designer",
//       profilePhoto: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       name: "Rohan Verma",
//       city: "Bangalore",
//       age: 30,
//       profession: "Product Manager",
//       profilePhoto: "https://randomuser.me/api/portraits/men/45.jpg",
//     },
//     {
//       name: "Priya Sharma",
//       city: "Pune",
//       age: 26,
//       profession: "Frontend Developer",
//       profilePhoto: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//       name: "Karan Patel",
//       city: "Ahmedabad",
//       age: 32,
//       profession: "Data Analyst",
//       profilePhoto: "https://randomuser.me/api/portraits/men/23.jpg",
//     },
//     {
//       name: "Ananya Joshi",
//       city: "Hyderabad",
//       age: 24,
//       profession: "Marketing Executive",
//       profilePhoto: "https://randomuser.me/api/portraits/women/33.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#282828]">
//       <div>
//         {users.map(function (elem, idx) {
//           return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} photu={elem.profilePhoto} profession={elem.profession} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");
//     setData(response.data);
//     console.log(response.data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#282828] p-10">
//       {/* <button onClick={getData} className="bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">
//         Get data
//       </button> */}
//       <div className="p-5 mt-5 bg-gray-950 text-white">
//         {data.map(function (elem, idx) {
//           return (
//             <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3">
//               <img className="h-40 " src={elem.download_url} alt="" />
//               <h1>{elem.author}</h1>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
