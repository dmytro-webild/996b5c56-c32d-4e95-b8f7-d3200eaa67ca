"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LiposuctionPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[{ name: "Anasayfa", id: "/" }, { name: "Burun Estetiği", id: "rinoplasti" }, { name: "Liposuction", id: "liposuction" }, { name: "İletişim", id: "#contact" }]}
          brandName="Dr. Turab İSMAYILOV"
        />
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Liposuction</h1>
          <p className="text-xl text-gray-600 mb-8">Vücudun belirli bölgelerindeki inatçı yağ birikintilerini kalıcı olarak uzaklaştıran, vücut kontürünüzü yeniden şekillendiren modern bir yöntemdir.</p>
          <h2 className="text-3xl font-semibold mb-4">Kimler İçin Uygundur?</h2>
          <p className="mb-6">Kilo vermesine rağmen belirli bölgelerde (karın, basen, çene altı) bölgesel yağlanmadan şikayet eden sağlıklı bireyler için idealdir.</p>
          <h2 className="text-3xl font-semibold mb-4">Recovery (İyileşme)</h2>
          <p className="mb-8">İşlem sonrası birkaç gün dinlenme önerilir. Ödemlerin inmesi 4-6 hafta sürebilir, ancak sonuçlar kısa sürede fark edilir.</p>
        </div>
        <div id="contact"><ContactSplitForm useInvertedBackground={false} title="Liposuction Hakkında Bilgi Alın" description="Vücut şekillendirme için uzman görüşü alın." inputs={[{ name: "name", type: "text", placeholder: "Adınız", required: true }, { name: "email", type: "email", placeholder: "E-posta", required: true }]} /></div>
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} videoSrc="https://www.w3schools.com/html/mov_bbb.mp4?_wi=3" />
      </ReactLenis>
    </ThemeProvider>
  );
}