"use client";

import Logo from "@/images/icons/Logo";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <p>By Víttor Franceschi</p>
      </div>
    </footer>
  );
}
