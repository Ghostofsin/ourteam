import Main from "@/components/main/Main";
import styles from "./team.module.css";
import Image from "next/image";

export default function TeamLayout({ children }) {
  return (
    <div className={styles.container}>
     
      {children}

    </div>
  );
}
