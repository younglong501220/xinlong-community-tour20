import React from 'react';
import { SERVICE_FEE_RATE } from '../data/proposalData';

interface BudgetCalculatorSectionProps {
  headcount: number;
  onHeadcountChange: (count: number) => void;
}

export const BudgetCalculatorSection: React.FC<BudgetCalculatorSectionProps> = ({
  headcount,
  onHeadcountChange
}) => {
  // Calculations
  const guideTeams = Math.ceil(headcount / 20);
  const guideCost = guideTeams * 1200;

  const bikeCost = headcount * 200;
  const feedCost = headcount * 300;

  const tablesCount = Math.ceil(headcount / 10);
  const mealCost = tablesCount * 5500;

  const waterCost = headcount * 500;
  const diyCost = headcount * 450;

  const subtotal = guideCost + bikeCost + feedCost + mealCost + waterCost + diyCost;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  const grandTotal = subtotal + serviceFee;
  const perPersonCost = Math.round(grandTotal / headcount);

  return (
    <section className="flex flex-col gap-space-xl" id="budget">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm">
        <div className="flex flex-col gap-space-xxs">
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase flex items-center gap-space-xxs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            FINANCIAL TRANSPARENCY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            二、費用預算 ({headcount}人團體試算)
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="px-space-sm py-space-xxs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md">
            高CP值企業福委方案
          </span>
          <span className="px-space-sm py-space-xxs rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">
            全透明收費
          </span>
          <span className="px-space-sm py-space-xxs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md">
            在地採購支持農村
          </span>
        </div>
      </div>

      {/* Headcount adjustment bar */}
      <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[22px]">tune</span>
          <span className="font-title-md text-title-md text-primary">自訂企劃參加人數：</span>
          <span className="font-headline-sm text-headline-sm text-secondary font-bold">
            {headcount} 人
          </span>
          {headcount !== 20 && (
            <button
              type="button"
              onClick={() => onHeadcountChange(20)}
              className="text-xs text-on-surface-variant underline hover:text-primary cursor-pointer ml-2"
            >
              重設為標準 20 人
            </button>
          )}
        </div>

        <div className="flex items-center gap-space-xs flex-wrap">
          <span className="text-body-md text-on-surface-variant">快速切換：</span>
          {[15, 20, 30, 40, 50].map(cnt => (
            <button
              key={cnt}
              type="button"
              onClick={() => onHeadcountChange(cnt)}
              className={`px-space-sm py-1 rounded-md text-sm font-title-md transition-colors cursor-pointer ${
                headcount === cnt
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
              }`}
            >
              {cnt} 人{cnt === 20 ? ' (企劃案基準)' : ''}
            </button>
          ))}
          <div className="flex items-center gap-1 border-l border-outline-variant/30 pl-2">
            <button
              type="button"
              onClick={() => onHeadcountChange(Math.max(10, headcount - 1))}
              className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center font-bold text-primary cursor-pointer"
            >
              -
            </button>
            <input
              type="number"
              min="10"
              max="150"
              value={headcount}
              onChange={e => {
                const val = parseInt(e.target.value);
                if (!isNaN(val) && val >= 5) onHeadcountChange(val);
              }}
              className="w-14 text-center py-1 border border-outline-variant rounded text-sm font-semibold"
            />
            <button
              type="button"
              onClick={() => onHeadcountChange(Math.min(150, headcount + 1))}
              className="w-7 h-7 rounded bg-surface-container hover:bg-surface-container-high flex items-center justify-center font-bold text-primary cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Financial Callout Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md items-stretch">
        <div className="lg:col-span-2 p-space-xl bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between gap-space-md border border-outline-variant/20">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-primary">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
              <span className="font-title-md text-title-md">總金額說明與預算效益</span>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              包含所有體驗項目、餐飲及 15% 社區服務費，平均每人僅需 ${perPersonCost.toLocaleString()}，符合企業預算控管。所有體驗皆包含專人專業解說與場地設備耗材，絕無隱藏自費項目。
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-md text-body-md pt-space-xs border-t border-outline-variant/20">
            <span className="flex items-center gap-space-xxs">
              <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
              統一開立正式農會/社區收據
            </span>
            <span className="flex items-center gap-space-xxs">
              <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
              企業統編核銷無虞
            </span>
            <span className="flex items-center gap-space-xxs">
              <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
              含公共意外責任險
            </span>
          </div>
        </div>

        <div className="p-space-xl bg-primary text-on-primary rounded-xl shadow-md flex flex-col justify-center gap-space-xs">
          <span className="font-label-md text-label-md text-primary-fixed uppercase tracking-wider">
            應收總計費用 ({headcount}位基準)
          </span>
          <div className="font-metric-display text-metric-display text-on-primary font-bold">
            NT$ {grandTotal.toLocaleString()}
          </div>
          <div className="flex items-center justify-between pt-space-xs border-t border-primary-container">
            <span className="font-body-md text-body-md text-on-primary-container">平均人均負擔</span>
            <span className="font-headline-sm text-headline-sm text-tertiary-fixed font-bold">
              NT$ {perPersonCost.toLocaleString()} / 人
            </span>
          </div>
        </div>
      </div>

      {/* Detailed Financial Table */}
      <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/20">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-md text-body-md">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-title-md text-title-md border-b border-outline-variant/20">
                <th className="py-space-md px-space-lg">項目內容</th>
                <th className="py-space-md px-space-lg text-right">費用 (TWD)</th>
                <th className="py-space-md px-space-lg">備註說明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              <tr className="hover:bg-surface-container/50 transition-colors">
                <td className="py-space-md px-space-lg font-title-md text-primary">社區專人導覽</td>
                <td className="py-space-md px-space-lg text-right font-title-md tabular-nums text-primary">
                  ${guideCost.toLocaleString()}
                </td>
                <td className="py-space-md px-space-lg text-on-surface-variant">
                  每隊上限 20 人，金牌資深解說員全場帶隊 ({guideTeams} 隊)
                </td>
              </tr>

              <tr className="hover:bg-surface-container/50 transition-colors">
                <td className="py-space-md px-space-lg font-title-md text-primary">漁港單車租借</td>
                <td className="py-space-md px-space-lg text-right font-title-md tabular-nums text-primary">
                  ${bikeCost.toLocaleString()}
                </td>
                <td className="py-space-md px-space-lg text-on-surface-variant">
                  $200/人 x {headcount} 人 (含安全帽、調校與保險)
                </td>
              </tr>

              <tr className="hover:bg-surface-container/50 transition-colors">
                <td className="py-space-md px-space-lg font-title-md text-primary">餵食石斑體驗</td>
                <td className="py-space-md px-space-lg text-right font-title-md tabular-nums text-primary">
                  ${feedCost.toLocaleString()}
                </td>
                <td className="py-space-md px-space-lg text-on-surface-variant">
                  $300/人 x {headcount} 人 (含餌料、防護用具、專業養殖師協防)
                </td>
              </tr>

              <tr className="hover:bg-surface-container/50 transition-colors">
                <td className="py-space-md px-space-lg font-title-md text-primary">在地海鮮風味餐</td>
                <td className="py-space-md px-space-lg text-right font-title-md tabular-nums text-primary">
                  ${mealCost.toLocaleString()}
                </td>
                <td className="py-space-md px-space-lg text-on-surface-variant">
                  $5,500/桌 x {tablesCount} 桌 (含包廂專屬服務、茶水飲料)
                </td>
              </tr>

              <tr className="hover:bg-surface-container/50 transition-colors">
                <td className="py-space-md px-space-lg font-title-md text-primary">水上活動 (劃筏/摸魚)</td>
                <td className="py-space-md px-space-lg text-right font-title-md tabular-nums text-primary">
                  ${waterCost.toLocaleString()}
                </td>
                <td className="py-space-md px-space-lg text-on-surface-variant">
                  $500/人 x {headcount} 人 (含安全救生員2名、防水圍裙雨鞋)
                </td>
              </tr>

              <tr className="hover:bg-surface-container/50 transition-colors">
                <td className="py-space-md px-space-lg font-title-md text-primary">午仔魚一夜干 DIY</td>
                <td className="py-space-md px-space-lg text-right font-title-md tabular-nums text-primary">
                  ${diyCost.toLocaleString()}
                </td>
                <td className="py-space-md px-space-lg text-on-surface-variant">
                  $450/人 x {headcount} 人 (每人成品含保冰袋與真空包裝)
                </td>
              </tr>

              <tr className="bg-surface-container-low font-title-md">
                <td className="py-space-md px-space-lg text-on-surface">小計 (體驗及餐飲)</td>
                <td className="py-space-md px-space-lg text-right text-primary tabular-nums">
                  ${subtotal.toLocaleString()}
                </td>
                <td className="py-space-md px-space-lg text-on-surface-variant">
                  淨遊程直接成本
                </td>
              </tr>

              <tr className="bg-surface-container-low font-title-md">
                <td className="py-space-md px-space-lg text-on-surface">社區服務費 (15%)</td>
                <td className="py-space-md px-space-lg text-right text-primary tabular-nums">
                  ${serviceFee.toLocaleString()}
                </td>
                <td className="py-space-md px-space-lg text-on-surface-variant">
                  團體/企業客製化遊程行政費、統籌聯絡與場地清潔
                </td>
              </tr>

              <tr className="bg-primary/10 font-bold border-t-2 border-primary/20">
                <td className="py-space-lg px-space-lg text-primary font-headline-sm text-headline-sm">
                  總計
                </td>
                <td className="py-space-lg px-space-lg text-right text-primary font-headline-sm text-headline-sm tabular-nums">
                  ${grandTotal.toLocaleString()}
                </td>
                <td className="py-space-lg px-space-lg text-primary font-headline-sm text-headline-sm">
                  每人平均 ${perPersonCost.toLocaleString()} (實惠精緻)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
