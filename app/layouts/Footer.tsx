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
        <Link href="?modal=true">Send request</Link>
      </div>
      <div className={styles.footerContent}>
        <div className={`${styles.footerNav} ${sfPro.className}`}>
          <Link href="/">
            <Image loading="lazy" src={logo} alt="logo" />
          </Link>
          <ul className={styles.list}>
            <li>
              <a target="_blank" href="tel:+1 332 257 6362">
                +1 332 257 6362
              </a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/+13322576362">
                TELEGRAM
              </a>
            </li>
            <li>
              <a target="_blank" href="https://wa.me/+13322576362">
                WHATSAPP
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/digital_miras/"
              >
                INSTAGRAM
              </a>
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
