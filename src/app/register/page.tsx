import RegisterForm from "@/components/form/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts | Register",
  description: "Register on Thoughts.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
