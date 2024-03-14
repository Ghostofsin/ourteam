import BackButton from '@/components/buttons/BackButton';
import styles from './adminSinglePage.module.css'
import LogOutButton from '@/components/buttons/LogOutButton';
import Details from '@/components/userDetails/Details';
import AddUserPanel from '@/components/addUserPanel/AddUserPanel';
import EditUserPanel from '@/components/editUserPanel/EditUserPanel';


const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/admin/edit/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export default async function AdminSinglePage({ params }) {
  const { id } = params;
  const partner = await getData(id);

  return (
    <div>
    <div className={styles.container}>
      <div className={styles.nav}>
        <BackButton />
        <LogOutButton />
      </div>

      <Details userId={id} />
    </div>
    <div className={styles.editPanel}>
      <EditUserPanel partner={partner}/>
      </div>
    
  </div>
  );
}
