"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Activity } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Anasayfa", id: "hero" },
              { name: "Hizmetler", id: "services" },
              { name: "Yüz Germe", id: "/yuz-germe" },
              { name: "Lipödem", id: "/lipodem" },
              { name: "Liposuction", id: "/liposuction" },
              { name: "Hakkımızda", id: "about" },
              { name: "İletişim", id: "contact" },
            ]}
            brandName="Dr. Turab İSMAYILOV"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogo
            logoText="Dr. Turab İSMAYILOV"
            description="Estetik ve plastik cerrahide mükemmeliyet. Kişiye özel dokunuşlar, doğal sonuçlar ve güvenli operasyon süreci ile hayalinizdeki görünüme kavuşun."
            buttons={[
              { text: "Randevu Al", href: "#contact" },
              { text: "Hizmetleri İncele", href: "#services" },
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401455249-pp8jzgxm.jpg"
            imageAlt="Dr. Turab İsmayılov"
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            useInvertedBackground={true}
            tag="Uzman Cerrah"
            title="Dr. Turab İsmayılov Kimdir?"
            description="Plastik, Rekonstrüktif ve Estetik Cerrahi alanında uzmanlaşmış, uluslararası standartlarda operasyonlar gerçekleştiren Dr. Turab İsmayılov, her hastasının ihtiyaçlarına özel, doğal ve estetik çözümler sunmaktadır."
            subdescription="Yılların deneyimi, gelişmiş teknikler ve yüksek hasta memnuniyeti ile güzelliğinizi güvenli ellerle yeniden şekillendiriyoruz."
            icon={Activity}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401481238-zuo4p91l.png"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardThree
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            features={[
              { title: "Burun Estetiği (Rinoplasti)", description: "Yüz hatlarınızla uyumlu, fonksiyonel ve estetik burun operasyonları.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401555788-fho6nzgf.jpg" },
              { title: "Liposuction", description: "İnatçı yağlardan kurtulun, vücut hatlarınızı yeniden belirginleştirin.", imageSrc: "http://img.b2bpic.net/free-photo/doctor-working-with-patient-hospital_23-2149103624.jpg?_wi=1" },
              { title: "Karın Germe", description: "Daha düz ve sıkı bir karın bölgesi için estetik abdominoplasti.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401577303-9le8lp8b.jpg" },
              { title: "Lipödem", description: "Lipödem tedavisi ile ağrılarınızı azaltın, yaşam kalitenizi artırın.", imageSrc: "http://img.b2bpic.net/free-photo/medical-specialist-examining-patient_107420-74008.jpg?_wi=2" },
              { title: "Yüz Germe (Face Lift)", description: "Daha genç, dinamik ve doğal bir yüz görünümü için profesyonel dokunuşlar.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401592857-x403xecy.jpg" },
            ]}
            title="Estetik Hizmetlerimiz"
            description="Size en uygun estetik çözümleri sunuyoruz."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="bento-grid"
            useInvertedBackground={true}
            testimonials={[
              { id: "1", name: "Ayşe Y.", role: "Hasta", company: "Rinoplasti", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-patient-post-surgery-checkup_1258-125032.jpg" },
              { id: "2", name: "Mehmet K.", role: "Hasta", company: "Liposuction", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/patient-smiling-after-aesthetic-treatment_1303-26019.jpg" },
              { id: "3", name: "Selin D.", role: "Hasta", company: "Yüz Germe", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/patient-portrait-after-successful-consultation_574295-2653.jpg" },
              { id: "4", name: "Canan B.", role: "Hasta", company: "Karın Germe", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/post-procedure-patient-checkup_176420-8507.jpg" },
              { id: "5", name: "Emre S.", role: "Hasta", company: "Lipödem", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/patient-consultation-medical-office_23-2149265857.jpg" },
            ]}
            title="Hastalarımız Ne Diyor?"
            description="Operasyon sonrası memnuniyetlerini paylaşan hastalarımızın yorumları."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "İyileşme süreci ne kadar sürer?", content: "İşleme göre değişiklik gösterse de ortalama 2-4 hafta içerisinde günlük hayatınıza dönebilirsiniz." },
              { id: "2", title: "Operasyonlar kalıcı mı?", content: "Evet, cerrahi prosedürlerimiz kalıcı sonuçlar sunar, ancak yaşam tarzınıza göre zamanla hafif değişimler olabilir." },
              { id: "3", title: "Randevu nasıl alırım?", content: "İletişim formunu doldurarak veya telefon numaranız üzerinden bize ulaşarak randevunuzu oluşturabilirsiniz." },
            ]}
            title="Sıkça Sorulan Sorular"
            description="Estetik cerrahi süreçlerinizle ilgili merak ettikleriniz."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Hemen Randevu Alın"
            description="Hayalinizdeki görünüme kavuşmak için ilk adımı atın."
            inputs={[
              { name: "name", type: "text", placeholder: "Adınız Soyadınız", required: true },
              { name: "email", type: "email", placeholder: "E-posta Adresiniz", required: true },
              { name: "phone", type: "tel", placeholder: "Telefon Numaranız", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Sormak istediklerinizi yazın...", rows: 4 }}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401500540-v8b3tn8s.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BqpAC3wPJ7y4HDQWWtKh2DSRee/uploaded-1775401538272-8fu6b3ko.png"
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Hizmetler", items: [{ label: "Burun Estetiği", href: "#services" }, { label: "Liposuction", href: "/liposuction" }, { label: "Karın Germe", href: "#services" }, { label: "Yüz Germe", href: "/yuz-germe" }, { label: "Lipödem", href: "/lipodem" }] },
              { title: "İletişim", items: [{ label: "Bize Ulaşın", href: "#contact" }, { label: "Randevu", href: "#contact" }] },
            ]}
            copyrightText="© 2025 Dr. Turab İsmayılov. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}