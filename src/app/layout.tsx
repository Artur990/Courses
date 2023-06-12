import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Food from "@/components/Food";
import { MenuItem } from "../../data/courses";
import Courses from "../components/Courses";

import "./globals.css";
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
    <html lang="pl">
      <body className={inter.className}>
        {/* <Suspense fallback={null}> */}
        <Navbar />
        {children}
        <Food />
        {/* </Suspense> */}
      </body>
    </html>
  );
}