"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LipodemPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple navItems={[{name: "Anasayfa", id: "/"}, {name: "Karın Germe", id: "/karin-germe"}, {name: "Liposuction", id: "/liposuction"}, {name: "Rinoplasti", id: "/rinoplasti"}, {name: "Yüz Germe", id: "/yuz-germe"}, {name: "Lipödem", id: "/lipodem"}]} />
        </div>
        <div id="content" className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-8">Lipödem Tedavisi</h1>
            <div className="prose max-w-none">
                <p>Lipödem, genellikle bacaklarda ve bazen kollarda orantısız yağ birikimi ile karakterize, kronik ve ilerleyici bir durumdur. Dr. Turab İsmayılov, lipödem tedavisinde hastanın yaşam kalitesini artırmayı hedefleyen uzman bir yaklaşım benimsemektedir.</p>
            </div>
        </div>
        <div id="contact" data-section="contact">
          <ContactSplitForm title="Bilgi ve Randevu" description="Lipödem tedavisi hakkında uzman görüşü almak için iletişime geçin." inputs={[{ name: "name", type: "text", placeholder: "Adınız" }, { name: "email", type: "email", placeholder: "E-posta" }]} useInvertedBackground={false} videoSrc="https://www.w3schools.com/html/mov_bbb.mp4?_wi=3" />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[{ title: "Sayfalar", items: [{ label: "Anasayfa", href: "/" }] }]} videoSrc="https://www.w3schools.com/html/mov_bbb.mp4?_wi=4" />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}