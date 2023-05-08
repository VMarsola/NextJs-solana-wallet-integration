import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const IBM = IBM_Plex_Mono({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Credix",
  description: "solana and credix app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={IBM.className}>
        <Header />
        <main className="w-full min-h-screen">
          <div className="max-w-7xl mx-auto py-6 px-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
