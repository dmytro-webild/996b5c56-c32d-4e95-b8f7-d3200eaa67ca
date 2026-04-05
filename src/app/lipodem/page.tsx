"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import { Activity } from "lucide-react";

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
        <NavbarStyleApple
          navItems={[
            { name: "Anasayfa", id: "/" },
            { name: "Yüz Germe", id: "/yuz-germe" },
            { name: "Lipödem", id: "/lipodem" },
            { name: "İletişim", id: "/#contact" },
          ]}
          brandName="Dr. Turab İSMAYILOV"
        />
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold">Lipödem Tedavisi</h1>
          <img src="http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg?_wi=2" alt="Lipödem Tedavisi" className="w-full rounded-2xl shadow-lg" />
          <p className="text-lg leading-relaxed">Lipödem, genellikle bacaklarda ve bazen kollarda orantısız yağ birikimi ile karakterize, kronik ve ilerleyici bir yağ dokusu hastalığıdır. Genellikle sadece kadınları etkileyen bu durum, diyet ve egzersize dirençli yağ dokularının ağrı, ödem ve hassasiyetle birlikte görülmesiyle kendini belli eder. Dr. Turab İsmayılov olarak, hastalarımızın yaşam kalitesini artırmak için modern cerrahi yöntemlerle bu süreci yönetiyoruz.</p>
          <p className="text-lg leading-relaxed">Hastalığın erken evrelerinde konservatif yöntemler önerilse de, ilerlemiş lipödem vakalarında cerrahi müdahale kaçınılmaz hale gelebilmektedir. Liposuction tekniklerimiz, lenfatik sisteme zarar vermeden, bölgedeki patolojik yağ dokularını hedef alarak nazikçe uzaklaştırır. Bu işlem sadece estetik bir görünüm sağlamakla kalmaz, aynı zamanda hastaların yaşadığı ağır bacak hissi, ağrı ve hareket kısıtlılığını önemli ölçüde azaltır.</p>
          <img src="http://img.b2bpic.net/free-photo/front-view-female-physiotherapist-posing_23-2148780764.jpg?_wi=1" alt="Uzman Görüşü" className="w-full rounded-2xl shadow-lg" />
          <p className="text-lg leading-relaxed">Cerrahi süreçte en öncelikli hedefimiz, hastalarımızın uzun vadeli sağlığıdır. Ameliyat öncesi detaylı değerlendirme, doğru evreleme ve kişiye özel planlama ile en güvenli ve etkili sonuçlara ulaşmayı hedefliyoruz. İyileşme süreci, dokuların kendini yenilemesi ve ödemlerin gerilemesi ile birkaç ay süren bir takip programını içerir. Dr. Turab İsmayılov ile bu zorlu süreci konforlu bir değişime dönüştürebilirsiniz.</p>
        </main>
        <ContactSplitForm
          useInvertedBackground={true}
          title="Lipödem Tedavisi İçin Danışın"
          description="Uzman görüşü almak ve randevu oluşturmak için bize ulaşın."
          inputs={[
            { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
            { name: "email", type: "email", placeholder: "E-posta Adresiniz", required: true },
          ]}
        />
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/waiting-room-hospital-lobby-with-reception-counter-desk-diverse-people-waiting-attend-checkup-visit-appointment-health-care-examination-emergency-area-medical-clinic_482257-46891.jpg?_wi=2"
          logoText="Dr. Turab İSMAYILOV"
          columns={[{ title: "Hizmetler", items: [{ label: "Anasayfa", href: "/" }, { label: "Yüz Germe", href: "/yuz-germe" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}