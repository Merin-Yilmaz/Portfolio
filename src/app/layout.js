import { Inter } from "next/font/google";
import "../../stylesheets/output.css";
import background from '../../public/background.png'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          padding:0,
          margin: 0
        }}>{children}</body>
    </html>
  );
}
