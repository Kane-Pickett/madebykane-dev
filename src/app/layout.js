import "./globals.css";

export const metadata = {
  title: "Kane Pickett | Dev",
  description:
    "Software Dev who designs fast, minimal interfaces that prioritize clarity, flow, and ease of use. Simple tools. Zero friction.",

  openGraph: {
    title: "Kane Pickett | Dev",
    description:
      "Software Dev who designs fast, minimal interfaces that prioritize clarity, flow, and ease of use. Simple tools. Zero friction.",
    url: "https://madebykane.dev",
    siteName: "Kane Pickett",
    images: [
      {
        url: "https://madebykane.dev/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kane Pickett Portfolio"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Kane Pickett | Dev",
    description:
      "Software Dev who designs fast, minimal interfaces that prioritize clarity, flow, and ease of use. Simple tools. Zero friction.",
    images: ["https://madebykane.dev/preview.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="cursor-crosshair">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
