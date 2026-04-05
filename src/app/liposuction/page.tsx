"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LiposuctionPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={[{name: "Anasayfa", id: "/"}, {name: "Liposuction", id: "#content"}]} brandName="Dr. Turab İSMAYILOV" />
        <div id="content" className="py-24 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Liposuction ile İdeal Vücut Hatlarına Kavuşun</h1>
          <img src="http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg?_wi=1" alt="Liposuction Sonuçları" className="rounded-xl shadow-lg mb-8" />
          <p className="text-lg mb-6 leading-relaxed">
            Dr. Turab İsmayılov, liposuction ameliyatlarında modern teknolojiyi ve ileri cerrahi teknikleri birleştirerek hastalarına güvenli ve etkili çözümler sunmaktadır. Liposuction, diyet ve egzersize dirençli bölgesel yağların vücuttan uzaklaştırılması işlemidir. Bu operasyon, kilo verme yöntemi değil, vücudu şekillendirme ve orantılandırma yöntemidir.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Uzmanlığım sayesinde, karın, bel, kalça ve bacak gibi bölgelerdeki inatçı yağ depolarını minimal invaziv tekniklerle hedefliyorum. Her hastamın anatomik yapısını dikkatlice analiz ederek, en doğal ve estetik sonuçları elde etmeyi hedefliyorum. İyileşme süreci titizlikle yönetilir ve hastalarımızın konforu en ön planda tutulur.
          </p>
          <img src="http://img.b2bpic.net/free-photo/close-up-hand-using-medical-tool-patient_23-2149103624.jpg" alt="Operasyon Detayı" className="rounded-xl shadow-lg mb-8" />
          <p className="text-lg leading-relaxed">
            Dr. Turab İsmayılov ile gerçekleştireceğiniz ön görüşmede, beklentilerinizi ve vücut yapınıza en uygun planlamayı detaylıca ele alırız. Vücut hatlarınızı yeniden belirginleştirmek ve özgüveninizi tazelemek için profesyonel cerrahi desteği şimdi alın.
          </p>
        </div>
        <ContactSplitForm title="Ücretsiz Muayene Randevusu" description="Liposuction operasyonu hakkında detaylı bilgi almak için bizimle iletişime geçin." inputs={[{name: "name", type: "text", placeholder: "İsim"}, {name: "phone", type: "tel", placeholder: "Telefon"}]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}
