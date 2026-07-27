import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://amyargotti.github.io/chefsito-portfolio";
const title = "Redouane El Haloui — Sous Chef";
const description = "Professional chef with 8+ years of kitchen experience, including four years in restaurants across Russia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: `${siteUrl}/favicon.svg`, shortcut: `${siteUrl}/favicon.svg` },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Redouane El Haloui — Sous Chef portfolio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
