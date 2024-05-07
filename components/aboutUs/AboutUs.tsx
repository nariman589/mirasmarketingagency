import React from "react";
import styles from "./styles.module.css";
import { sfPro, stolzl } from "@/app/fonts";

import Image from "next/image";

import picture from "public/aboutUs/picture.png";
import Title from "../title/Title";
import Link from "next/link";

function AboutUs() {
  return (
    <section className={`${styles.container} ${sfPro.className}`} id="abUs">
      <Title title="About Us" enableMargin />
      <div className={styles.card}>
        <div className={styles.left}>
          <div>
            <p
              className={`${stolzl.className} ${styles.miras} ${styles.title}`}
            >
              Miras
            </p>
            <p
              className={`${stolzl.className} ${styles.agency} ${styles.title}`}
            >
              Marketing Agency
            </p>
            <p className={styles.pDesktop}>Full services advertising agency.</p>
            <p className={styles.pMobile}>
              We Offer to our clients unique and effective solutions for
              business development in social media. We develop and implement
              creative concepts for advertising campaigns, build successful
              brands, identity, photo and video content, as well as unique
              digital solutions.
            </p>
          </div>
          <div>
            <Link href="?modal=true">Send Request</Link>
          </div>
        </div>
        <div className={styles.right}>
          <p>
            We Offer to our clients unique and effective solutions for business
            development in social media. We develop and implement creative
            concepts for advertising campaigns, build successful brands,
            identity, photo and video content, as well as unique digital
            solutions.
          </p>
          <p>
            We employ a systematic approach at the stage of strategy and
            planning, perfectionism at the stage of implementation, and take a
            collaborative approach with your client's team. In each project we
            see the will and the dream of its people, appreciate the efficiency
            of cooperation and human relations, and therefore we always keep our
            promises.
          </p>
        </div>
        <Image loading="lazy" src={picture} alt="" />
      </div>
    </section>
  );
}

export default AboutUs;
