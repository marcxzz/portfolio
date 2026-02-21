import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Marco Angioni | Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}