import Image from "next/image";
import styles from "./logOutButton.module.css";
import { auth, signOut } from "../../auth";
import { handleLogout } from "@/lib/actions/actions";

export default async function LogOutButton() {
  const session = await auth();
  console.log(session);

  return (
    <div className={styles.nav}>
      <form action={handleLogout}>
        <button className={styles.button}>LogOut</button>
        <Image
          className={styles.imgLogout}
          src="/exit.svg"
          alt="logout"
          width={18}
          height={18}
          onClick={handleLogout}
        ></Image>
      </form>
    </div>
  );
}
