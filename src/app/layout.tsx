import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import "./globals.css"
export const metadata: Metadata = {
  title: { default: "Next Js Tutorial", template: "%s | Template Title" },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
