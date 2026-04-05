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
        <NavbarStyleApple navItems={[{ name: "Anasayfa", id: "/" }]} brandName="Dr. Turab İSMAYILOV" />
        <div className="container mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-8">Liposuction (Yağ Aldırma)</h1>
          <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775400391690-s2f3l4sp.jpg" alt="Liposuction" className="w-full max-w-2xl rounded-lg mb-8" />
          <p className="text-lg mb-6 leading-relaxed">
            Liposuction, diyet ve egzersize rağmen inatçı olan bölgesel yağ birikintilerinden kurtulmak isteyen hastalarımız için tasarlanmış modern bir vücut şekillendirme işlemidir. Dr. Turab İsmayılov olarak, vücudunuzun konturlarını daha estetik ve dengeli hale getirmek için ileri teknoloji yöntemlerini kullanıyoruz. Bu işlem, vücudunuza daha fit ve sıkı bir görünüm kazandırmanızı sağlar.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Bu cerrahi müdahale ile vücudun belirli bölgelerindeki (karın, basen, kollar, bel vb.) fazla yağ hücreleri güvenli bir şekilde uzaklaştırılır. Amacımız sadece kilo vermek değil, vücut hatlarınızı yeniden şekillendirerek vücudunuzun doğal güzelliğini ortaya çıkarmaktır. Her hastamızın vücut yapısı farklı olduğundan, işlem öncesinde yapılan detaylı muayene ile ihtiyaçlarınız doğrultusunda kişiye özel bir strateji belirliyoruz.
          </p>
          <p className="text-lg leading-relaxed">
            Liposuction sonrası süreç, hastalarımız için genellikle oldukça konforlu ve kısa sürelidir. Düzenli takip ve uzman tavsiyeleriyle operasyonun kalıcı sonuçlarını uzun yıllar boyunca korumanız mümkündür. Sağlıklı bir yaşam tarzıyla desteklediğinizde, liposuction ile elde ettiğiniz yeni formunuz size çok daha enerjik ve özgüvenli bir yaşam sunacaktır. İnce hatlara sahip olma hayalinizi gerçeğe dönüştürmek için size profesyonel desteğimizi sunuyoruz.
          </p>
        </div>
        <ContactSplitForm title="Randevu Alın" description="Detaylı bilgi için bize ulaşın." inputs={[{ name: "name", type: "text", placeholder: "Adınız" }, { name: "email", type: "email", placeholder: "E-postanız" }]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}
