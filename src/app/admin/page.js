import PartnersListTable from "@/components/partnersListTable/PartnersListTable";
import styles from "./admin.module.css";
import LogOutButton from "@/components/buttons/LogOutButton";
import AdminTop from "@/components/adminTop/AdminTop";
import Pagination from "@/components/pagination/Pagination";
import AddUserPanel from "@/components/addUserPanel/AddUserPanel";
import { getPartners } from "@/lib/methods";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/admin", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export default async function AdminPage({ searchParams }) {
  // const partners = await getData();
  const ITEM_PER_PAGE = 6
  const page = searchParams?.page;
  const { count, partners } = await getPartners(page, ITEM_PER_PAGE);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <LogOutButton />
      </div>

      <AdminTop />

      <div className={styles.content}>
        <div>
          <PartnersListTable partners={partners} />
          <Pagination count={count} itemPerPage={ITEM_PER_PAGE} />
        </div>
        <div>
          <AddUserPanel />
        </div>
      </div>
    </div>
  );
}
