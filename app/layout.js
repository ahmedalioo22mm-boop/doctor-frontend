/** @format */

import { Geist_Mono, Roboto } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Appointment Booking",
  description: "Find and book your next doctor's appointment with ease.",
};
export default function RootLayout({ children }) {
  return (

      <html lang="en">
        <body className={roboto.className}>
         <AuthProvider>
          {children}
        </AuthProvider>
        </body>
      </html>

  );
}
