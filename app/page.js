import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-blue-50">
      <section className="grid grid-cols-1 md:grid-cols-2 h-[50vh] p-8">
        <div className="flex flex-col gap-4 items-center md:items-start justify-center text-center md:text-left">
          <p className={`text-4xl font-bold ${poppins.className} text-blue-900`}>
            Welcome to SnapLink – The Smarter URL Shortener
          </p>
          <p className="max-w-lg text-gray-700">
            SnapLink is the most straightforward URL shortener available. No tracking, no unnecessary logins—just fast, simple, and secure link shortening.
          </p>
          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md px-5 py-2 font-bold text-white transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-gray-800 hover:bg-gray-900 rounded-lg shadow-md px-5 py-2 font-bold text-white transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center relative">
          <Image
            className="mix-blend-darken"
            alt="Vector illustration"
            src="/vector.jpg"
            width={400}
            height={300}
          />
        </div>
      </section>
    </main>
  );
}
