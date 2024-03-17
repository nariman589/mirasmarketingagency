import React from "react";
import styles from "./styles.module.css";
import { sfPro, stolzl } from "@/app/fonts";

import Image from "next/image";

import picture from "public/aboutUs/picture.png";
import Title from "../title/Title";

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
            <button>Send Request</button>
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
      <div className={styles.team}>
        <div className={styles.mainPic}>
          <div
            className={styles.mainImage}
            style={{
              backgroundColor: "#F5F6F7",
              borderRadius: "20px",
              width: "100%",
              height: "539px",
            }}
          ></div>
          <div className={styles.teamMemberDescription}>
            <p className={stolzl.className}>Name</p>
            <span className={sfPro.className}>Job Title</span>
          </div>
        </div>
        <div className={styles.secondaryPic}>
          <div>
            <div
              className={styles.secondaryImage}
              style={{
                backgroundColor: "#F5F6F7",
                borderRadius: "20px",
                // width: "312px",
                height: "220px",
              }}
            ></div>
            <div className={styles.teamMemberDescription}>
              <p className={stolzl.className}>Name</p>
              <span className={sfPro.className}>Job Title</span>
            </div>
          </div>
          <div>
            <div
              className={styles.secondaryImage}
              style={{
                backgroundColor: "#F5F6F7",
                borderRadius: "20px",
                // width: "312px",
                height: "220px",
              }}
            ></div>
            <div className={styles.teamMemberDescription}>
              <p className={stolzl.className}>Name</p>
              <span className={sfPro.className}>Job Title</span>
            </div>
          </div>
        </div>
        <div className={styles.secondaryPic}>
          <div>
            <div
              className={styles.secondaryImage}
              style={{
                backgroundColor: "#F5F6F7",
                borderRadius: "20px",
                // width: "312px",
                height: "220px",
              }}
            ></div>
            <div className={styles.teamMemberDescription}>
              <p className={stolzl.className}>Name</p>
              <span className={sfPro.className}>Job Title</span>
            </div>
          </div>
          <div>
            <div
              className={styles.secondaryImage}
              style={{
                backgroundColor: "#F5F6F7",
                borderRadius: "20px",
                // width: "312px",
                height: "220px",
              }}
            ></div>
            <div className={styles.teamMemberDescription}>
              <p className={stolzl.className}>Name</p>
              <span className={sfPro.className}>Job Title</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
