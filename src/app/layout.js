import "./globals.css";

export const metadata = {
  title: "Kane Pickett | Dev",
  description:
    "Software Dev who designs fast, minimal interfaces that prioritize clarity, flow, and ease of use. Simple tools. Zero friction."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
