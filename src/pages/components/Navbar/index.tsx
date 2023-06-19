import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

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

function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <li className={styles.navBarHomePage}>
        <Link href="/">Home Page</Link>
      </li>
      <ul
        className="nav-bar-ul-container"
        style={{
          display: "flex",
        }}
      >
        {headerNavigation.map((item) => {
          return (
            <li key={item.id} className={styles.navBarLiContent}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
