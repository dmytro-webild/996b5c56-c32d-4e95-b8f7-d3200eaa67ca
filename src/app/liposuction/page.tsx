"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { getVisualEditScript } from "@/utils/visual-edit-script";

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
          <HeroOverlay
            title="Liposuction (Yağ Alma) Operasyonu"
            description="Dr. Turab İsmayılov ile vücut hatlarınızı yeniden tanımlayın. Liposuction, diyet ve egzersize dirençli bölgesel yağların profesyonelce uzaklaştırıldığı etkili bir vücut şekillendirme işlemidir. Modern tekniklerle, daha pürüzsüz ve estetik vücut konturlarına kavuşmanızı sağlıyoruz."
            imageSrc="http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg?_wi=1"
            imageAlt="Liposuction operasyonu"
          />
        </div>

        <div id="content" data-section="content">
            <FeatureCardOne 
                title="Neden Liposuction Tercih Etmelisiniz?"
                description="Liposuction, kilo verme yöntemi değil, vücut şekillendirme yöntemidir. Dr. İsmayılov, her hastanın vücut yapısını detaylı analiz ederek en doğal ve güvenli sonucu hedefler."
                animationType="slide-up"
                gridVariant="three-columns-all-equal-width"
                textboxLayout="split"
                useInvertedBackground={true}
                features={[
                    { title: "Bölgesel İncelme", description: "Karın, basen, bel ve gıdı gibi dirençli yağ bölgelerinde etkili sonuçlar.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-physiotherapist-posing_23-2148780764.jpg" },
                    { title: "Kalıcı Kontür", description: "Uzman dokunuşlarla vücudunuzun doğal kıvrımlarının ortaya çıkarılması.", imageSrc: "http://img.b2bpic.net/free-photo/students-learning-cafeteria_23-2147679038.jpg" },
                    { title: "Güvenli Süreç", description: "Deneyimli cerrahi yaklaşım ile minimum iyileşme süresi ve maksimum güvenlik.", imageSrc: "http://img.b2bpic.net/close-up-hand-using-medical-tool-patient_23-2149103624.jpg" }
                ]}
            />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Sıkça Sorulan Sorular"
            description="Liposuction hakkında en çok merak edilenler."
            faqs={[
              { id: "1", title: "Liposuction bir kilo verme yöntemi midir?", content: "Hayır, liposuction zayıflama ameliyatı değil, bölgesel yağları şekillendirme işlemidir." },
              { id: "2", title: "İyileşme süreci nasıldır?", content: "Genellikle birkaç gün içinde normal yaşama dönülebilir, korselerin 3-4 hafta kullanılması önerilir." },
              { id: "3", title: "İz kalır mı?", content: "Liposuction kanülleri için açılan giriş delikleri çok küçük olduğu için fark edilmeyecek kadar küçük izler kalır." },
            ]}
            faqsAnimation="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401854412-kfbas95n.png?_wi=2"
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Hizmetler", items: [{ label: "Burun Estetiği", href: "/#services" }, { label: "Liposuction", href: "/liposuction" }, { label: "Karın Germe", href: "/#services" }, { label: "Yüz Germe", href: "/yuz-germe" }, { label: "Lipödem", href: "/lipodem" }] },
              { title: "İletişim", items: [{ label: "Bize Ulaşın", href: "/#contact" }, { label: "Randevu", href: "/#contact" }] },
            ]}
            copyrightText="© 2025 Dr. Turab İsmayılov. Tüm hakları saklıdır."
          />
        </div>
        <script dangerouslySetInnerHTML={{ __html: `${getVisualEditScript()}` }} />
      </ReactLenis>
    </ThemeProvider>
  );
}
