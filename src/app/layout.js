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
      <body>{children}</body>
    </html>
  );
}
