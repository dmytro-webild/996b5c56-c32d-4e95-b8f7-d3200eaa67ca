"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';

export default function LipodemPage() {
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
          logoText="Lipödem Tedavisi"
          description="Bacaklarda ve vücutta düzensiz yağ birikimi ile karakterize lipödem için uzman cerrahi çözümler."
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg?_wi=2"
          buttons={[{ text: "Detaylı Bilgi", href: "#contact" }]}
        />
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-6">Lipödem Tedavisi Hakkında</h2>
          <p className="mb-4">Lipödem, genellikle alt ekstremiteleri etkileyen ve ağrılı bir yapıya sahip olabilen yağ dağılım bozukluğudur. Tedavisi genellikle özel liposuction teknikleri ile gerçekleştirilir.</p>
        </div>
        <ContactSplitForm useInvertedBackground={false} title="Randevu Alın" description="Lipödem tedavisi hakkında uzman görüşü alın." inputs={[{name: 'name', type: 'text', placeholder: 'İsim', required: true}, {name: 'email', type: 'email', placeholder: 'E-posta', required: true}]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} videoSrc="https://www.w3schools.com/html/mov_bbb.mp4?_wi=2" />
      </ReactLenis>
    </ThemeProvider>
  );
}