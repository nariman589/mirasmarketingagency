import React from "react";
import styles from "./styles.module.css";

import Image from "next/image";

import FirstBanner from "public/banners/fisrt.png";
import SecondBanner from "public/banners/second.png";
import ThirdBanner from "public/banners/third.png";

import puzzle from "public/icons/puzzle.svg";
import pencil from "public/icons/pencil.svg";
import pin from "public/icons/pin.svg";
import camera from "public/icons/camera.svg";
import gear from "public/icons/gear.svg";

import { sfPro, stolzl } from "@/app/fonts";

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

      <div className={`${styles.second} ${styles.block} ${sfPro.className}`}>
        <div>
          <h2>What we do</h2>
          <ul>
            <li>
              <Image src={puzzle} alt="" />
              <p>Development of SMM strategies</p>
            </li>
            <li>
              <Image src={pencil} alt="" />
              <p>Content creation</p>
            </li>
            <li>
              <Image src={pin} alt="" />
              <p>Targeted advertising</p>
            </li>
            <li>
              <Image src={camera} alt="" />
              <p>Photo and video production</p>
            </li>
            <li>
              <Image src={gear} alt="" />
              <p>WEB design and SEO</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Banners;
