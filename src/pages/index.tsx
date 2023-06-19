import Link from "next/link";
import React, { useState } from "react";
import NavBar from "./components/Navbar";

const headerNavigation = [
  {
    id: 1,
    name: "About Us",
    href: "/AboutUs",
  },
  {
    id: 2,
    name: "Services",
    href: "/Services",
  },
  {
    id: 3,
    name: "Contact Us",
    href: "/ContactUs",
  },
];

function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

export const getServersideProps = async () => {
  return {
    props: {},
  };
};
export default HomePage;
