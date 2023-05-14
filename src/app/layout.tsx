import Header from "@/components/Header";
import "./globals.css";
import { Darker_Grotesque, Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-darker-grotesque",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito-sans",
});

export const metadata = {
  title: "RD Station Frontend Test",
  description: "RD Station Frontend Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${darkerGrotesque.variable} ${nunitoSans.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
