import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
