import BackgroundPattern from "@/components/BackgroundPattern/BackgroundPattern";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Envoy",
  description: "Envoy Wating List Website",
  icons: {
    icon: "/logo.png",
  },
};
import localFont from "next/font/local";
import App from "./App";

const CalSansFont = localFont({
  src: [
    {
      path: "../assests/fonts/cal-sans/webfonts/CalSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assests/fonts/Inter/web/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assests/fonts/Inter/web/Inter-Light.woff2",
      weight: "300",
      style: "light",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.21/build/spline-viewer.js"
        ></script>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${CalSansFont.className} `}>
        <App children={children} />
      </body>
    </html>
  );
}
