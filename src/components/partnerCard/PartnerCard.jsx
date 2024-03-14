"use client";

import Image from "next/image";
import styles from "./partnerCard.module.css";
import Link from "next/link";
import { useState } from "react";
import { saveLike } from "@/lib/actions/actions";

export default function PartnerCard({ partner }) {
  const [liked, setLiked] = useState(partner.like);

  return (
    <div className={styles.container}>
      <Link
        href={`/team/${partner._id}`}
        className={styles.link}
      >
        <div className={styles.infoContainer}>
          <Image
            className={styles.photo}
            alt="img"
            src={partner.img}
            width={124}
            height={124}
          />
          <h2 className={styles.name}>{partner.name}</h2>
        </div>
      </Link>

      <form
        className={styles.likeBlock}
        action={saveLike}
      >
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
          value={liked}
          readOnly
        />
        <div className={styles.likeContainer}>
          <button
            className={styles.likeButton}
            onClick={() => setLiked((prev) => !prev)}
          >
            <Image
              className={styles.like}
              alt="like"
              src={liked ? "/Vectorcolor.svg" : "/Vector.svg"}
              width={14}
              height={12}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
