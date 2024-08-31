"use client";

import { useUser } from "@/context/userContext";
import Logo from "@/images/icons/Logo";
import UserIcon from "@/images/icons/UserIcon";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <nav className={`${styles.headerContent}`}>
        <Link href={"/"}>
          <Logo />
        </Link>
        {user && (
          <Link href={"/account"}>
            <UserIcon />
          </Link>
        )}
      </nav>
    </header>
  );
}
