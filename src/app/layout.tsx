import "@/styles/globals.css";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
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
      <body className={montserratAlternates.className}>{children}</body>
    </html>
  );
}
