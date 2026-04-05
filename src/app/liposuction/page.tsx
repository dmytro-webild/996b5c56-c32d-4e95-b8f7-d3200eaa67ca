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
        <div id="nav" data-section="nav">
          <NavbarStyleApple navItems={[{name: "Anasayfa", id: "/"}, {name: "Karın Germe", id: "/karin-germe"}, {name: "Liposuction", id: "/liposuction"}, {name: "Rinoplasti", id: "/rinoplasti"}, {name: "Yüz Germe", id: "/yuz-germe"}, {name: "Lipödem", id: "/lipodem"}]} />
        </div>
        <div id="content" className="py-24 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Liposuction ile İdeal Vücut Hatlarına Kavuşun</h1>
          <p className="text-lg mb-6 leading-relaxed">
            Dr. Turab İsmayılov, liposuction ameliyatlarında modern teknolojiyi ve ileri cerrahi teknikleri birleştirerek hastalarına güvenli ve etkili çözümler sunmaktadır.
          </p>
        </div>
        <div id="contact" data-section="contact">
          <ContactSplitForm title="Ücretsiz Muayene Randevusu" description="Liposuction operasyonu hakkında detaylı bilgi almak için bizimle iletişime geçin." inputs={[{name: "name", type: "text", placeholder: "İsim"}, {name: "phone", type: "tel", placeholder: "Telefon"}]} useInvertedBackground={false} videoSrc="https://www.w3schools.com/html/mov_bbb.mp4?_wi=5" />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} videoSrc="https://www.w3schools.com/html/mov_bbb.mp4?_wi=6" />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}