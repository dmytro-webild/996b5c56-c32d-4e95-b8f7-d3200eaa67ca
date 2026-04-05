"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function YuzGermePage() {
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
            <h1 className="text-4xl font-bold mb-8">Yüz Germe (Face Lift)</h1>
            <div className="prose max-w-none">
                <p>Yüz germe (face lift) operasyonu, zamanla yüz ve boyun bölgesinde oluşan yaşlanma belirtilerini gidermek için uygulanan en etkili estetik cerrahi müdahalelerden biridir. Dr. Turab İsmayılov, bu alandaki derin uzmanlığıyla, hastalarına sadece daha genç değil, aynı zamanda son derece doğal ve dinç bir görünüm kazandırmaktadır.</p>
                <p>Yüz estetiği, cerrahi beceri ile sanatın birleştiği hassas bir alandır. Dr. Turab İsmayılov, yüz hatlarını koruyarak sarkmış dokuları yukarı taşımakta ve ciltteki gevşemeleri profesyonelce düzeltmektedir. Her hastasının anatomik yapısı farklıdır; bu nedenle Dr. İsmayılov, kişiye özel planlanmış cerrahi yaklaşımlar ile en iyi sonucu hedefler.</p>
                <p>Dr. Turab İsmayılov’un uyguladığı modern yüz germe teknikleri, daha az iz ve daha hızlı iyileşme süreleri sunar. Derin doku yapılarına müdahale ederken yüz sinirlerini koruma konusunda yüksek bir dikkat ve titizlik gösterir. Bu sayede, operasyon sonrası mimiklerin doğallığı korunurken, yüzün genç ve sağlıklı yapısı geri kazandırılır.</p>
                <p>Eğer siz de yüzünüzdeki sarkmalardan veya yorgun görünümden şikayetçiyseniz, Dr. Turab İsmayılov ile gerçekleştireceğiniz ön görüşmede size uygun en iyi teknikleri değerlendirebilir, gençlik dolu görünümünüze kavuşmak için ilk adımı atabilirsiniz.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 my-10">
                <img src="http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg?_wi=2" alt="Yüz Germe Estetiği" className="rounded-lg shadow-lg" />
                <img src="http://img.b2bpic.net/free-photo/attractive-smiling-doctor-holding-hand-heart-dreamily-looking-camera-isolated-tender-touched-expression_574295-2653.jpg" alt="Uzman Görüşü" className="rounded-lg shadow-lg" />
            </div>
        </div>
        <ContactSplitForm title="Bilgi ve Randevu" description="Yüz germe (face lift) hakkında uzman görüşü almak için iletişime geçin." inputs={[{ name: "name", type: "text", placeholder: "Adınız" }, { name: "email", type: "email", placeholder: "E-posta" }]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[{ title: "Sayfalar", items: [{ label: "Anasayfa", href: "/" }] }]} />
      </ReactLenis>
    </ThemeProvider>
  );
}