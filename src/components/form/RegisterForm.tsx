"use client";

import React from "react";
import { FormEvent } from "react";
import Input from "./Input";
import Button from "./Button";
import { signUp } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";

export default function RegisterForm() {
  const [username, setUsername] = React.useState("");
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
    const { errorMessage } = await signUp(username, email, password);
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
    <form onSubmit={handleSubmit}>
      <Input
        label="Username"
        name="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
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
      <Button>Register</Button>
    </form>
  );
}
