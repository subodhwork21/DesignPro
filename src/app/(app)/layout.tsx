import type { Metadata } from "next";
import { AppWrapper } from "../../context";
import React from "react";
import { HeaderNewsContextProvider } from "@/context/header-news-context";
import { HeaderWorkContextProvider } from "@/context/header-work-Context";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "TapCreative - Brand Experience, Strategy & Design agency",
  description:
    "We are a design agency specialising in brand strategy, brand identity, physical & digital spaces.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-franklin_regular relative">
        <AppWrapper>
          <HeaderNewsContextProvider>
            <HeaderWorkContextProvider>
              <Header />
              {children}
              <Footer />
            </HeaderWorkContextProvider>
          </HeaderNewsContextProvider>
        </AppWrapper>
      </body>
    </html>
  );
}
