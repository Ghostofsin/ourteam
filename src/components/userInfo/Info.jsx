import Image from "next/image";
import styles from "./info.module.css";
// import { partners } from "@/data/data";
import { getPartnerById } from "@/lib/methods";


export default async function Info({userId}) {

	const partner = await getPartnerById(userId)

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          Clients see him as an expert in developing end-to-end financial
          product solutions, including aspects such as organizational structure,
          processes, analytics and IT components. He helps clients better
          understand the risk profile of their business, improve processes
          through the use of emerging technologies, and increase sales using the
          latest analytical tools.
        </p>
        <p>
          When working with clients, it is not enough to simply solve a specific
          problem or help overcome difficulties. It is equally important to pay
          attention to the exchange of knowledge: “One of the most positive
          moments is the knowledge that you have helped the client move to a
          completely new level of competence, the confidence that after the end
          of the project the client has everything he needs to further develop
          independently.”
        </p>
        <p>
          In addition to various projects for clients in the financial sector,
          Sorin is active in business. He is a co-owner of a chain of aesthetic
          medicine clinics in Switzerland, offering an innovative approach to
          beauty, as well as an investor in other business projects.
        </p>
      </div>
      <div className={styles.contacts}>
				<div className={styles.phone}>
					<Image src="/phone.svg" width={20} height={20}/>
					<span>{partner.phone}</span>
				</div>
				<div className={styles.email}>
				<Image src="/email.svg" height={15} width={21}/>
					<span>{partner.email}</span>
				</div>
			</div>
    </div>
  );
}
