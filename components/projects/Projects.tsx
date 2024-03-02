import React from "react";
import styles from "./styles.module.css";
import { sfPro, stolzl } from "@/app/fonts";

function Projects() {
  const cards = [
    {
      name: "Project name 1",
      hashtag: "#web-site",
      backgroundColor: "#64D85C",
    },
    {
      name: "Project name 2",
      hashtag: "#logo",
      backgroundColor: "#8230EA",
    },
    {
      name: "Project name 3",
      hashtag: "#web-site",
      backgroundColor: "#4993FF",
    },
    {
      name: "Project name 4",
      hashtag: "#brandbook",
      backgroundColor: "#FFA53F",
    },
  ];
  return (
    <section className={styles.container} id="projects">
      {cards.map((card) => (
        <div
          key={card.name}
          className={styles.card}
          style={{ backgroundColor: card.backgroundColor }}
        >
          <div className={styles.info}>
            <p className={`${stolzl.className} ${styles.title}`}>{card.name}</p>
            <div className={`${sfPro.className} ${styles.buttons}`}>
              <button>View Project</button>
              <p>{card.hashtag}</p>
            </div>
          </div>
          <div className={styles.image}></div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
