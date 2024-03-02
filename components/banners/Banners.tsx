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
          <h1>Miras Marketing Agency</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div>
          <button>Send Message</button>
        </div>
        <Image loading="lazy" src={FirstBanner} alt="first" />
      </div>
      <div className={styles.partialBlock}>
        <div className={`${styles.second} ${styles.block}`}>
          <div>
            <h2>Website creation service</h2>
          </div>

          <div>
            <button>Send Message</button>
          </div>
          <Image loading="lazy" src={SecondBanner} alt="first" />
        </div>
        <div className={`${styles.third} ${styles.block}`}>
          <div>
            <h2>Logo and brand book development service</h2>
          </div>

          <div>
            <button>Send Message</button>
          </div>
          <Image loading="lazy" src={ThirdBanner} alt="first" />
        </div>
      </div>
    </section>
  );
}

export default Banners;
