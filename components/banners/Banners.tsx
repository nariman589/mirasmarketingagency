import React from "react";
import styles from "./styles.module.css";

import Image from "next/image";

import FirstBanner from "public/banners/fisrt.png";
import SecondBanner from "public/banners/second.png";
import ThirdBanner from "public/banners/third.png";
import { stolzl } from "@/app/fonts";

function Banners() {
  return (
    <section className={`${styles.container} ${stolzl.className}`}>
      <div className={`${styles.first} ${styles.block}`}>
        <div>
          <h1>Grow your digital marketing revenue with us</h1>
          <p>
            Get ready to drive revenue — just request a proposal below to
            receive a digital marketing proposal that includes a customized
            strategy, pricing, and flight plan!
          </p>
        </div>
        <div>
          <button>Get a Proposal</button>
        </div>
        <Image loading="lazy" src={FirstBanner} alt="first" />
      </div>

      <div className={`${styles.second} ${styles.block}`}>
        <div>
          <h2>What we do</h2>
          <ul>
            <li>Development of SMM strategies</li>
            <li>Content creation</li>
            <li>Targeted advertising</li>
            <li>Photo and video production</li>
            <li>WEB design and SEO</li>
          </ul>
        </div>

        <div>
          <button>Get a Proposal</button>
        </div>
        <Image loading="lazy" src={SecondBanner} alt="first" />
      </div>
    </section>
  );
}

export default Banners;
