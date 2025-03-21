import { Work_Sans } from "next/font/google";  // already present in tailwind
import "./globals.css";


// setting up the work_sans font
const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"], 
    variable: "--font-work-sans",
  });



const  RootLayout = ({ children })=> {
  return (
    <html lang="en" className={workSans.variable}>
       <head>
            {/* icon */}
            <link rel="icon" href="/favicon.png" />
            {/* title */}
            title>FarmFresh - by TenTwenty</title>
            {/* descr */}
            <meta name="description" content="TenTwenty - High-quality products for your everyday needs. Shop now for the best deals!" />
            {/* social */}
            <meta property="og:title" content="TenTwenty" />
            <meta property="og:description" content="Premium quality products at the best prices." />
      </head>
      <body>{children}</body>
    </html>
  );
}



export default RootLayout;
