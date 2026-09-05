/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ItinerarySection } from './components/ItinerarySection';
import { BudgetCalculatorSection } from './components/BudgetCalculatorSection';
import { NoticeSection } from './components/NoticeSection';
import { ReviewCtaSection } from './components/ReviewCtaSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ExportPdfModal } from './components/ExportPdfModal';
import { DocPreviewModal } from './components/DocPreviewModal';
import { SERVICE_FEE_RATE } from './data/proposalData';

export default function App() {
  const [headcount, setHeadcount] = useState<number>(20);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [activeDocTitle, setActiveDocTitle] = useState<string | null>(null);

  // Financial calculations
  const guideCost = Math.ceil(headcount / 20) * 1200;
  const bikeCost = headcount * 200;
  const feedCost = headcount * 300;
  const mealCost = Math.ceil(headcount / 10) * 5500;
  const waterCost = headcount * 500;
  const diyCost = headcount * 450;
  const subtotal = guideCost + bikeCost + feedCost + mealCost + waterCost + diyCost;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  const grandTotal = subtotal + serviceFee;
  const perPersonCost = Math.round(grandTotal / headcount);

  const scrollToTimeline = () => {
    const el = document.getElementById('timeline');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Fixed Sticky Header */}
      <Header
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <HeroSection
            headcount={headcount}
            perPersonBudget={perPersonCost}
            onHeadcountChange={setHeadcount}
            onScrollToTimeline={scrollToTimeline}
          />

          {/* Main Proposal Container */}
          <div className="w-full max-w-max-width-content mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl flex flex-col gap-space-3xl">
            {/* Section 1: Itinerary Timeline */}
            <ItinerarySection headcount={headcount} />

            {/* Section 2: Budget Breakdown & Customizer */}
            <BudgetCalculatorSection
              headcount={headcount}
              onHeadcountChange={setHeadcount}
            />

            {/* Section 3: Safety, Weather & Contingency Notice */}
            <NoticeSection />

            {/* Section 4: Enterprise Review CTA */}
            <ReviewCtaSection
              onOpenExport={() => setIsExportModalOpen(true)}
              onOpenInquiry={() => setIsInquiryModalOpen(true)}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenDocModal={title => setActiveDocTitle(title)} />

      {/* Modals & Dialogs */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultHeadcount={headcount}
        calculatedBudget={grandTotal}
      />

      <ExportPdfModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        headcount={headcount}
        grandTotal={grandTotal}
        perPersonCost={perPersonCost}
      />

      <DocPreviewModal
        title={activeDocTitle}
        onClose={() => setActiveDocTitle(null)}
      />
    </div>
  );
}
