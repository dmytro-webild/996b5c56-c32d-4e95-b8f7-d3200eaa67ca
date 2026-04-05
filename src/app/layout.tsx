import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dr. Turab İsmayılov | Estetik ve Plastik Cerrahi Uzmanı',
  description: 'Dr. Turab İsmayılov, Rinoplasti, Liposuction, Karın Germe, Lipödem ve Yüz Germe işlemlerinde uzman estetik cerrahi hizmetleri sunar.',
  keywords: ["estetik cerrah, plastik cerrahi, rinoplasti, liposuction, karın germe, yüz germe, turab ismayilov, burun estetiği"],
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
