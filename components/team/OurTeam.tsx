import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

import LeftBtn from "public/team/leftButton.svg";
import RightBtn from "public/team/rightButton.svg";

import first from "public/team/first.svg";
import second from "public/team/second.svg";
import third from "public/team/third.svg";
import fourth from "public/team/fourth.svg";

import { sfPro, stolzl } from "@/app/fonts";
import Link from "next/link";

function OurTeam() {
  const team = [
    {
      name: "Name",
      pic: first,
      jobTitle: "Job Title",
    },
    {
      name: "Name",
      pic: second,
      jobTitle: "Job Title",
    },
    {
      name: "Name",
      pic: third,
      jobTitle: "Job Title",
    },
    {
      name: "Name",
      pic: fourth,
      jobTitle: "Job Title",
    },
  ];
  return (
    <section className={styles.container} id="team">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h2 className={stolzl.className}>Our Team</h2>
            <p className={sfPro.className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className={styles.buttons}>
            <Link href="?modal=true">
              <Image loading="lazy" src={LeftBtn} alt="go left" />
            </Link>
            <Link href="?modal=true">
              <Image loading="lazy" src={RightBtn} alt="go right" />
            </Link>
          </div>
        </div>
        <div className={styles.main}>
          {team.map((member, index) => (
            <div key={index} className={styles.member}>
              <Image loading="lazy" src={member.pic} alt={member.name} />
              <p className={`${stolzl.className} ${styles.name}`}>
                {member.name}
              </p>
              <p className={sfPro.className}>{member.jobTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
