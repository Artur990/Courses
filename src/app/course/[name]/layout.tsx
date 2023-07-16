import { Inter } from "next/font/google";
import NavbarCourse from "@/components/NavbarCourse";

import "../../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curses",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavbarCourse />
      {children}
    </section>
  );
}
