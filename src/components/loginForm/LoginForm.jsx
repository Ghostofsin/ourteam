"use client";

import {
  login,
  handleGithubLogin,
  handleGoogleLogin,
} from "@/lib/actions/actions";
import { auth, signIn } from "../../auth";
import styles from "./loginForm.module.css";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  return (
    <>
      <div className={styles.socialMediaForm}>
        <form action={handleGithubLogin}>
          <button className={styles.socialLogin}>
            <Image
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              loading="lazy"
              alt="google logo"
              width={20}
              height={20}
            />
            <span> Login with Github</span>
          </button>
        </form>
  
        <form action={handleGoogleLogin}>
          <button className={styles.socialLogin}>
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
              width={20}
              height={20}
            />
            <span>Login with Google</span>
          </button>
        </form>
      </div>

      <form
        className={styles.form}
        action={formAction}
      >
        <input
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
        />

        <button>Login</button>
        {state}
        <Link href="/registration">
          Do not have account? <b>Register</b>
        </Link>
      </form>
    </>
  );
}
