
import styles from "./main.module.css";
import PartnerCard from '@/components/partnerCard/PartnerCard'
// import { partners } from "@/data/data";
import { getPartners, getUsers } from "@/lib/methods";


export default function Main({partners}) {

  return (
    <div className={styles.container}>
   	{partners.map((partner, index) => (
        <PartnerCard
          key={index}
          partner={JSON.parse(JSON.stringify(partner))}
        />
      ))}
    </div>
  );
}
