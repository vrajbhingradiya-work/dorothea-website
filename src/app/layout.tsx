import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Dorothea: Best Bakery in Jaipur",
  description: "Best Bakery in Jaipur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link
          rel="apple-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={nunitoSans.className}>
        {/* <Navbar /> */}
        {/* <SlideInFromBottom sequence={18}>
            <Link
              className="hover:scale-110 transition duration-300 hover:ease-in-out fixed z-40 bottom-4 right-4 p-4 fill-white bg-green-500 rounded-full  shadow-md shadow-green-400"
              href="https://wa.me/9829407612"
            >
              <WhatsappIcon className="h-[35px] w-[35px] " />
            </Link>
          </SlideInFromBottom> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
