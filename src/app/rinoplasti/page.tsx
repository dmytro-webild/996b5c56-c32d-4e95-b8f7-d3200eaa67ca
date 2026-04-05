"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

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
              { name: "Burun Estetiği", id: "/rinoplasti" },
              { name: "Hakkımızda", id: "/#about" },
              { name: "İletişim", id: "/#contact" },
            ]}
            brandName="Dr. Turab İSMAYILOV"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogo
            logoText="Burun Estetiği (Rinoplasti)"
            description="Dr. Turab İsmayılov ile yüzünüzle tam uyumlu, doğal ve fonksiyonel burun estetiği. Modern cerrahi tekniklerle estetik beklentilerinizi karşılarken, nefes alma kalitenizi artırıyoruz. Kişiye özel planlama ile kendinize olan güveninizi tazeleyin."
            buttons={[{ text: "Randevu Al", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg"
            imageAlt="Burun Estetiği"
          />
        </div>

        <div id="content" data-section="content">
            <div className="max-w-4xl mx-auto py-20 px-6">
                <h2 className="text-3xl font-bold mb-6">Neden Dr. Turab İsmayılov ile Rinoplasti?</h2>
                <p className="text-lg mb-4">Rinoplasti, sadece burun şeklini değil, aynı zamanda yüzün genel dengesini ve estetik profilini değiştiren sanat ve bilimin birleştiği bir süreçtir. Dr. Turab İsmayılov, her hastasının yüz anatomisini derinlemesine analiz ederek, en doğal sonucu hedefler. Cerrahi tecrübesi ve modern estetik anlayışı ile burun estetiği ameliyatlarında kişiye özel çözümler üretir.</p>
                <p className="text-lg mb-4">Hastalarımızın büyük bir kısmı, sadece estetik görünüm için değil, aynı zamanda nefes alma güçlüğü gibi fonksiyonel sorunların çözümü için de başvurmaktadır. Dr. İsmayılov, rinoplasti operasyonlarında iç yapıyı (septum ve burun etleri) koruyarak veya düzelterek, hastalarına operasyon sonrasında çok daha rahat bir nefes alma deneyimi sunmaktadır.</p>
                <p className="text-lg mb-4">Modern rinoplasti teknikleri (piezo cerrahi, açık veya kapalı rinoplasti) sayesinde dokulara minimal düzeyde travma verilerek, morarma ve şişlik süreçleri mümkün olan en aza indirilmektedir. Operasyonun her aşamasında hasta konforunu ve güvenliğini ön planda tutan kliniğimizde, ameliyat sonrası takip süreci de profesyonel bir titizlikle yönetilmektedir.</p>
            </div>
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Ücretsiz Konsültasyon"
            description="Burun estetiği hakkında aklınıza takılanları sormak ve size özel planlama yapmak için bize ulaşın."
            inputs={[
              { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
              { name: "phone", type: "tel", placeholder: "Telefon Numaranız", required: true },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Hizmetler", items: [{ label: "Burun Estetiği", href: "/rinoplasti" }, { label: "Liposuction", href: "/#services" }] },
              { title: "İletişim", items: [{ label: "Randevu", href: "#contact" }] },
            ]}
            copyrightText="© 2025 Dr. Turab İsmayılov. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
