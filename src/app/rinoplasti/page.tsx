"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function RinoplastiPage() {
  return (
    <ThemeProvider defaultButtonVariant="bounce-effect" defaultTextAnimation="reveal-blur" borderRadius="pill" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[{name: "Anasayfa", id: "/"}, {name: "Karın Germe", id: "/karin-germe"}, {name: "Liposuction", id: "/liposuction"}, {name: "Rinoplasti", id: "/rinoplasti"}, {name: "Yüz Germe", id: "/yuz-germe"}, {name: "Lipödem", id: "/lipodem"}]} 
          />
        </div>
        <div id="content" data-section="content">
            <div className="max-w-4xl mx-auto py-20 px-6">
                <h2 className="text-3xl font-bold mb-6">Rinoplasti</h2>
            </div>
        </div>
        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Ücretsiz Konsültasyon"
            description="Burun estetiği hakkında aklınıza takılanları sormak için bize ulaşın."
            inputs={[{ name: "name", type: "text", placeholder: "Adınız" }, { name: "phone", type: "tel", placeholder: "Telefon" }]}
            videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Dr. Turab İSMAYILOV"
            columns={[{ title: "Hizmetler", items: [{ label: "Burun Estetiği", href: "/rinoplasti" }] }]}
            videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}