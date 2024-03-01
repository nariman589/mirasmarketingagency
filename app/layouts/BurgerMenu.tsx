"use client";
import React, { useRef, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { routes } from "./Header";

import styles from "./styles.module.css";

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  return (
    <div ref={ref} className={styles.burderMenu}>
      <Hamburger toggled={isOpen} toggle={setOpen} color="#14151F" />
      {isOpen && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.motiondiv}
            >
              <ul className={styles.burgerList}>
                {routes.map((route, idx) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className={styles.motionli}
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={styles.hamburgerLink}
                      href={route.href}
                    >
                      <span className={styles.hamburgerTitle}>
                        {route.title}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 5 / 10,
                }}
              >
                Send Request
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default BurgerMenu;
