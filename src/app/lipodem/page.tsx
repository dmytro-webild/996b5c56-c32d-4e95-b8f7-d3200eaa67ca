"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LipodemPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Anasayfa", id: "/" },
              { name: "Hizmetler", id: "/#services" },
              { name: "Yüz Germe", id: "/yuz-germe" },
              { name: "Lipödem", id: "/lipodem" },
              { name: "Liposuction", id: "/liposuction" },
              { name: "İletişim", id: "/contact" },
            ]}
            brandName="Dr. Turab İSMAYILOV"
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Lipödem Tedavisi İçin Randevu"
            description="Lipödem süreciniz ve tedavi seçeneklerimiz hakkında bilgi alın."
            inputs={[
              { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
              { name: "email", type: "email", placeholder: "E-posta Adresiniz", required: true },
            ]}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Dr. Turab İSMAYILOV"
            videoSrc="http://img.b2bpic.net/video/liposuction.mp4?_wi=1"
            columns={[
              { title: "Hizmetler", items: [{ label: "Lipödem", href: "#" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}