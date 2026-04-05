"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';

export default function KarinGermePage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Anasayfa", id: "/" },
            { name: "Karın Germe", id: "/karin-germe" },
            { name: "Lipödem", id: "/lipodem" },
            { name: "İletişim", id: "/contact" },
          ]}
          brandName="Dr. Turab İSMAYILOV"
        />
        <HeroLogo
          logoText="Karın Germe (Abdominoplasti)"
          description="Daha düz, sıkı ve estetik bir karın bölgesi için cerrahi çözümler."
          imageSrc="http://img.b2bpic.net/free-photo/close-up-hand-using-medical-tool-patient_23-2149103624.jpg"
          buttons={[{ text: "Detaylı Bilgi", href: "#contact" }]}
        />
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-6">Karın Germe Nedir?</h2>
          <p className="mb-4">Karın germe operasyonu, karın bölgesindeki sarkan deri ve fazla yağ dokusunun uzaklaştırıldığı, karın kaslarının sıkılaştırıldığı kapsamlı bir estetik cerrahidir.</p>
        </div>
        <ContactSplitForm useInvertedBackground={false} title="Randevu Alın" description="Detaylı bilgi için iletişime geçin." inputs={[{name: 'name', type: 'text', placeholder: 'İsim', required: true}, {name: 'email', type: 'email', placeholder: 'E-posta', required: true}]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
      </ReactLenis>
    </ThemeProvider>
  );
}