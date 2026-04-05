"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LiposuctionPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple 
          navItems={[{ name: "Anasayfa", id: "/" }, { name: "Rinoplasti", id: "/rinoplasti" }, { name: "Liposuction", id: "/liposuction" }]} 
          brandName="Dr. Turab İSMAYILOV" 
        />
        <div className="container mx-auto px-6 py-20 min-h-[60vh]">
          <h1 className="text-4xl font-bold mb-6">Liposuction</h1>
          <img src="http://img.b2bpic.net/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159287.jpg" alt="Liposuction" className="w-full h-64 object-cover rounded-xl mb-8" />
          <p className="text-lg leading-relaxed mb-6">
            Liposuction, vücudun belirli bölgelerinde biriken ve diyet veya egzersizle yok edilemeyen inatçı yağ dokularının vakum yardımıyla vücuttan uzaklaştırılması işlemidir. Dr. Turab İsmayılov, vücut hatlarını şekillendirme konusunda gelişmiş liposuction yöntemlerini kullanarak, hastaların daha fit ve özgüvenli bir vücuda sahip olmalarına yardımcı olmaktadır.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Bu işlem, özellikle karın, bel, basen, bacak ve kol gibi bölgelerdeki yağ birikintileri için oldukça etkilidir. Liposuction bir kilo verme yöntemi değil, bir vücut şekillendirme tekniğidir. Operasyonun başarısı, hastanın cilt elastikiyeti ve hedeflenen bölgenin durumuna göre uzman cerrahın yaptığı planlama ile yakından ilişkilidir.
          </p>
          <p className="text-lg leading-relaxed">
            İşlem sonrası süreç, kişisel iyileşme hızına bağlı olarak genellikle hızlı ve yönetilebilir bir süreçtir. Hastalar, vücutlarındaki değişimi kısa süre içinde fark etmeye başlarlar. Dr. İsmayılov ile görüşerek, sizin için en uygun liposuction yaklaşımını öğrenebilir ve daha dengeli bir vücut silüeti için ilk adımı atabilirsiniz.
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