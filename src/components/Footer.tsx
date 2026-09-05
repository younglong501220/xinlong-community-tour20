import React from 'react';
import { LOGO_URL } from '../data/proposalData';

interface FooterProps {
  onOpenDocModal?: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDocModal }) => {
  const docLinks = [
    '行程確認與遊覽車動線圖',
    '石斑魚鱗膠原蛋白 DIY 講義',
    '投保團體旅遊意外險證明名冊',
    '雨天應變備案場地規範說明'
  ];

  return (
    <footer className="w-full bg-surface-container-low mt-space-3xl border-t border-outline-variant/30">
      <div className="max-w-max-width-content mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl">
          {/* Col 1 & 2: Association description */}
          <div className="md:col-span-2 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <img
                alt="新龍社區金牌農村 Logo"
                className="h-9 w-auto object-contain"
                src={LOGO_URL}
              />
              <span className="font-title-md text-title-md text-primary">
                屏東縣枋寮鄉新龍社區發展協會
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              榮獲農業部金牌農村卓越成就，全台首創以龍膽石斑魚鱗循環經濟與友善漁業生態為核心的企業員工旅遊基地，提供永續教育、產地食農體驗與團隊凝聚工作坊。
            </p>
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="px-space-sm py-space-xxs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[14px]">military_tech</span>
                全國金牌農村首獎
              </span>
              <span className="px-space-sm py-space-xxs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[14px]">eco</span>
                企業 ESG 減碳採購推薦
              </span>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-space-xs">
            <span className="font-title-md text-title-md text-primary">企劃洽詢窗口</span>
            <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">badge</span>
              社區專案經理：林執行秘書
            </span>
            <a
              href="tel:088781234"
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
              預約專線：(08) 878-1234
            </a>
            <a
              href="mailto:contact@xinlong-village.tw"
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">mail</span>
              公務信箱：contact@xinlong-village.tw
            </a>
            <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
              服務時間：週一至週五 08:30 - 17:30
            </span>
          </div>

          {/* Col 4: Document Links */}
          <div className="flex flex-col gap-space-xs">
            <span className="font-title-md text-title-md text-primary">企劃文件索引</span>
            {docLinks.map((doc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onOpenDocModal && onOpenDocModal(doc)}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px] text-secondary">description</span>
                <span>{doc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-space-xl pt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <p className="font-label-md text-label-md text-on-surface-variant text-center sm:text-left">
            © 2024 屏東縣枋寮鄉新龍社區發展協會. All rights reserved. 企業福委會專案籌備組編製.
          </p>
          <div className="flex items-center gap-space-md">
            <span className="font-label-md text-label-md text-on-surface-variant">
              農村再生實踐專案
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant">
              海洋資源友善永續漁業
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
