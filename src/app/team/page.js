
import styles from "./team.module.css";
import Top from "@/components/top/Top";
import Main from "@/components/main/Main";
import LogOutButton from "@/components/buttons/LogOutButton";
import Pagination from "@/components/pagination/Pagination";
import { getPartners } from "@/lib/methods";


export default async function TeamPage({searchParams}) {

  const ITEM_PER_PAGE = 4
  const page = searchParams?.page;
  const { count, partners } = await getPartners(page, ITEM_PER_PAGE);

  return (
    <div>
      <LogOutButton />
      <Top />
      <Main partners={partners}/>
			<Pagination count={count} itemPerPage={ITEM_PER_PAGE}/>
    </div>
  );
}
