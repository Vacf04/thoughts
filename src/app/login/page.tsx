import LoginForm from "@/components/form/LoginForm";
import type { Metadata } from "next";
import Image from "next/image";
import LoginIllustration from "@/images/loginIlustration.svg";
import styles from "./loginPage.module.css";

export const metadata: Metadata = {
  title: "Login | Thoughts",
  description: "Login on Thoughts.",
};

export default function LoginPage() {
  return (
    <section className={`animeEntry ${styles.loginContainer} container`}>
      <div className={styles.loginContent}>
        <Image src={LoginIllustration} alt="login illustration" priority />
        <LoginForm />
      </div>
    </section>
  );
}
