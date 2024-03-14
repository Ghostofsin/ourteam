
import Details from "@/components/userDetails/Details";
import styles from "./singlePartner.module.css";
import Info from "@/components/userInfo/Info";
import Main from "@/components/main/Main";
import Image from "next/image";
import LogOutButton from "@/components/buttons/LogOutButton";
import BackButton from "@/components/buttons/BackButton";

export default function SinglePartnerPage({ params }) {

  const { id } = params;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.nav}>
          <BackButton/>
          <LogOutButton/>
        </div>

        <Details userId={id} />
      </div>
      <Info userId={id} />
    </div>
  );
}
