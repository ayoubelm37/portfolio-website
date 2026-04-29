import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayoub | Personal Portfolio",
  description: "Ayoub is a Front-End developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-slate-50 pt-28 text-gray-950 sm:pt-36 dark:bg-[#0b1220] dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute right-[-6rem] top-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan-200/40 blur-[8rem] sm:w-[42rem] dark:bg-cyan-700/20" />
        <div className="absolute left-[-12rem] top-[8rem] -z-10 h-[28rem] w-[34rem] rounded-full bg-violet-200/40 blur-[8rem] sm:w-[46rem] dark:bg-violet-700/20" />
        <div className="absolute bottom-[-10rem] left-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-fuchsia-200/20 blur-[8rem] dark:bg-fuchsia-800/10" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
