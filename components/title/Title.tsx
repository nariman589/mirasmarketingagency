import React from "react";
import styles from "./Title.module.css";
import { stolzl } from "@/app/fonts";

interface Props {
  title: string;
  enableMargin?: boolean;
}

function Title({ title, enableMargin }: Props) {
  return (
    <p
      className={`${styles.title} ${stolzl.className}`}
      style={{ marginLeft: enableMargin ? "24px" : "0" }}
    >
      {title}
    </p>
  );
}

export default Title;
