import React from "react";
import styles from "./styles.module.css";

import Image from "next/image";

import puzzle from "public/icons/puzzle.svg";
import pencil from "public/icons/pencil.svg";
import pin from "public/icons/pin.svg";
import camera from "public/icons/camera.svg";
import gear from "public/icons/gear.svg";

import mirasImage from "public/banners/Miras.png";

import { sfPro, stolzl } from "@/app/fonts";

function Banners() {
  const services = [
    {
      picture: puzzle,
      title: "Development of SMM strategies",
    },
    {
      picture: pencil,
      title: "Content creation",
    },
    {
      picture: pin,
      title: "Targeted advertising",
    },
    {
      picture: camera,
      title: "Photo and video production",
    },
    {
      picture: gear,
      title: "WEB design and SEO",
    },
  ];

  return (
    <section className={`${styles.wrapper} ${stolzl.className}`}>
      <div>
        <div className={styles.container}>
          <p className={`${styles.mainText} ${stolzl.className}`}>
            Grow your digital marketing revenue with us
          </p>
          <p className={`${sfPro.className} ${styles.secondaryText}`}>
            Get ready to drive revenue — just request a proposal below to
            receive a digital marketing proposal that includes a customized
            strategy, pricing, and flight plan!
          </p>
          <div className={`${sfPro.className} ${styles.services}`}>
            <p className={`${stolzl.className} ${styles.servicesMainText}`}>
              What We Do:
            </p>
            {services.map((service) => (
              <div className={styles.service}>
                <Image src={service.picture} alt="" />
                <p>{service.title}</p>
              </div>
            ))}
          </div>
          <button className={`${styles.button} ${stolzl.className}`}>
            Get a Proposal
          </button>
          <Image className={styles.mirasPic} src={mirasImage} alt="miras" />
        </div>
      </div>
    </section>
  );
}

export default Banners;
