"use client";

import styles from "./pagination.module.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Pagination({ count, itemPerPage }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  // params.set("page", 1);

  // replace(`${pathname}?${params}`);

  const page = searchParams.get("page") || 1;
  const ITEM_PER_PAGE = itemPerPage;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={()=>handleChangePage("prev")}
      >{`< Prev`}</button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={()=>handleChangePage("next")}
      >{`Next >`}</button>
    </div>
  );
}
