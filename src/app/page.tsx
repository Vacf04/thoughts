import SendThought from "@/components/homePage/SendThought";
import User from "@/components/user/User";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Share your thougthts.",
};

export default function HomePage() {
  return (
    <section className="container">
      <SendThought />
      <User />
    </section>
  );
}
