"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Microscope, Sparkles, CheckCircle2 } from "lucide-react";

export default function RinoplastiPage() {
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
              { name: "Anasayfa", id: "/" },
              { name: "Rinoplasti", id: "/rinoplasti" }
            ]}
            brandName="Dr. Turab İSMAYILOV"
          />
        </div>

        <div id="content" data-section="content">
          <FeatureCardTwentyFive
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Burun Estetiği (Rinoplasti) Hakkında"
            description="Rinoplasti, sadece estetik kaygıları gidermekle kalmayan, aynı zamanda solunum fonksiyonlarını iyileştiren oldukça hassas bir cerrahi prosedürdür. Dr. Turab İsmayılov, her hastanın yüz hatlarına özgü, doğal görünümlü ve fonksiyonel açıdan kusursuz sonuçlar hedefler. Süreç, kapsamlı bir analiz ve beklentilerin netleştirilmesiyle başlar. Modern teknikler sayesinde, dokulara en az zarar verecek şekilde cerrahi planlama yapılır, bu da iyileşme sürecini hızlandırırken morluk ve ödem gibi komplikasyonları minimize eder. Rinoplasti, yüz orantısını belirginleştirerek genel estetik görünümünüzü güçlendirir ve özgüveninizi artırır. Operasyon sonrası titiz bir takip süreci ile en iyi sonucu elde etmek için yanınızdayız."
            features={[
              { 
                title: "Kişiye Özel Planlama", 
                description: "Yüz anatomisine uygun, doğal ve estetik burun tasarımı.", 
                icon: Microscope,
                mediaItems: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-wavy-voluminous-hair-beige-background-with-bright-pink-lipstick-lip-gloss-topless-bare-shoulders_343596-8239.jpg?_wi=1", imageAlt: "Doğal burun estetiği" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-physiotherapist-posing_23-2148780764.jpg", imageAlt: "Cerrah muayenesi" }
                ]
              },
              { 
                title: "Fonksiyonel İyileşme", 
                description: "Hem estetik hem de rahat nefes alabilen fonksiyonel sonuçlar.", 
                icon: CheckCircle2,
                mediaItems: [
                    { imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-using-medical-tool-patient_23-2149103624.jpg", imageAlt: "Medikal süreç" },
                    { imageSrc: "http://img.b2bpic.net/free-photo/attractive-smiling-doctor-holding-hand-heart-dreamily-looking-camera-isolated-tender-touched-expression_574295-2653.jpg", imageAlt: "Mutlu hasta" }
                ]
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="http://img.b2bpic.net/free-photo/waiting-room-hospital-lobby-with-reception-counter-desk-diverse-people-waiting-attend-checkup-visit-appointment-health-care-examination-emergency-area-medical-clinic_482257-46891.jpg?_wi=2"
            logoText="Dr. Turab İSMAYILOV"
            columns={[
              { title: "Sayfalar", items: [{ label: "Anasayfa", href: "/" }, { label: "Rinoplasti", href: "/rinoplasti" }] }
            ]}
            copyrightText="© 2025 Dr. Turab İsmayılov. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
