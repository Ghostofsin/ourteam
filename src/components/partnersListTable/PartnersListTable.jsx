import Image from "next/image";
import Pagination from "../pagination/Pagination";
import styles from "./partnersListTable.module.css";
import { deletePartner } from "@/lib/actions/adminActions";
import Link from "next/link";

export default function PartnersListTable({ partners }) {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table className={styles.userList}>
          <thead>
            <tr>
              <th colSpan="3">Partners List</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <tr>
								<td>
									<Image  className={styles.image} src={partner.img} width={30} height={30} alt="img"/>
								</td>
                <td>
                  <div
                    className={styles.userName}
                    key={partner.id}>
										
                    {partner.name}
                  </div>
                </td>
                <td>
                    <Link className={styles.link} href={`/admin/edit/${partner.id}`}>
                      <button className={styles.editButton}>
                      Edit     
                      </button>
                    </Link>
               
                </td>
                <td>
                  <form action={deletePartner} className="" >
                    <input name="id" value={partner._id} hidden></input>
                    <button className={styles.deleteButton}>Delete</button>
                  </form>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
