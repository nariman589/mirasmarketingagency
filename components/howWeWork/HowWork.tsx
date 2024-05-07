import React from "react";

import styles from "./styles.module.css";
import Title from "../title/Title";
import { sfPro, stolzl } from "@/app/fonts";

function HowWork() {
  const arr = [
    {
      title: "1.  Analysis",
      description:
        "We analyze the market, competitors, and the project itself, to create a snapshot of the target audience and to identify competitive advantages.",
      color: "#EA30AB",
    },
    {
      title: "2.  Strategy",
      description:
        "We provide detailed outlines for brand positioning,rules for running social media and communicating with your audience, as well as content and advertising strategies.",
      color: "#F88470",
    },
    {
      title: "3.  Creation",
      description:
        "We develop a corporate identity, design communities,create a content plan,and prepare publications and creative advertising solutions.",
      color: "#8230EA",
    },
    {
      title: "4.  Advertising",
      description:
        "We launch test advertising campaigns,and track and analyze results to reach required volumes.",
      color: "#64D85C",
    },
    {
      title: "5.  Content",
      description:
        "We create content and run it on social media. We examine key audience involvement, traffic growth, and adjust strategy based on incoming data.",
      color: "#4993FF",
    },
    {
      title: "6.  Implementation",
      description:
        "We develop and implement complex interactive tools in order to involve more of the target audience.",
      color: "#FFA53F",
    },
    {
      title: "7.  Report",
      description:
        "At the end of the month we report on completed tasks, analyze results, and offer a strategy optimization plan.",
      color: "#3048EA",
    },
  ];
  return (
    <section className={styles.section} id="howWeWork">
      <div className={styles.wrapper}>
        <div
          className={styles.container}
          style={{ backgroundColor: "white", display: "flex" }}
        >
          <p className={`${styles.mainTitle} ${stolzl.className}`}>
            {"How we work"}
          </p>
        </div>
        {arr.map((item, index) => (
          <div
            className={styles.container}
            style={{ backgroundColor: item.color }}
          >
            <p className={`${styles.title} ${stolzl.className}`}>
              {item.title}
            </p>
            <p className={`${styles.description} ${sfPro.className}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowWork;
