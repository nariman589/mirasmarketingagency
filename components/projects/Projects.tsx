import React from "react";
import styles from "./styles.module.css";
import { sfPro, stolzl } from "@/app/fonts";
import Title from "../title/Title";

import Image from "next/image";

import beauty from "public/projects/Beauty.png";
import rest from "public/projects/Restaurant.png";
import fashion from "public/projects/Fashion.png";
import ecommerce from "public/projects/Ecommerce.png";
import software from "public/projects/Software.png";
import homeRemodeling from "public/projects/HomeRemodeling.png";

function Projects() {
  const cards = [
    {
      name: "Beauty",
      image: beauty,
    },
    {
      name: "Restaurant",
      image: rest,
    },
    {
      name: "Fashion",
      image: fashion,
    },
    {
      name: "E-Commerce",
      image: ecommerce,
    },
    {
      name: "Software",
      image: software,
    },
    {
      name: "Home remodeling and Building contractors",
      image: homeRemodeling,
    },
  ];
  return (
    <section className={styles.container} id="projects">
      <Title title="Our Projects" />
      <div className={styles.wrapper}>
        {cards.map((card) => (
          <div key={card.name} className={styles.card}>
            <div className={styles.image}>
              <Image alt={card.name} src={card.image} />
            </div>
            <div className={styles.footer}>
              <span className={stolzl.className} style={{ fontWeight: 400 }}>
                Projects
              </span>
              <span className={sfPro.className} style={{ fontWeight: 600 }}>
                {card.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
