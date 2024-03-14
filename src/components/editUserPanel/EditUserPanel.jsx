"use client";

import { editPartner } from "@/lib/actions/adminActions";
import styles from "./editUserPanel.module.css";

export default function EditUserPanel({ partner }) {
  return (
    <div className={styles.container}>
      <div className={styles.addUserPanel}>
        <form
          id="editForm"
          className={styles.form}
          action={editPartner}
        >
          <div>
            <div className={styles.inputBlock}>
              {" "}
              <label
                className={styles.label}
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={styles.input}
                type="text"
                name="name"
                defaultValue={partner.name}
              />
            </div>

            <div className={styles.inputBlock}>
              {" "}
              <label
                className={styles.label}
                htmlFor="position"
              >
                Position
              </label>
              <input
                className={styles.input}
                type="text"
                name="position"
                defaultValue={partner.position}
              />
            </div>

            <div className={styles.inputBlock}>
              <label
                className={styles.label}
                htmlFor="img"
              >
                Image link
              </label>
              <input
                className={styles.input}
                type="text"
                name="img"
                defaultValue={partner.img}
              />
            </div>

            <div className={styles.inputBlock}>
              {" "}
              <label
                className={styles.label}
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                defaultValue={partner.phone}
              />
            </div>

            <div className={styles.inputBlock}>
              {" "}
              <label
                className={styles.label}
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className={styles.input}
                type="email"
                name="email"
                defaultValue={partner.email}
              />
            </div>
          </div>
          <input
            type="text"
            name="id"
            hidden
            value={partner._id}
            readOnly
          />
          <input
            type="text"
            name="like"
            hidden
            value={partner.like}
            readOnly
          />

          <button className={styles.createButton}>Save</button>
        </form>
      </div>
    </div>
  );
}
