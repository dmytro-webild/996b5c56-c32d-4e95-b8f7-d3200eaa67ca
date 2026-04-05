"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';

export default function RinoplastiPage() {
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
              { name: "Rinoplasti", id: "/rinoplasti" },
              { name: "Hakkımızda", id: "/#about" },
              { name: "İletişim", id: "/#contact" },
            ]}
            brandName="Dr. Turab İSMAYILOV"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogo
            logoText="Rinoplasti (Burun Estetiği)"
            description="Yüz hatlarınızla mükemmel uyum sağlayan, fonksiyonel nefes alma kalitesini artıran ve kişiselleştirilmiş estetik dokunuşlarla özgüveninizi tazeleyen rinoplasti operasyonları."
            buttons={[{ text: "Randevu Al", href: "/#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg?_wi=1"
            imageAlt="Rinoplasti sonrası estetik burun görünümü"
          />
        </div>

        <div id="details" data-section="services">
          <FeatureCardMedia
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Rinoplasti Hakkında"
            description="Burun estetiği sadece estetik bir görünüm değil, aynı zamanda sağlıklı nefes almayı da hedefler."
            features={[
              { id: "1", title: "Fonksiyonel Düzelme", description: "Burun tıkanıklığı ve septum deviasyonu gibi sorunların giderilmesi.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg?_wi=2", imageAlt: "Nefes almayı iyileştiren fonksiyonel cerrahi" },
              { id: "2", title: "Estetik Yenilenme", description: "Yüz hatlarınızla uyumlu, doğal ve zarif burun yapısı.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg?_wi=3", imageAlt: "Estetik rinoplasti sonuçları" }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Sıkça Sorulan Sorular"
            description="Rinoplasti süreci hakkında bilmeniz gerekenler."
            faqsAnimation="slide-up"
            faqs={[
              { id: "1", title: "Rinoplasti sonrası iyileşme ne kadar sürer?", content: "Genellikle ilk 1 hafta içerisinde günlük yaşama dönülebilir, tam iyileşme süreci ise birkaç ay sürebilir." },
              { id: "2", title: "Ağrılı bir işlem mi?", content: "Güncel teknikler ve anestezi yöntemleri sayesinde operasyon sonrası ağrılar oldukça minimize edilmiştir." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/front-view-female-physiotherapist-posing_23-2148780764.jpg"
            imageAlt="Rinoplasti öncesi ve sonrası konsültasyon"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="http://img.b2bpic.net/free-photo/waiting-room-hospital-lobby-with-reception-counter-desk-diverse-people-waiting-attend-checkup-visit-appointment-health-care-examination-emergency-area-medical-clinic_482257-46891.jpg?_wi=2"
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Hizmetler", items: [{ label: "Rinoplasti", href: "/rinoplasti" }, { label: "Liposuction", href: "/#services" }] },
              { title: "İletişim", items: [{ label: "İletişim", href: "/#contact" }] },
            ]}
            copyrightText="© 2025 Dr. Turab İsmayılov. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
