"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

import { sfPro, stolzl } from "@/app/fonts";
import { useRouter, useSearchParams } from "next/navigation";

const useOutsideClick = (ref: any, handler: any) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  const ref = useRef(null);

  const handleClickOutside = () => {
    // Your outside click handling logic here
    router.push("/");
  };

  useOutsideClick(ref, handleClickOutside);

  const [isFetching, setIsFetching] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    details: "",
    phone: "",
  });

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFetching(true);
    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      router.push("/");
    } catch (error) {
      console.error("There was an error!", error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (!modal) return null;

  return (
    <div className={styles.background}>
      <form ref={ref} className={styles.modal} onSubmit={handleSubmit}>
        <p className={stolzl.className}>Get a Proposal</p>
        <div className={styles.fields}>
          <input
            name="name"
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            name="companyName"
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <textarea
            required
            onChange={handleChange}
            name="details"
            placeholder="Tell us a little about your request…"
          />
        </div>
        <button disabled={isFetching} type="submit" className={sfPro.className}>
          {isFetching ? <div className={styles.loader}></div> : "Send request"}
        </button>
      </form>
    </div>
  );
}

export default Modal;
