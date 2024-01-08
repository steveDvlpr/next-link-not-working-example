import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center justify-between p-24">
          <div className="my-8 flex flex-row gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/imprint">Imprint</Link>
            <Link href="/article">Articles</Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
