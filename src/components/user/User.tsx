"use client";

import React from "react";
import { useUser } from "@/context/userContext";
import { logout } from "@/firebase/auth";
import { useRouter } from "next/navigation";

export default function User() {
  const { user, loading } = useUser();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  React.useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, router, loading]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;
  return (
    <div>
      <p>Email Usuario: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
