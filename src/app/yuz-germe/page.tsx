"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import LegalSection from '@/components/legal/LegalSection';
import { getVisualEditScript } from "@/utils/visual-edit-script";

export default function YuzGermePage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarStyleApple
           navItems={[
              { name: "Anasayfa", id: "/" },
              { name: "Yüz Germe", id: "/yuz-germe" },
           ]}
           brandName="Dr. Turab İSMAYILOV"
        />
        <LegalSection
          layout="page"
          title="Yüz Germe (Face Lift)"
          subtitle="Daha Dinamik, Genç ve Doğal Bir Görünüm"
          sections={[
            { heading: "Yüz Germe Operasyonu", content: [{ type: "paragraph", text: "Yüz germe ameliyatı, yaşlanmanın yüz ve boyun bölgesinde neden olduğu sarkmaları, derin çizgileri ve yorgun ifadeyi düzeltmek için yapılan kapsamlı bir gençleştirme operasyonudur. Dr. Turab İsmayılov tarafından uygulanan modern teknikler, sadece cildi germekle kalmaz, aynı zamanda alt dokuları da askıya alarak daha uzun vadeli ve doğal bir sonuç sağlar. Bu işlem ile yüz hatlarınız yeniden belirginleştirilir." }] },
            { heading: "Neden Yüz Germe?", content: [{ type: "paragraph", text: "Zamanla yerçekimi, güneş hasarı ve genetik faktörler yüzümüzün daha sarkık ve yorgun görünmesine neden olur. Yüz germe cerrahisi, bu süreci geri çevirerek hastanın daha genç ama aynı zamanda kendisi gibi görünmesini sağlar. Dr. Turab İsmayılov, her hastanın doğal güzelliğini koruyarak yüz hacmini optimize etmeyi prensip edinmiştir." }, { type: "list", items: ["Derin çizgilerin giderilmesi", "Çene hattının belirginleşmesi", "Boyun sarkmalarının toparlanması", "Daha canlı ve ferah bir ifade"] }] },
            { heading: "Sonuçlar", content: [{ type: "paragraph", text: "Yüz germe ameliyatının sonuçları hastadan hastaya değişmekle birlikte, iyileşme tamamlandığında yüzdeki tazelik ve genç görünüm uzun yıllar korunur. Operasyon, diğer estetik işlemlerle (göz kapağı estetiği, yağ dolgusu vb.) kombine edilebilir. Süreç, hastanın ihtiyaçlarına göre şekillenen bir estetik cerrahi sanatıdır." }] }
          ]}
        />
        <FooterMedia
           logoText="Dr. Turab İSMAYILOV"
           columns={[{ title: "Menü", items: [{ label: "Anasayfa", href: "/" }] }]} 
           videoSrc="https://www.w3schools.com/howto/rain.mp4?_wi=3"
        />
        <script dangerouslySetInnerHTML={{ __html: `${getVisualEditScript()}` }} />
      </ReactLenis>
    </ThemeProvider>
  );
}
