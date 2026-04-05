"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function RinoplastiPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={[{ name: "Anasayfa", id: "/" }]} brandName="Dr. Turab İSMAYILOV" />
        <div className="container mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-8">Rinoplasti (Burun Estetiği)</h1>
          <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775400391689-e1kr93ta.jpg" alt="Rinoplasti" className="w-full max-w-2xl rounded-lg mb-8" />
          <p className="text-lg mb-6 leading-relaxed">
            Rinoplasti, sadece estetik kaygılarla değil, aynı zamanda nefes alma problemlerini gidermek amacıyla da uygulanan karmaşık ve hassas bir cerrahi prosedürdür. Dr. Turab İsmayılov olarak, yüz hatlarınızla mükemmel uyum sağlayan, doğal ve fonksiyonel açıdan kusursuz sonuçlar hedefliyoruz. Bu süreçte anatomik yapınızı analiz ederek, size en uygun cerrahi planı titizlikle oluşturuyoruz.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Burun estetiği ameliyatlarında temel amacımız, yüzün dengesini bozmadan kişinin doğal karakterini koruyarak estetik bir iyileşme sağlamaktır. Modern tekniklerimizle doku hasarını minimuma indiriyor, iyileşme sürecini hızlandırıyoruz. Ameliyat sonrası dönemde hem estetik hem de fonksiyonel olarak kendinizi çok daha iyi hissetmenizi sağlayacak, özgüveninizi tazeleyecek bir yolculuk sizi bekliyor.
          </p>
          <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775400391690-i1wozss9.jpg" alt="Rinoplasti İyileşme" className="w-full max-w-2xl rounded-lg mb-8" />
          <p className="text-lg leading-relaxed">
            Operasyon öncesi ve sonrası tüm süreçlerde detaylı bilgilendirme sağlıyor, her türlü endişenizi gidermek için buradayız. Burun estetiği, doğru ellerde hayatınızı pozitif yönde değiştirebilecek dönüştürücü bir deneyimdir. Uzmanlığımız ve hasta odaklı yaklaşımımızla, estetik hedeflerinize ulaşmanız için yanınızdayız.
          </p>
        </div>
        <ContactSplitForm title="Randevu Alın" description="Detaylı bilgi için bize ulaşın." inputs={[{ name: "name", type: "text", placeholder: "Adınız" }, { name: "email", type: "email", placeholder: "E-postanız" }]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}
