import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../data/proposalData';

interface HeaderProps {
  onOpenInquiry: () => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry, onOpenExport }) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = ['overview', 'timeline', 'budget', 'notice'];

      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="h-20 max-w-max-width-content mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => scrollToSection('overview')} 
          className="flex items-center gap-space-sm cursor-pointer group"
          id="header-brand-logo"
        >
          <img
            alt="新龍社區金牌農村 Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            src={LOGO_URL}
          />
          <div className="flex flex-col">
            <span className="font-title-md text-title-md text-primary tracking-tight">
              新龍社區金牌農村 企業員工旅遊企劃書 (10/15)
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider hidden sm:block">
              行政院農業部金牌農村認證 ‧ 龍膽石斑產銷與漁村永續發展
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-space-xs p-space-xxs bg-surface-container-low rounded-lg"
          id="header-nav-tabs"
        >
          <button
            type="button"
            onClick={() => scrollToSection('overview')}
            className={`px-space-md py-space-xs transition-colors rounded-lg ${
              activeSection === 'overview'
                ? 'bg-primary-container text-on-primary font-title-md shadow-sm'
                : 'font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            企劃總覽
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('timeline')}
            className={`px-space-md py-space-xs transition-colors rounded-lg ${
              activeSection === 'timeline'
                ? 'bg-primary-container text-on-primary font-title-md shadow-sm'
                : 'font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            當日行程規劃
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('budget')}
            className={`px-space-md py-space-xs transition-colors rounded-lg ${
              activeSection === 'budget'
                ? 'bg-primary-container text-on-primary font-title-md shadow-sm'
                : 'font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            費用預算試算
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('notice')}
            className={`px-space-md py-space-xs transition-colors rounded-lg ${
              activeSection === 'notice'
                ? 'bg-primary-container text-on-primary font-title-md shadow-sm'
                : 'font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            行前須知與雨備
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-sm">
          <button
            id="header-export-btn"
            onClick={onOpenExport}
            className="hidden sm:inline-flex items-center gap-space-xxs px-space-md py-space-xs rounded-lg bg-surface-container-low text-secondary font-title-md text-title-md hover:bg-secondary hover:text-on-secondary transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            <span>列印匯出企劃</span>
          </button>

          <button
            id="header-inquiry-btn"
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-space-xxs px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>立即預約洽詢</span>
          </button>

          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary select-none"
            title="企業福委窗口"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            id="header-mobile-menu-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-margin-mobile py-space-md flex flex-col gap-space-xs shadow-lg animate-in slide-in-from-top-2 duration-200">
          <button
            type="button"
            onClick={() => scrollToSection('overview')}
            className={`text-left px-space-md py-space-sm rounded-lg ${
              activeSection === 'overview'
                ? 'bg-primary-container text-on-primary font-title-md'
                : 'text-on-surface hover:bg-surface-container'
            }`}
          >
            企劃總覽
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('timeline')}
            className={`text-left px-space-md py-space-sm rounded-lg ${
              activeSection === 'timeline'
                ? 'bg-primary-container text-on-primary font-title-md'
                : 'text-on-surface hover:bg-surface-container'
            }`}
          >
            當日行程規劃
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('budget')}
            className={`text-left px-space-md py-space-sm rounded-lg ${
              activeSection === 'budget'
                ? 'bg-primary-container text-on-primary font-title-md'
                : 'text-on-surface hover:bg-surface-container'
            }`}
          >
            費用預算試算
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('notice')}
            className={`text-left px-space-md py-space-sm rounded-lg ${
              activeSection === 'notice'
                ? 'bg-primary-container text-on-primary font-title-md'
                : 'text-on-surface hover:bg-surface-container'
            }`}
          >
            行前須知與雨備
          </button>
          <div className="pt-space-xs border-t border-outline-variant/20 flex gap-space-xs">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenExport();
              }}
              className="flex-1 inline-flex items-center justify-center gap-space-xxs py-space-xs rounded-lg bg-surface-container-low text-secondary font-title-md text-title-md"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>列印企劃</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
