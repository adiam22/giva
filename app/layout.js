import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; 

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
});
const robotoMono = localFont({
  src: "./fonts/RobotoMono.woff2",
  variable: "--font-roboto-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SnapLink - Fast & Reliable URL Shortener",
  description: "SnapLink helps you shorten and manage your URLs effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-blue-50 text-gray-900`}
      > 
        <Navbar />
        <main className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          {children}
        </main>
      </body>
    </html>
  );
}

