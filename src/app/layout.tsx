import "@/styles/globals.css";
import { Press_Start_2P } from "next/font/google";

const inter = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Scripts | Krishna Kumar",
  description: "My Scripts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
