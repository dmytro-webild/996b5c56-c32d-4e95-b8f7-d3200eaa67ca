"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function RinoplastiPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[{ name: "Anasayfa", id: "/" }, { name: "Burun Estetiği", id: "rinoplasti" }, { name: "Liposuction", id: "liposuction" }, { name: "İletişim", id: "#contact" }]}
          brandName="Dr. Turab İSMAYILOV"
        />
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Burun Estetiği (Rinoplasti)</h1>
          <p className="text-xl text-gray-600 mb-8">Rinoplasti, sadece estetik bir kaygı değil, aynı zamanda nefes alma fonksiyonlarınızı iyileştiren kritik bir cerrahi süreçtir. Yüz hatlarınızla %100 uyumlu doğal sonuçlar hedefliyoruz.</p>
          <h2 className="text-3xl font-semibold mb-4">Prosedür Detayları</h2>
          <p className="mb-6">Operasyon genel anestezi altında yapılır ve ortalama 2-3 saat sürer. İyileşme sürecinde ilk hafta oldukça kritiktir.</p>
          <h2 className="text-3xl font-semibold mb-4">Avantajlar</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Daha özgüvenli bir yüz ifadesi</li>
            <li>Fonksiyonel nefes iyileşmesi</li>
            <li>Kişiye özel planlama</li>
          </ul>
        </div>
        <div id="contact"><ContactSplitForm useInvertedBackground={false} title="Rinoplasti Hakkında Bilgi Alın" description="Size özel analizimiz için hemen iletişime geçin." inputs={[{ name: "name", type: "text", placeholder: "Adınız", required: true }, { name: "email", type: "email", placeholder: "E-posta", required: true }]} /></div>
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} videoSrc="https://www.w3schools.com/html/mov_bbb.mp4?_wi=4" />
      </ReactLenis>
    </ThemeProvider>
  );
}