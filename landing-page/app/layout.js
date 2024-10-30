import BackgroundPattern from "@/components/BackgroundPattern/BackgroundPattern";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Script from "next/script"; // Import Next.js Script component

export const metadata = {
  title: "McKinsly",
  description: "McKinsly Wating List Website",
  icons: {
    icon: "/logo.png",
  },
};
import localFont from "next/font/local";
import App from "./App";
import { Toaster } from "react-hot-toast";

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
        {/* <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.21/build/spline-viewer.js"
        ></script> */}
        {/* <script type="text/javascript">    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "o2wihkxxrk");
</script> */}

        <Script
          src="https://unpkg.com/@splinetool/viewer@1.9.21/build/spline-viewer.js"
          type="module"
          strategy="afterInteractive" // Loads the script after page is interactive
        />

        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "o2wihkxxrk");`}
        </Script>

        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${CalSansFont.className} `}>
        <App children={children} />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
