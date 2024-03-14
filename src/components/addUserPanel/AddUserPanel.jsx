"use client";

import { savePartner } from "@/lib/actions/adminActions";
import styles from "./addUserPanel.module.css";
import { useRef } from "react";

export default function AddUserPanel() {
  const ref = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.addUserPanel}>
        <div>
          <b>Add new partner</b>
        </div>
        <form
          id="submitForm"
          className={styles.form}
          ref={ref}
          action={async (formData) => {
            await savePartner(formData);
            ref.current?.reset();
          }}
        >
          <div className={styles.inputBlock}>
            {" "}
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              className={styles.input}
              type="text"
              name="name"
            />
          </div>

          <div className={styles.inputBlock}>
            {" "}
            <label className={styles.label} htmlFor="position">Position</label>
            <input
              className={styles.input}
              type="text"
              name="position"
            />
          </div>

          <div className={styles.inputBlock}>
            <label className={styles.label} htmlFor="img">Image link</label>
            <input
              className={styles.input}
              type="text"
              name="img"
            />
          </div>

          <div className={styles.inputBlock}>
            {" "}
            <label className={styles.label} htmlFor="phone">Phone number</label>
            <input
              className={styles.input}
              type="tel"
              name="phone"
            />
          </div>

          <div className={styles.inputBlock}>
            {" "}
            <label className={styles.label} htmlFor="email">Email address</label>
            <input
              className={styles.input}
              type="email"
              name="email"
            />
          </div>

          <button className={styles.createButton}>Create</button>
        </form>
      </div>
    </div>
  );
}
