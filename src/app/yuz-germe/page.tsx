"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';

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
        <div className="pt-32 pb-16">
          <InlineImageSplitTextAbout
            heading={[{ type: 'text', content: 'Profesyonel Yüz Germe (Face Lift) Uygulamaları' }]}
            className="max-w-4xl mx-auto px-6"
            ariaLabel="Yüz germe hakkında bilgi"
          >
            <div className="space-y-6">
              <p>Zamanın etkileri, genetik faktörler ve çevresel unsurlar yüzümüzde sarkmalara ve çizgilenmelere yol açabilir. Yüz germe operasyonları, bu yaşlanma belirtilerini tersine çevirerek daha genç, canlı ve diri bir görünüm elde etmenize yardımcı olur. Dr. Turab İsmayılov olarak, doğal ifadenizi koruyarak estetik dengeyi sağlayan kişiselleştirilmiş cerrahi çözümler sunuyoruz.</p>
              <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775400391690-i1wozss9.jpg" alt="Yüz germe cerrahi süreç" className="rounded-lg shadow-lg my-6" />
              <p>Operasyonlarımızda uyguladığımız ileri cerrahi teknikler, dokuların derin katmanlarda sıkılaştırılmasını ve cilt fazlalığının estetik bir şekilde uzaklaştırılmasını sağlar. Bu sayede yalnızca cildinizi gerginleştirmekle kalmaz, aynı zamanda yüz hatlarınızın daha belirgin ve dinamik görünmesini sağlarız. Her hastamızın beklentisini dikkatle dinliyor ve ameliyat planını bu doğrultuda şekillendiriyoruz.</p>
              <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775400391690-s2f3l4sp.jpg" alt="Yüz germe öncesi sonrası" className="rounded-lg shadow-lg my-6" />
              <p>Yüz germe ameliyatı sonrası iyileşme süreci titiz bir takip gerektirir. Operasyonun hemen ardından ödemin azalması ve dokuların iyileşmesi için gerekli tüm tıbbi desteği sağlıyoruz. Hastalarımızın konforunu ön planda tutarak, en doğal sonuçlara ulaşmak için klinik olarak güvenilir ve modern yöntemleri kullanmaya devam ediyoruz. Kendinizi daha enerjik ve özgüvenli hissetmeniz için bizimle iletişime geçebilirsiniz.</p>
            </div>
          </InlineImageSplitTextAbout>
        </div>
        <ContactSplitForm title="Yüz Germe İçin Randevu Alın" description="Daha genç ve doğal bir görünüm için şimdi bir görüşme planlayın." inputs={[{ name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true }, { name: "email", type: "email", placeholder: "E-posta Adresiniz", required: true }]} />
        <FooterMedia logoText="Dr. Turab İSMAYILOV" columns={[]} />
      </ReactLenis>
    </ThemeProvider>
  );
}