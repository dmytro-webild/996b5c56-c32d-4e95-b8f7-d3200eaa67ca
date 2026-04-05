"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import LegalSection from '@/components/legal/LegalSection';

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

        <div id="content" data-section="content">
          <LegalSection
            layout="page"
            title="Liposuction (Yağ Aldırma) Hakkında Her Şey"
            subtitle="Vücut Konturlarınızı Yeniden Şekillendirin"
            sections={[
              {
                heading: "Liposuction Nedir?",                content: { 
                  type: "paragraph", 
                  text: "Liposuction, vücudun belirli bölgelerindeki inatçı yağ birikintilerini uzaklaştırmak amacıyla uygulanan cerrahi bir işlemdir. Diyet ve egzersizle eritilemeyen yağ dokularını hedef alan bu yöntem, hastaların vücut hatlarını daha belirgin ve estetik hale getirmelerine yardımcı olur. Karın, kalça, basen, uyluk, kollar, çene altı ve boyun gibi pek çok bölgeye uygulanabilen liposuction, bir kilo verme yöntemi değil, bir vücut şekillendirme operasyonudur. Dr. Turab İsmayılov, hastasının vücut yapısını analiz ederek en doğal sonuçları elde etmeyi hedefler."
                }
              },
              {
                heading: "Operasyon Süreci ve Teknikler",                content: {
                  type: "list",                  items: [
                    "Tumescent liposuction: Bölgeye özel bir sıvı enjekte edilerek yağların kolayca parçalanması sağlanır.",                    "Vaser liposuction: Ultrasonik enerji kullanılarak yağ dokuları hedeflenir ve çevre dokulara zarar verilmez.",                    "Lazer destekli liposuction: Lazer enerjisiyle yağlar eritilir ve cilt sıkılaşması desteklenir."
                  ]
                }
              },
              {
                heading: "İyileşme Süreci",                content: {
                  type: "paragraph",                  text: "Liposuction sonrası iyileşme süreci genellikle oldukça konforludur. Operasyon bölgesinde hafif şişlik veya morluklar olması normaldir ve birkaç hafta içinde kendiliğinden geçer. Hastalarımızın özel korse giymesi, dokuların yeni formuna alışması ve ödemin hızla atılması açısından büyük önem taşır. Çoğu hasta, operasyondan birkaç gün sonra günlük aktivitelerine dönebilirken, ağır fiziksel aktiviteler için birkaç hafta beklenmesi önerilir."
                }
              }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Liposuction İçin Randevu Alın"
            description="Sizin için en uygun teknik ve sonuçlar için uzman görüşü alın."
            inputs={[
              { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
              { name: "email", type: "email", placeholder: "E-posta Adresiniz", required: true },
              { name: "phone", type: "tel", placeholder: "Telefon Numaranız", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Sormak istediklerinizi yazın...", rows: 4 }}
            imageSrc="http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg?_wi=1"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="http://img.b2bpic.net/free-photo/waiting-room-hospital-lobby-with-reception-counter-desk-diverse-people-waiting-attend-checkup-visit-appointment-health-care-examination-emergency-area-medical-clinic_482257-46891.jpg?_wi=2"
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Sayfalar", items: [{ label: "Anasayfa", href: "/" }, { label: "Liposuction", href: "/liposuction" }] },
              { title: "İletişim", items: [{ label: "İletişim", href: "/#contact" }] },
            ]}
            copyrightText="© 2025 Dr. Turab İsmayılov. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
