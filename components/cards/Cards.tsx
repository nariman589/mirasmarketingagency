import React from "react";
import styles from "./styles.module.css";

import Image from "next/image";

import { stolzl } from "@/app/fonts";

import first from "public/cards/first.png";
import second from "public/cards/second.png";
import third from "public/cards/third.png";

function Cards() {
  const cards = [
    {
      title: "Social Media Marketing",
      description:
        "In Social Media Marketing, we engage with your audience across popular platforms, creating engaging content and tracking performance.",
      img: first,
      color: "#ea30ab",
      button: "I want a SMM",
    },
    {
      title: "Advertising and Branding",
      description:
        "Our Advertising and Branding services enhance your brand's visibility, while our Digital Marketing strategies leverage the power of digital platforms to boost your brand awareness and sales.",
      img: second,
      color: "#f88470",
      button: "I want a SMM",
    },
    {
      title: "Website creation service",
      description:
        "We build robust, scalable websites and applications that meet your business needs and deliver seamless user experience. Our team of skilled developers ensures your digital presence is reliable and efficient.",
      img: third,
      color: "#8230ea",
      button: "I want a web site",
    },
    {
      title: "Content creation",
      description:
        "We create content and run it on social media. We examine key audience involvement, traffic growth, and adjust strategy based on incoming data.",
      img: "",
      color: "#FFA53F",
      button: "I want a SMM",
    },
    {
      title: "Logo and Brand Book Services",
      description:
        "Craft your brand's visual identity with our expert team. We create unique logos and provide comprehensive guidelines for consistency in communication. Stand out with a memorable and cohesive brand.",
      img: "",
      color: "#4993FF",
      button: "I want a logo",
    },
  ];
  return (
    <section className={`${styles.container} ${stolzl.className}`} id="wedo">
      {cards?.map((card) => (
        <div
          key={card.title}
          style={{ backgroundColor: card.color }}
          className={styles.block}
        >
          <p className={styles.title}>{card.title}</p>
          <p>{card.description}</p>
          <button>{card.button}</button>
          <Image loading="lazy" src={card.img || first} alt="first" />
        </div>
      ))}
    </section>
  );
}

export default Cards;
