import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { ModeToggle } from "@/components/ToggleTheme";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Next-Shad Project Starter",
  description: "A Next.js starter with TypeScript, Tailwind CSS, and Shadcn.",
};

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("antialiased", inter.className)}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
