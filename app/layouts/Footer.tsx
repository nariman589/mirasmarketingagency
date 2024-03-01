import React from "react";
import styles from "./styles.module.css";
import { sfPro, stolzl } from "../fonts";
import Link from "next/link";

import Image from "next/image";
import logo from "public/logo.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.ad} ${stolzl.className}`}>
        <p>If you have any questions, leave a request</p>
        <button>Send request</button>
      </div>
      <div className={styles.footerContent}>
        <div className={`${styles.footerNav} ${sfPro.className}`}>
          <Link href="/">
            <Image priority src={logo} alt="logo" />
          </Link>
          <ul className={styles.list}>
            <li>
              <a href="/">+1 (111) 111 111 11 11</a>
            </li>
            <li>
              <a href="/">TELEGRAM</a>
            </li>
            <li>
              <a href="/">WHATSAPP</a>
            </li>
            <li>
              <a href="/">INSTAGRAM</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.copyright} ${sfPro.className}`}>
          <div>© Miras Marketing Agency, {new Date().getFullYear()}</div>
          <div>Medical data processing policy</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
