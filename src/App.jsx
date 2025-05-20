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
import Card from "./components/Card";

const App = () => {
  const users = [
    {
      name: "Aarav Mehta",
      city: "Mumbai",
      age: 28,
      profession: "Software Engineer",
      profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Sara Khan",
      city: "Delhi",
      age: 25,
      profession: "UI/UX Designer",
      profilePhoto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohan Verma",
      city: "Bangalore",
      age: 30,
      profession: "Product Manager",
      profilePhoto: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Priya Sharma",
      city: "Pune",
      age: 26,
      profession: "Frontend Developer",
      profilePhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Karan Patel",
      city: "Ahmedabad",
      age: 32,
      profession: "Data Analyst",
      profilePhoto: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      name: "Ananya Joshi",
      city: "Hyderabad",
      age: 24,
      profession: "Marketing Executive",
      profilePhoto: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#282828]">
      <div>
        {users.map(function (elem, idx) {
          return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} photu={elem.profilePhoto} profession={elem.profession} />;
        })}
      </div>
    </div>
  );
};

export default App;
