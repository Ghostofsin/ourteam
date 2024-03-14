"use client";

import Image from "next/image";
import styles from "./backButton.module.css";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <div>
      <button
        className={styles.button}
        type="button"
        onClick={() => router.back()}
      >
        Back
      </button>
      <Image
        className={styles.imgBack}
        src="/back.svg"
        alt="back"
        width={9}
        height={18}
        onClick={() => router.back()}
      ></Image>
    </div>
  );
}
