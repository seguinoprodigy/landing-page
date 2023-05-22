import Link from "next/link";
import React, { useState } from "react";

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
      <nav>
        <ul>
          <li>
            <Link href="/">Home Page</Link>
          </li>
          {headerNavigation.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export const getServersideProps = async () => {
  return {
    props: {},
  };
};
export default HomePage;
