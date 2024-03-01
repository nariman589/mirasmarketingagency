import React from "react";
import styles from "./styles.module.css";

import Image from "next/image";

import { stolzl } from "@/app/fonts";

import first from "public/cards/first.svg";
import second from "public/cards/second.svg";
import third from "public/cards/third.svg";

function Cards() {
  return (
    <section className={`${styles.container} ${stolzl.className}`} id="wedo">
      <div className={`${styles.first} ${styles.block}`}>
        <div>
          <p className={styles.title}>Website creation service</p>
        </div>

        <div>
          <button>I want a web site</button>
        </div>
        <Image priority src={first} alt="first" />
      </div>
      <div className={`${styles.second} ${styles.block}`}>
        <div>
          <p className={styles.title}>
            Logo and brand book development service
          </p>
        </div>

        <div>
          <button>I want a logo</button>
        </div>
        <Image priority src={second} alt="first" />
      </div>
      <div className={`${styles.third} ${styles.block}`}>
        <div>
          <p className={styles.title}>Website creation service</p>
        </div>

        <div>
          <button>I want a web site</button>
        </div>
        <Image priority src={third} alt="first" />
      </div>
    </section>
  );
}

export default Cards;
