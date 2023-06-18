import Header from "@/component/header/header";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sandbox HSI Quiz 4",
  description:
    "Mencoba menggunakan App Route namun fitur tetap sesuai deskripsi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={open.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
