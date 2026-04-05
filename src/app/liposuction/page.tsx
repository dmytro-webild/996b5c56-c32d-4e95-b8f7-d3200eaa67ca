"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { ReactNode } from 'react';

export default function LiposuctionPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Liposuction", id: "/liposuction" },
            { name: "Rinoplasti", id: "/rinoplasti" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Dr. Turab İSMAYILOV"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="Dr. Turab İSMAYILOV"
          columns={[{ title: "Links", items: [{ label: "Home", href: "/" }] }]}
          videoSrc="https://example.com/video.mp4?_wi=1"
        />
      </div>
    </ThemeProvider>
  );
}