"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function KarinGermePage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={[{name: "Anasayfa", id: "/"}, {name: "Karın Germe", id: "#content"}]} brandName="Dr. Turab İSMAYILOV" />
        <div id="content" className="py-24 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Karın Germe (Abdominoplasti) Uzmanlığı</h1>
          <img src="http://img.b2bpic.net/free-photo/close-up-hand-using-medical-tool-patient_23-2149103624.jpg" alt="Karın Germe Operasyonu" className="rounded-xl shadow-lg mb-8" />
          <p className="text-lg mb-6 leading-relaxed">
            Karın bölgesi, yaşlanma, hamilelik veya ani kilo değişimleri nedeniyle esnekliğini en çok kaybeden bölgelerdendir. Dr. Turab İsmayılov, abdominoplasti (karın germe) ameliyatlarında dokuların daha sıkı, düz ve estetik görünmesini sağlayarak vücudun merkez bölgesini gençleştirir.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Cerrahi yaklaşımımızda, sadece deri sarkmalarını gidermekle kalmıyor, aynı zamanda karın kaslarını onararak daha sıkı ve doğal bir yapı oluşturuyoruz. Hastalarımın güvenliğini ve estetik tatminini ön planda tutan Dr. Turab İsmayılov, her bir vakada özelleştirilmiş planlama ile kişiye özel başarı sağlamaktadır.
          </p>
          <img src="http://img.b2bpic.net/free-photo/woman-cosmetologist-making-beauty-procedures_1303-26019.jpg" alt="Estetik Cerrahi Süreci" className="rounded-xl shadow-lg mb-8" />
          <p className="text-lg leading-relaxed">
            Daha düz ve sıkı bir karın görünümü için uyguladığımız teknikler, modern cerrahi standartlarına dayanmaktadır. İyileşme dönemi boyunca size özel takip sistemimizle sürecin her aşamasında destekçiniz oluyoruz. Kendinizi çok daha iyi hissetmek ve estetik bir görünüme ulaşmak için uzman görüşü almak üzere randevunuzu hemen oluşturun.
          </p>
        </div>
        <ContactSplitForm title="Ücretsiz Muayene Randevusu" description="Karın germe operasyonu ve Dr. Turab İsmayılov'un uzmanlık alanları hakkında bilgi alın." inputs={[{name: "name", type: "text", placeholder: "İsim"}, {name: "phone", type: "tel", placeholder: "Telefon"}]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}
