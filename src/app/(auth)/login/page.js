import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./loginPage.module.css";
import { auth } from "../../../auth";

export default async function LoginPage() {
  const session = await auth();
  // console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>Login</div>
        <LoginForm />
      </div>
    </div>
  );
}
