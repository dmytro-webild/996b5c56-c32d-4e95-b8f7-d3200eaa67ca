"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';

export default function LiposuctionPage() {
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
              { name: "Liposuction", id: "/liposuction" },
              { name: "İletişim", id: "/#contact" },
            ]}
            brandName="Dr. Turab İSMAYILOV"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogo
            logoText="Liposuction (Yağ Aldırma)"
            description="Vücudunuzun inatçı bölgelerindeki yağlardan kurtulun. Dr. Turab İsmayılov ile güvenli, estetik ve kalıcı vücut şekillendirme deneyimi."
            buttons={[{ text: "Randevu Al", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg?_wi=1"
            imageAlt="Liposuction sonrası estetik vücut görünümü"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardThree
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="three-columns-all-equal-width"
            title="Neden Liposuction?"
            description="Liposuction, diyet ve egzersize dirençli yağ bölgelerini şekillendirmek için uygulanan modern bir cerrahi yöntemdir."
            features={[
              { title: "Vücut Hatlarını Belirginleştirme", description: "Karın, basen ve kol bölgelerindeki istenmeyen yağlardan kurtulun.", imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-her-belly_23-2148780764.jpg?w=800&h=600", imageAlt: "Vücut şekillendirme uygulaması" },
              { title: "Minimum İyileşme Süresi", description: "Gelişmiş teknikler sayesinde hızlı bir iyileşme süreci sizi bekliyor.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg?w=800&h=600", imageAlt: "Liposuction iyileşme süreci" },
              { title: "Kalıcı Sonuçlar", description: "Doğru yaşam tarzı ile elde edilen estetik sonuçların kalıcılığını artırın.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg?w=800&h=600", imageAlt: "Kalıcı vücut estetiği" },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            title="Liposuction Hakkında Sıkça Sorulanlar"
            faqsAnimation="slide-up"
            textboxLayout="default"
            faqs={[
              { id: "1", title: "Liposuction kilo verme yöntemi midir?", content: "Hayır, liposuction bir zayıflama ameliyatı değil, vücut şekillendirme ve kontur düzeltme işlemidir." },
              { id: "2", title: "İşlem ne kadar sürer?", content: "Alınacak bölge sayısına ve miktara bağlı olarak genellikle 1-3 saat arası sürer." },
              { id: "3", title: "İz kalır mı?", content: "Çok küçük giriş delikleri açıldığı için işlem izleri neredeyse fark edilmeyecek kadar küçüktür ve zamanla soluklaşır." },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Detaylı Bilgi ve Randevu"
            description="Vücut şekillendirme için ücretsiz ön görüşme planlayın."
            inputs={[
              { name: "name", type: "text", placeholder: "Ad Soyad", required: true },
              { name: "email", type: "email", placeholder: "E-posta", required: true },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/waiting-room-hospital-lobby-with-reception-counter-desk-diverse-people-waiting-attend-checkup-visit-appointment-health-care-examination-emergency-area-medical-clinic_482257-46891.jpg?_wi=1"
            imageAlt="Estetik cerrahi kliniği ön görüşme"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="http://img.b2bpic.net/free-photo/waiting-room-hospital-lobby-with-reception-counter-desk-diverse-people-waiting-attend-checkup-visit-appointment-health-care-examination-emergency-area-medical-clinic_482257-46891.jpg?_wi=2"
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Hizmetler", items: [{ label: "Liposuction", href: "/liposuction" }] },
              { title: "İletişim", items: [{ label: "İletişim", href: "#contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
