"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function RinoplastiPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple 
          navItems={[{ name: "Anasayfa", id: "/" }, { name: "Rinoplasti", id: "/rinoplasti" }, { name: "Liposuction", id: "/liposuction" }]} 
          brandName="Dr. Turab İSMAYILOV" 
        />
        <div className="container mx-auto px-6 py-20 min-h-[60vh]">
          <h1 className="text-4xl font-bold mb-6">Burun Estetiği (Rinoplasti)</h1>
          <img src="http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg" alt="Rinoplasti" className="w-full h-64 object-cover rounded-xl mb-8" />
          <p className="text-lg leading-relaxed mb-6">
            Burun estetiği veya tıbbi adıyla Rinoplasti, yüz hatlarınızın merkezinde yer alan burnun hem estetik görünümünü iyileştirmek hem de solunum fonksiyonlarını optimize etmek amacıyla yapılan bir cerrahi prosedürdür. Dr. Turab İsmayılov, modern cerrahi teknikler kullanarak, hastalarının yüz yapısına en uygun, doğal ve estetik sonuçları hedeflemektedir.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Operasyon süreci, hastanın beklentileri ve yüz anatomisi göz önüne alınarak tamamen kişiye özel planlanır. Ameliyat sonrasında, nefes alma kalitesinin artırılması ve estetik kaygıların giderilmesi ile hastaların yaşam kalitesinde ciddi bir artış hedeflenir. İyileşme süreci, doğru bakım ve uzman takibi ile kısa sürede konforlu bir şekilde tamamlanır.
          </p>
          <p className="text-lg leading-relaxed">
            Rinoplasti sadece bir güzellik müdahalesi değil, aynı zamanda sağlık odaklı bir yaklaşımdır. Burun tıkanıklığı gibi fonksiyonel sorunların giderilmesi, operasyonun önemli bir parçasını oluşturur. Uzman ellerde yapılan rinoplasti, size daha dengeli ve karakteristik bir yüz ifadesi kazandıracaktır.
          </p>
        </div>
        <FooterMedia 
            logoText="Dr. Turab İSMAYILOV" 
            columns={[{ title: "Hizmetler", items: [{ label: "Rinoplasti", href: "/rinoplasti" }, { label: "Liposuction", href: "/liposuction" }] }]} 
        />
      </ReactLenis>
    </ThemeProvider>
  );
}