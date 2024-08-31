import RegisterForm from "@/components/form/RegisterForm";
import type { Metadata } from "next";
import Image from "next/image";
import LoginIllustration from "@/images/loginIlustration.svg";
import styles from "./registerPage.module.css";

export const metadata: Metadata = {
  title: "Register | Thoughts",
  description: "Register on Thoughts.",
};

export default function RegisterPage() {
  return (
    <section className={`container animeEntry ${styles.registerContainer}`}>
      <div className={styles.registerContent}>
        <Image src={LoginIllustration} alt="login illustration" priority />
        <RegisterForm />
      </div>
    </section>
  );
}
