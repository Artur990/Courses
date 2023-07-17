import NavbarCourse from "@/components/NavbarCourse";
import "../../globals.css";

export const metadata = {
  title: "Curses",
  description: "Curses",
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
