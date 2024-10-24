import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";
import Providers from "@/store/provider";

export const metadata: Metadata = {
  title: "Quiz.ART",
  description: "Learn, do quizes about art from around the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
