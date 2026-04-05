"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';

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
              { name: "Hakkımızda", id: "/#about" },
              { name: "İletişim", id: "/#contact" },
            ]}
            brandName="Dr. Turab İSMAYILOV"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogo
            logoText="Lipödem Tedavisi"
            description="Lipödem, genellikle bacaklarda ve bazen kollarda orantısız yağ birikimi ile karakterize, kronik ve ilerleyici bir hastalıktır. Doğru teşhis ve uzman cerrahi müdahale ile ağrılarınızı hafifletiyor ve yaşam kalitenizi artırıyoruz."
            buttons={[{ text: "Randevu Al", href: "/#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/medical-specialist-examining-patient_107420-74008.jpg"
            imageAlt="Lipödem muayenesi"
          />
        </div>

        <div id="content" data-section="content">
            <div className="max-w-4xl mx-auto py-20 px-6">
                <h2 className="text-4xl font-bold mb-8">Lipödem Nedir ve Nasıl Tedavi Edilir?</h2>
                <p className="mb-6">Lipödem, vücudun belirli bölgelerinde (özellikle kalça, basen ve bacaklarda) anormal yağ dokusu birikimiyle ortaya çıkan bir hastalıktır. Genellikle kadınlarda görülen bu durum, diyet veya egzersizle kolayca geçmeyen, ağrılı bir yapıya sahiptir. Lipödemli hastalar sıklıkla bacaklarda ağırlık hissi, kolay morarma ve dokunmaya karşı hassasiyetten şikayet ederler.</p>
                <p className="mb-6">Erken evrede teşhis, hastalığın ilerlemesini durdurmak için hayati önem taşır. Uzman cerrahımız Dr. Turab İsmayılov, hastanın durumuna uygun özel cerrahi yöntemlerle bu yağ dokularının uzaklaştırılmasını sağlar. Bu sayede sadece estetik bir iyileşme değil, aynı zamanda kronik ağrıların azalması ve hastanın hareket kabiliyetinin geri kazanılması hedeflenir.</p>
                <p className="mb-6">Lipödem tedavisi kişiye özel planlanmalıdır. Lenfatik sistemin korunması ve dokunun sağlıklı bir şekilde şekillendirilmesi cerrahi uzmanlık gerektirir. Kliniğimizde, modern cerrahi teknikler ve hastaya odaklı bir yaklaşım ile lipödemle mücadele eden hastalarımıza destek oluyoruz.</p>
            </div>
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Lipödem Tedavisi İçin Bize Ulaşın"
            description="Lipödem şikayetleriniz hakkında detaylı bilgi almak ve muayene randevusu oluşturmak için formu doldurabilirsiniz."
            inputs={[
              { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
              { name: "email", type: "email", placeholder: "E-posta", required: true },
              { name: "phone", type: "tel", placeholder: "Telefon", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Şikayetlerinizi kısaca belirtin..." }}
            imageSrc="http://img.b2bpic.net/free-photo/doctor-working-with-patient-hospital_23-2149103624.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Hizmetler", items: [{ label: "Lipödem", href: "/lipodem" }, { label: "Liposuction", href: "/liposuction" }] },
              { title: "İletişim", items: [{ label: "İletişim", href: "/#contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
