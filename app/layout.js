import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Audio Cutter App",
  description: "Audio Cutter",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <style>
          {`
              body {
                margin: 0;
                padding: 0;
                font-family: var(--font-geist-sans), sans-serif;
              }
            `}
        </style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
