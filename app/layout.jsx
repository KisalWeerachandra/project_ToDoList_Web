import "../styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
        </div>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  );
}
