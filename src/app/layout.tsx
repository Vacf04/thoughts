import { Roboto, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/context/userContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const ZenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${ZenMaruGothic.variable}`}>
        <UserContextProvider>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
