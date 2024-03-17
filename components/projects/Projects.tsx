import React from "react";
import styles from "./styles.module.css";
import { sfPro, stolzl } from "@/app/fonts";
import Title from "../title/Title";

import khusicon from "public/projects/khusfloors.png";
import Image from "next/image";

function Projects() {
  const cards = [
    {
      name: "KhusFloors",
      hashtag: "#web-site",
      backgroundColor: "#64D85C",
      img: khusicon,
      url: "https://www.khusfloors.com/",
    },
    {
      name: "Project name 2",
      hashtag: "#logo",
      backgroundColor: "#8230EA",
      img: "",
    },
    {
      name: "Project name 3",
      hashtag: "#web-site",
      backgroundColor: "#4993FF",
      img: "",
    },
    {
      name: "Project name 4",
      hashtag: "#brandbook",
      backgroundColor: "#FFA53F",
      img: "",
    },
  ];
  return (
    <section className={styles.container} id="projects">
      <Title title="Our Projects" />
      <div className={styles.wrapper}>
        {cards.map((card) => (
          <div
            key={card.name}
            className={styles.card}
            style={{ backgroundColor: card.backgroundColor }}
          >
            <div className={styles.info}>
              <p className={`${stolzl.className} ${styles.title}`}>
                {card.name}
              </p>
              <div className={`${sfPro.className} ${styles.buttons}`}>
                <a href={card.url} target="_blank">
                  View Project
                </a>
                <p>{card.hashtag}</p>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={card.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
