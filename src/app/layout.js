import "./globals.css";

export const metadata = {
  title: "Agency Africa",
  description: "Agency Africa Description",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
      ,
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}