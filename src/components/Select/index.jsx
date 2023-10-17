import styles from "./styles.module.css";
import React from "react";

export default function Select({ children, id,change, ...props }) {
  return <select className={styles.select} 
                 id={id} {...props}
                 onChange={change} >
                 {children}
          </select>
}