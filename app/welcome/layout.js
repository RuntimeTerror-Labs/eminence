import "../globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../public/fonts/Satoshi-Variable.woff2" });

export const metadata = {
  title: "Eminence : Create Public profile",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}