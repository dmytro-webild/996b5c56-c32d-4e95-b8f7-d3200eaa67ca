"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { getVisualEditScript } from "@/utils/visual-edit-script";

export default function KarinGermePage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple navItems={[{name: "Anasayfa", id: "/"}, {name: "Karın Germe", id: "#content"}, {name: "Liposuction", id: "/liposuction"}, {name: "Rinoplasti", id: "/rinoplasti"}, {name: "Yüz Germe", id: "/yuz-germe"}, {name: "Lipödem", id: "/lipodem"}]} />
        </div>
        <div id="content" className="py-24 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Karın Germe (Abdominoplasti) Uzmanlığı</h1>
          <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1776167077817-364n9nl6.png" alt="Karın Germe Operasyonu" className="rounded-xl shadow-lg mb-8" />
          <p className="text-lg mb-6 leading-relaxed">
            Karın bölgesi, yaşlanma, hamilelik veya ani kilo değişimleri nedeniyle esnekliğini en çok kaybeden bölgelerdendir. Dr. Turab İsmayılov, abdominoplasti (karın germe) ameliyatlarında dokuların daha sıkı, düz ve estetik görünmesini sağlayarak vücudun merkez bölgesini gençleştirir.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Cerrahi yaklaşımımızda, sadece deri sarkmalarını gidermekle kalmıyor, aynı zamanda karın kaslarını onararak daha sıkı ve doğal bir yapı oluşturuyoruz. Hastalarımın güvenliğini ve estetik tatminini ön planda tutan Dr. Turab İsmayılov, her bir vakada özelleştirilmiş planlama ile kişiye özel başarı sağlamaktadır.
          </p>
        </div>
        <div id="contact" data-section="contact">
          <ContactSplitForm title="Ücretsiz Muayene Randevusu" description="Karın germe operasyonu hakkında bilgi alın." inputs={[{name: "name", type: "text", placeholder: "İsim"}, {name: "phone", type: "tel", placeholder: "Telefon"}]} useInvertedBackground={false} imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401854412-kfbas95n.png" />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1776167077817-364n9nl6.png" />
        </div>
        <script dangerouslySetInnerHTML={{ __html: `${getVisualEditScript()}` }} />
      </ReactLenis>
    </ThemeProvider>
  );
}
