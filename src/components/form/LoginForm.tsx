"use client";

import React from "react";
import { FormEvent } from "react";
import Input from "./Input";
import Button from "./Button";
import { signIn } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";
import styles from "./Form.module.css";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loadingForm, setLoadingForm] = React.useState(false);
  const { user, loading } = useUser();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [loading, user, router]);

  async function handleSubmit(event: FormEvent) {
    setLoadingForm(true);
    event.preventDefault();
    const { errorMessage } = await signIn(email, password);
    setError(errorMessage);
    if (!errorMessage) {
      router.push("/");
    } else {
      setLoadingForm(false);
    }
  }

  if (loading || loadingForm) return <div>Loading...</div>;
  if (user) return null;
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.h1}>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        {error && <p>{error}</p>}
        <Button style={{ marginTop: "1.25rem" }}>Login</Button>
      </form>
      <p className={styles.goToAnotherFormText}>
        You don’t have a account yet ?{" "}
        <span>
          <Link href={"/register"}>Register Here.</Link>
        </span>
      </p>
    </div>
  );
}
