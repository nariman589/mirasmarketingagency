import React from "react";
import styles from "./styles.module.css";
import { sfPro, stolzl } from "@/app/fonts";

import Image from "next/image";

import picture from "public/aboutUs/picture.svg";

function AboutUs() {
  return (
    <section className={`${styles.container} ${sfPro.className}`} id="abUs">
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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <button>Send Request</button>
          </div>
        </div>
        <div className={styles.right}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only
          </p>
          <p>
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a pag
          </p>
        </div>
        <Image priority src={picture} alt="" />
      </div>
    </section>
  );
}

export default AboutUs;
