import LoginForm from "@/components/form/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts | Login",
  description: "Login on Thoughts.",
};

export default function LoginPage() {
  return <LoginForm />;
}
