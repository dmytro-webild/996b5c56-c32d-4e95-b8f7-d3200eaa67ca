"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import LegalSection from '@/components/legal/LegalSection';
import { getVisualEditScript } from "@/utils/visual-edit-script";

export default function RinoplastiPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <script dangerouslySetInnerHTML={{ __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');" }} />
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        <NavbarStyleApple
           navItems={[
              { name: "Anasayfa", id: "/" },
              { name: "Rinoplasti", id: "/rinoplasti" },
           ]}
           brandName="Dr. Turab İSMAYILOV"
        />
        <LegalSection
          layout="page"
          title="Rinoplasti (Burun Estetiği)"
          subtitle="Yüzünüzle Uyumlu, Doğal ve Fonksiyonel Çözümler"
          sections={[
            { heading: "Rinoplasti Nedir?", content: [{ type: "paragraph", text: "Rinoplasti, tıp dilinde burun estetiği olarak bilinen, burun şeklini değiştirmeyi ve fonksiyonel problemlerini gidermeyi amaçlayan cerrahi bir işlemdir. Dr. Turab İsmayılov, hastalarının yüz hatlarına en uygun, nefes almayı iyileştiren ve özgüveni artıran estetik sonuçlar hedefler. Rinoplasti, sadece estetik bir kaygı olmayıp aynı zamanda burun içindeki eğriliklerin (septum deviasyonu) düzeltilmesini de kapsayabilir." }] },
            { heading: "İşlem Süreci", content: [{ type: "paragraph", text: "Operasyon süreci kişiye özel planlanır. İlk aşamada detaylı analiz yapılır, yüz oranları değerlendirilir ve simülasyonlar üzerinde hedeflenen sonuç konuşulur. Genel anestezi altında uygulanan Rinoplasti, modern cerrahi teknikler sayesinde morluk ve ödem riskini minimize ederek gerçekleştirilir. Operasyon süresi vakanın zorluğuna göre 2-3 saat arasında sürmektedir." }, { type: "list", items: ["Kişiye özel burun tasarımı", "Fonksiyonel nefes yolu düzeltmesi", "Minimal cerrahi travma", "Doğal ve orantılı sonuçlar"] }] },
            { heading: "İyileşme Süreci", content: [{ type: "paragraph", text: "Rinoplasti sonrası ilk hafta burunda bir atel veya alçı bulunur. İyileşme sürecinin ilk 7-10 günü sosyal hayata dönmek için genellikle yeterlidir. Tam iyileşme ve burun hattının oturması birkaç ayı bulsa da, ilk haftadan itibaren hastalar oldukça konforlu bir süreç geçirirler. Dr. Turab İsmayılov, süreç boyunca hastalarını birebir takip eder." }] }
          ]}
        />
        <FooterMedia
           logoText="Dr. Turab İSMAYILOV"
           columns={[{ title: "Menü", items: [{ label: "Anasayfa", href: "/" }] }]} 
           videoSrc="https://www.w3schools.com/howto/rain.mp4?_wi=2"
        />
        <script dangerouslySetInnerHTML={{ __html: `${getVisualEditScript()}` }} />
      </ReactLenis>
    </ThemeProvider>
  );
}