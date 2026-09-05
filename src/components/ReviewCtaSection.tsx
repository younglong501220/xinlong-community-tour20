import React from 'react';

interface ReviewCtaSectionProps {
  onOpenExport: () => void;
  onOpenInquiry: () => void;
}

export const ReviewCtaSection: React.FC<ReviewCtaSectionProps> = ({
  onOpenExport,
  onOpenInquiry
}) => {
  return (
    <section className="p-space-2xl bg-gradient-to-br from-primary via-primary to-primary-container text-on-primary rounded-xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl border border-primary-container">
      <div className="flex flex-col gap-space-xs max-w-2xl">
        <span className="inline-flex items-center gap-space-xxs text-secondary-fixed font-label-md text-label-md">
          <span className="material-symbols-outlined text-[16px]">approval_delegation</span>
          福委會審核專用專案檔
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-primary">
          確認方案或預約專人到府簡報？
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary-container">
          我們已保留 10/15 專屬檔期與專業指導團隊，可依貴公司福委會需求調整菜單葷素或擴充人數。
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 w-full sm:w-auto">
        <button
          id="btn-download-pdf"
          type="button"
          onClick={onOpenExport}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface-container-lowest text-primary font-title-md text-title-md hover:bg-surface-bright transition-colors shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">download</span>
          <span>下載 PDF 企劃簡報</span>
        </button>

        <button
          id="btn-confirm-booking"
          type="button"
          onClick={onOpenInquiry}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-lg bg-secondary text-on-secondary font-title-md text-title-md hover:bg-secondary/90 transition-colors shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">handshake</span>
          <span>正式確認 10/15 檔期</span>
        </button>
      </div>
    </section>
  );
};
