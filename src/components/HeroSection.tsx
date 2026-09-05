import React from 'react';
import { HERO_BG_URL } from '../data/proposalData';

interface HeroSectionProps {
  headcount: number;
  perPersonBudget: number;
  onHeadcountChange?: (newCount: number) => void;
  onScrollToTimeline: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headcount,
  perPersonBudget,
  onHeadcountChange,
  onScrollToTimeline
}) => {
  return (
    <section 
      id="overview" 
      className="relative w-full -mt-20 overflow-hidden bg-primary text-on-primary"
    >
      {/* Background Image & Lighting FX */}
      <div className="absolute inset-0 z-0">
        <img
          alt="新龍社區金牌農村龍膽石斑魚塭風景"
          className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity scale-105 transform transition-transform duration-1000 ease-out"
          src={HERO_BG_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-primary-container/30 blur-2xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-max-width-content mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-36 pb-space-3xl flex flex-col gap-space-xl">
        {/* Badges / Pill Tags */}
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="inline-flex items-center gap-space-xxs px-space-md py-space-xxs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md shadow-sm">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            金牌農村・生態永續・企業團隊建設
          </span>
          <span className="inline-flex items-center gap-space-xxs px-space-md py-space-xxs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md shadow-sm">
            <span className="material-symbols-outlined text-[16px]">water_ec</span>
            ESG 綠色低碳在地體驗
          </span>
          <span className="hidden sm:inline-flex items-center gap-space-xxs px-space-md py-space-xxs rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px]">place</span>
            屏東縣枋寮鄉
          </span>
        </div>

        {/* Hero Title & Description */}
        <div className="flex flex-col gap-space-sm max-w-4xl">
          <h1 className="font-display-lg text-display-lg text-on-primary tracking-tight">
            新龍社區金牌農村：企業員工旅遊企劃 (10/15)
          </h1>
          <p className="font-headline-sm text-headline-sm text-primary-fixed leading-relaxed font-normal">
            龍膽石斑的故鄉 — 結合漁村文化、食魚教育與生態永續的深度體驗
          </p>
        </div>

        {/* Quick Metrics Bar Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-md">
          {/* Card 1: Event Date */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex flex-col gap-space-xxs shadow-sm border border-surface-container-lowest/10">
            <span className="font-label-md text-label-md text-primary-fixed uppercase tracking-wider flex items-center gap-space-xxs">
              <span className="material-symbols-outlined text-[16px]">event</span>
              活動日期
            </span>
            <span className="font-headline-md text-headline-md text-on-primary">10/15 (週二)</span>
            <span className="font-body-md text-body-md text-on-primary-container">當日單日來回沉浸式體驗</span>
          </div>

          {/* Card 2: Target Headcount with interactive adjusters */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex flex-col justify-between gap-space-xxs shadow-sm border border-surface-container-lowest/10">
            <div>
              <span className="font-label-md text-label-md text-primary-fixed uppercase tracking-wider flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[16px]">groups</span>
                目標人數
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline-md text-headline-md text-on-primary">
                  {headcount}人
                </span>
                <span className="text-xs text-secondary-fixed bg-secondary/30 px-1.5 py-0.5 rounded">
                  (可調整試算)
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-on-primary-container font-body-md text-body-md pt-1">
              <span>團隊小組精緻分工互動</span>
              {onHeadcountChange && (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    title="減少人數"
                    onClick={() => onHeadcountChange(Math.max(10, headcount - 5))}
                    className="w-6 h-6 rounded bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 flex items-center justify-center text-on-primary text-xs font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    title="增加人數"
                    onClick={() => onHeadcountChange(Math.min(100, headcount + 5))}
                    className="w-6 h-6 rounded bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 flex items-center justify-center text-on-primary text-xs font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Per Person Budget */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex flex-col gap-space-xxs shadow-sm border border-surface-container-lowest/10">
            <span className="font-label-md text-label-md text-tertiary-fixed uppercase tracking-wider flex items-center gap-space-xxs">
              <span className="material-symbols-outlined text-[16px]">payments</span>
              人均預算
            </span>
            <span className="font-headline-md text-headline-md text-tertiary-fixed font-bold">
              NT$ {perPersonBudget.toLocaleString()}
            </span>
            <span className="font-body-md text-body-md text-on-primary-container">含全日活動、餐宴與服務費</span>
          </div>

          {/* Card 4: Highlights */}
          <div 
            onClick={onScrollToTimeline}
            className="p-space-lg rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex flex-col justify-between gap-space-xxs shadow-sm border border-surface-container-lowest/10 cursor-pointer hover:bg-surface-container-lowest/20 transition-colors"
          >
            <div>
              <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[16px]">star</span>
                特色亮點
              </span>
              <span className="font-title-md text-title-md text-on-primary line-clamp-1">
                餵食百斤斑王 x 午仔魚干
              </span>
            </div>
            <div className="flex items-center justify-between text-on-primary-container font-body-md text-body-md">
              <span className="line-clamp-1">龍膽海鮮盛宴 &amp; 膠筏競速</span>
              <span className="material-symbols-outlined text-[18px] text-secondary-fixed">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
