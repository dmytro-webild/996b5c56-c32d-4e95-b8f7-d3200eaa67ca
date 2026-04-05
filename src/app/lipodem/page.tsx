"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

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
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-8">Lipödem Tedavisi</h1>
            <div className="prose max-w-none">
                <p>Lipödem, genellikle bacaklarda ve bazen kollarda orantısız yağ birikimi ile karakterize, kronik ve ilerleyici bir durumdur. Dr. Turab İsmayılov, lipödem tedavisinde hastanın yaşam kalitesini artırmayı hedefleyen uzman bir yaklaşım benimsemektedir. Lipödem sadece estetik bir sorun değil, aynı zamanda ciddi ağrı, hassasiyet ve ödem sorunlarını beraberinde getiren tıbbi bir durumdur.</p>
                <p>Dr. Turab İsmayılov, cerrahi ve cerrahi olmayan tedavi yöntemlerinde geniş deneyime sahiptir. Hastalarının bireysel durumlarını analiz ederek, en uygun tedavi planını oluşturur. Liposuction teknikleri, lipödem dokusunun güvenli ve etkili bir şekilde uzaklaştırılmasında altın standart olarak kabul edilir. Dr. İsmayılov, uzmanlığı sayesinde dokuların korunmasını sağlarken, hastanın vücut hatlarını ideal görünüme kavuşturur.</p>
                <p>Tedavi sürecinde hasta güvenliği ve konforu en öncelikli hedeftir. Dr. İsmayılov, operasyon öncesi ve sonrası dönemde hastalarına kapsamlı destek sunarak iyileşme sürecini hızlandırır. Modern cerrahi ekipmanlar ve ileri teknikler kullanarak gerçekleştirdiği operasyonlar, uzun dönemli başarı ve yüksek hasta memnuniyeti ile sonuçlanmaktadır.</p>
                <p>Lipödem hakkında endişeleriniz varsa veya tedavi seçeneklerini öğrenmek istiyorsanız, Dr. Turab İsmayılov ile iletişime geçerek detaylı bir muayene ve değerlendirme planlayabilirsiniz.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 my-10">
                <img src="http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg?_wi=2" alt="Lipödem Tedavisi" className="rounded-lg shadow-lg" />
                <img src="http://img.b2bpic.net/free-photo/close-up-smiley-woman-posing_23-2149265857.jpg" alt="Lipödem İyileşme" className="rounded-lg shadow-lg" />
            </div>
        </div>
        <ContactSplitForm title="Bilgi ve Randevu" description="Lipödem tedavisi hakkında uzman görüşü almak için iletişime geçin." inputs={[{ name: "name", type: "text", placeholder: "Adınız" }, { name: "email", type: "email", placeholder: "E-posta" }]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[{ title: "Sayfalar", items: [{ label: "Anasayfa", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}