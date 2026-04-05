"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';

export default function LipodemPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple
            navItems={[
              { name: "Anasayfa", id: "/" },
              { name: "Yüz Germe", id: "/yuz-germe" },
              { name: "Lipödem", id: "/lipodem" },
            ]}
            brandName="Dr. Turab İSMAYILOV"
        />
        <div className="pt-32 pb-16">
          <InlineImageSplitTextAbout
            heading={[{ type: 'text', content: 'Lipödem Tedavisi ve İyileşme Süreci' }]}
            className="max-w-4xl mx-auto px-6"
            ariaLabel="Lipödem hakkında bilgi"
          >
            <div className="space-y-6">
              <p>Lipödem, özellikle bacaklarda ve bazen kollarda orantısız yağ birikimi ile karakterize, ağrılı ve kronik bir durumdur. Genellikle hormonal değişimlerle tetiklenen bu durum, sadece estetik bir kaygı değil, aynı zamanda ciddi bir sağlık sorunudur. Erken teşhis ve doğru tedavi yöntemleri ile hastaların yaşam kalitesi ciddi oranda artırılabilir.</p>
              <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775400391689-e1kr93ta.jpg" alt="Lipödem tedavi öncesi" className="rounded-lg shadow-lg my-6" />
              <p>Kliniğimizde lipödem tedavisinde uyguladığımız özel liposuction teknikleri, vücudun kontürlerini düzeltirken aynı zamanda hastanın yaşadığı ağırlık hissini ve kronik ağrıları minimize etmeyi hedefler. Cerrahi müdahale öncesinde kapsamlı bir değerlendirme yaparak, hastalarımızın kişisel sağlık geçmişine ve vücut yapısına en uygun tedavi planını oluşturuyoruz.</p>
              <p>İyileşme süreci, uygulanan bölgenin genişliğine göre değişkenlik gösterse de, modern cerrahi yöntemlerimiz sayesinde hastalarımız hızla günlük hayatlarına dönebilmektedir. Operasyon sonrasında takip edilmesi gereken özel kompresyon giysileri ve fizyoterapi önerileri ile uzun vadeli sonuçların korunmasını sağlıyoruz. Sağlıklı ve ağrısız bir yaşam için doğru tekniklerle profesyonel desteği kliniğimizde bulabilirsiniz.</p>
            </div>
          </InlineImageSplitTextAbout>
        </div>
        <ContactSplitForm title="Lipödem Tedavisi İçin Randevu" description="Size özel tedavi seçeneklerimizi öğrenmek için bizimle iletişime geçin." inputs={[{ name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true }, { name: "email", type: "email", placeholder: "E-posta Adresiniz", required: true }]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}