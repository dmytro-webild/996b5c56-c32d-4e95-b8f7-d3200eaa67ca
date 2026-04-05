"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import HeroLogo from '@/components/sections/hero/HeroLogo';

export default function YuzGermePage() {
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
              { name: "İletişim", id: "/#contact" },
            ]}
            brandName="Dr. Turab İSMAYILOV"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogo
            logoText="Yüz Germe (Face Lift)"
            description="Yaşlanma belirtilerini geride bırakın. Yüz germe ameliyatı ile daha genç, dinamik ve doğal bir görünüm elde edin."
            buttons={[
              { text: "Randevu Al", href: "#contact" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/beautiful-woman-after-face-lift-procedure.jpg"
          />
        </div>

        <div id="procedure-details" data-section="procedure-details" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Yüz Germe Nedir?</h2>
            <p className="text-lg mb-4">Yüz germe (ritidektomi), yüz ve boyun bölgesindeki sarkmış deri ve derin kırışıklıkları gidermek amacıyla yapılan cerrahi bir işlemdir. Bu işlem, yüzün alt kısımlarındaki dokuları sıkılaştırarak daha genç bir ifade kazandırır.</p>
            <h3 className="text-2xl font-semibold mb-4">Kimler İçin Uygundur?</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Yüz ve boyun bölgesinde sarkma yaşayanlar</li>
              <li>Derin nazolabial çizgileri olanlar</li>
              <li>Çene hattında belirsizleşme gözlemleyenler</li>
            </ul>
          </div>
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Konsültasyon Planlayın"
            description="Yüz germe işleminiz için uzman görüşü alın."
            inputs={[
              { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
              { name: "email", type: "email", placeholder: "E-posta Adresiniz", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Detaylı bilgi almak istiyorum..." }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Hizmetler", items: [{ label: "Burun Estetiği", href: "/#services" }, { label: "Yüz Germe", href: "/yuz-germe" }] },
              { title: "İletişim", items: [{ label: "Randevu", href: "#contact" }] },
            ]}
            copyrightText="© 2025 Dr. Turab İsmayılov. Tüm hakları saklıdır."
            videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}