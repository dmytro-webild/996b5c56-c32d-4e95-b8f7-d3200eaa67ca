"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';

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
          <h1 className="text-5xl font-bold">Yüz Germe (Face Lift)</h1>
          <img src="http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg?_wi=2" alt="Yüz Germe Estetiği" className="w-full rounded-2xl shadow-lg" />
          <p className="text-lg leading-relaxed">Zamanla cildin elastikiyetini kaybetmesi, yerçekimi ve çevresel faktörler yüz bölgesinde sarkmalara ve derin kırışıklıklara neden olur. Yüz germe operasyonu, daha taze, genç ve dinamik bir görünüme kavuşmak isteyen hastalarımız için sunduğumuz en etkili kalıcı çözümlerden biridir. Dr. Turab İsmayılov, yüz hatlarınızı değiştirmeden, sadece yaşlanma belirtilerini hafifleterek doğal sonuçlar elde etmeyi hedefler.</p>
          <p className="text-lg leading-relaxed">Cerrahi işlem, yüzün alt kısımlarındaki sarkmış dokuları, çene hattını ve boyun bölgesini yeniden şekillendirerek daha sıkı ve pürüzsüz bir form kazanmasını sağlar. Modern tekniklerimiz, izlerin saç çizgisi veya kulak arkası gibi gizli alanlarda kalmasını sağlayarak, hastalarımızın operasyon sonrası özgüvenlerini tazelemelerine yardımcı olur. Her hasta için yüz anatomisine uygun özelleştirilmiş bir planlama yapıyoruz.</p>
          <img src="http://img.b2bpic.net/free-photo/attractive-smiling-doctor-holding-hand-heart-dreamily-looking-camera-isolated-tender-touched-expression_574295-2653.jpg" alt="Güvenli Estetik" className="w-full rounded-2xl shadow-lg" />
          <p className="text-lg leading-relaxed">Operasyon sonrası iyileşme süreci titizlikle yönetilir. İlk haftalarda görülen hafif şişlik ve morluklar, kısa sürede yerini gençleşmiş ve canlanmış bir yüze bırakır. Dr. Turab İsmayılov yönetiminde gerçekleştirilen yüz germe operasyonları, yüz ifadenizi değiştirmeden sadece yılların getirdiği yorgunluk izlerini silmeyi amaçlar. Doğal ve estetik çözümlerimiz ile kendinizi her zamankinden daha iyi hissetmeye hazır olun.</p>
        </main>
        <ContactSplitForm
          useInvertedBackground={true}
          title="Yüz Germe İçin Görüşün"
          description="Genç ve dinamik bir görünüm için Dr. Turab İsmayılov ile iletişime geçin."
          inputs={[
            { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
            { name: "email", type: "email", placeholder: "E-posta Adresiniz", required: true },
          ]}
        />
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/waiting-room-hospital-lobby-with-reception-counter-desk-diverse-people-waiting-attend-checkup-visit-appointment-health-care-examination-emergency-area-medical-clinic_482257-46891.jpg?_wi=2"
          logoText="Dr. Turab İSMAYILOV"
          columns={[{ title: "Hizmetler", items: [{ label: "Anasayfa", href: "/" }, { label: "Lipödem", href: "/lipodem" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}