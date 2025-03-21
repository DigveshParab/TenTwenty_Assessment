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
      <body>{children}</body>
    </html>
  );
}



export default RootLayout;