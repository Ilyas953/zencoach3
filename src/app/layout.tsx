import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "ZenCoach",
  description: "Genere par zencoach",
};

const inter = Inter({
  subsets: ["latin"], // tu peux ajouter "latin-ext" si besoin
});
export const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased  `}
      >
        {children}
      </body>
    </html>
  );
}
