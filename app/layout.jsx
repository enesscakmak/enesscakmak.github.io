import "@/styles/globals.css"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Enes Çakmak — Backend & Full-Stack Developer",
  description: "Computer Engineering student building backend services with .NET, PostgreSQL, and REST APIs, and full-stack apps with React and Next.js.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("antialiased", inter.className)}>{children}</body>
    </html>
  )
}

