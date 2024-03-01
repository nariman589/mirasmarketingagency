import Image from "next/image";
import React from "react";

import logo from "public/logo.svg";
import { sfPro } from "../fonts";
import styles from "./styles.module.css";
import BurgerMenu from "./BurgerMenu";

export const routes = [
  {
    title: "Our Team",
    href: "#team",
  },
  {
    title: "What We Do",
    href: "#wedo",
  },
  {
    title: "About Us",
    href: "#abUs",
  },
  {
    title: "Our Projects",
    href: "#projects",
  },
];

function Header() {
  return (
    <header className={`${sfPro.className} ${styles.header}`}>
      <a href="/">
        <Image priority src={logo} alt="logo" />
      </a>
      <div className={styles.navigate}>
        <ul className={styles.list}>
          {routes.map((route) => (
            <li key={route.title}>
              <a href={route.href}>{route.title}</a>
            </li>
          ))}
        </ul>
        <button>Send Request</button>
      </div>
      <BurgerMenu />
    </header>
  );
}

export default Header;
