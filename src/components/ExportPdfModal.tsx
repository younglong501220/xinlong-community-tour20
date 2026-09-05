import React, { useEffect } from 'react';
import { LOGO_URL, ITINERARY_STOPS, BANQUET_MENU } from '../data/proposalData';

interface ExportPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  headcount: number;
  grandTotal: number;
  perPersonCost: number;
}

export const ExportPdfModal: React.FC<ExportPdfModalProps> = ({
  isOpen,
  onClose,
  headcount,
  grandTotal,
  perPersonCost
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('export-pdf-modal-open');
      return () => {
        document.body.classList.remove('export-pdf-modal-open');
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="export-pdf-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-in fade-in duration-200 print:static print:p-0 print:bg-transparent print:z-auto print:block print:w-full">
      <div 
        className="export-pdf-dialog relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/30 max-h-[90vh] flex flex-col print:max-h-none print:h-auto print:max-w-none print:shadow-none print:border-0 print:rounded-none print:overflow-visible print:block print:w-full"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header - Hidden on Print */}
        <div className="bg-primary text-on-primary px-space-lg py-space-md flex items-center justify-between shrink-0 no-print print:hidden">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
              print
            </span>
            <div>
              <h3 className="font-title-md text-title-md text-on-primary">
                企劃書簡報預覽與列印匯出
              </h3>
              <p className="text-xs text-primary-fixed">
                新龍社區金牌農村 企業員工旅遊企劃書 (10/15 專屬檔期)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-on-secondary text-sm font-semibold hover:bg-secondary/90 transition-colors cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>立即列印 / 另存 PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Printable proposal document container */}
        <div className="p-space-xl overflow-y-auto flex-1 bg-white text-on-surface print-document-content print:p-0 print:overflow-visible print:h-auto print:max-h-none print:block">
          {/* Printable Document Header */}
          <div className="border-b-2 border-primary pb-3 flex items-center justify-between print:pb-2">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="新龍社區 Logo"
                className="h-12 w-auto object-contain print:h-10"
              />
              <div>
                <h1 className="text-xl font-bold text-primary print:text-lg">
                  新龍社區金牌農村 企業員工旅遊企劃書
                </h1>
                <p className="text-xs text-on-surface-variant print:text-[11px]">
                  行政院農業部金牌農村認證 ‧ 屏東縣枋寮鄉新龍社區發展協會
                </p>
              </div>
            </div>
            <div className="text-right text-xs text-on-surface-variant print:text-[11px]">
              <div>提案日期：2024 年 9 月</div>
              <div>目標活動日：10/15 (週二)</div>
              <div className="font-bold text-primary">人數基準：{headcount} 人</div>
            </div>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-3 gap-3 my-3 p-3 bg-surface-container-low rounded-lg text-xs print:my-2 print:p-2 print:border print:border-gray-200">
            <div>
              <span className="font-bold text-primary block">活動地點：</span>
              <span>屏東縣枋寮鄉新龍社區活動中心及周邊魚塭</span>
            </div>
            <div>
              <span className="font-bold text-primary block">預估總費用：</span>
              <span className="font-bold text-secondary text-sm print:text-xs">
                NT$ {grandTotal.toLocaleString()} (含15%服務費)
              </span>
            </div>
            <div>
              <span className="font-bold text-primary block">平均每人負擔：</span>
              <span className="font-bold text-tertiary text-sm print:text-xs">
                NT$ {perPersonCost.toLocaleString()} / 人
              </span>
            </div>
          </div>

          {/* Timeline Table */}
          <div className="my-3 print:my-2 print-break-inside-avoid">
            <h2 className="text-sm font-bold text-primary border-l-4 border-secondary pl-2 mb-1.5 print:text-xs print:mb-1">
              當日行程規劃 (09:30 - 17:00)
            </h2>
            <div className="border border-outline-variant/40 rounded-lg overflow-hidden text-xs print:text-[11px] print:rounded print:border-gray-300">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low font-semibold text-primary">
                  <tr>
                    <th className="p-2 w-28 print:py-1 print:px-2 print:w-24">時間</th>
                    <th className="p-2 w-48 print:py-1 print:px-2 print:w-44">體驗項目</th>
                    <th className="p-2 print:py-1 print:px-2">核心內容</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 print:divide-gray-200">
                  {ITINERARY_STOPS.map(stop => (
                    <tr key={stop.id} className="print-break-inside-avoid">
                      <td className="p-2 font-mono font-bold text-secondary print:py-1 print:px-2">{stop.time}</td>
                      <td className="p-2 font-semibold text-primary print:py-1 print:px-2">{stop.title}</td>
                      <td className="p-2 text-on-surface-variant print:py-1 print:px-2 leading-relaxed">{stop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Banquet Menu */}
          <div className="my-3 print:my-2 print-break-inside-avoid">
            <h2 className="text-sm font-bold text-primary border-l-4 border-tertiary pl-2 mb-1.5 print:text-xs print:mb-1">
              在地海鮮風味桌菜 (龍膽石斑盛宴 10 道料理)
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs print:gap-1.5 print:text-[11px]">
              {BANQUET_MENU.map(dish => (
                <div
                  key={dish.id}
                  className="p-2 border border-outline-variant/30 rounded bg-surface-container-lowest flex justify-between items-center print:py-1 print:px-2 print:border-gray-300 print-break-inside-avoid"
                >
                  <span className="font-medium text-primary">
                    {dish.id}. {dish.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant print:border print:border-gray-200">
                    {dish.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notice and Weather */}
          <div className="my-3 p-2.5 bg-surface-container-low rounded-lg text-xs text-on-surface-variant flex flex-col gap-1 print:my-2 print:p-2 print:text-[10.5px] print:border print:border-gray-200 print-break-inside-avoid">
            <span className="font-bold text-primary">行前須知與雨天備案：</span>
            <p>
              ‧ 請自備遮陽帽、防蚊液、水壺及水上活動換洗衣物。
            </p>
            <p>
              ‧ 天候不佳時，活動平移至社區室內故事館進行 4K 影音導覽、手作彈牙石斑魚丸與一夜干真空包裝教學，活動豐富度不減。
            </p>
            <p>
              ‧ 集合地點：屏東縣枋寮鄉新龍社區活動中心前廣場，專用遊覽車迴轉空間。
            </p>
          </div>

          {/* Footer Contact */}
          <div className="pt-2 border-t border-outline-variant/30 text-xs text-on-surface-variant flex justify-between items-center print:pt-1.5 print:text-[10px] print:border-gray-300 print-break-inside-avoid">
            <span>屏東縣枋寮鄉新龍社區發展協會 ‧ 企劃部</span>
            <span>洽詢專線：(08) 878-1234 ｜ contact@xinlong-village.tw</span>
          </div>
        </div>

        {/* Modal Footer Controls - Hidden on Print */}
        <div className="bg-surface-container-low px-space-lg py-space-xs flex justify-between items-center shrink-0 border-t border-outline-variant/20 no-print print:hidden">
          <span className="text-xs text-on-surface-variant">
            提示：點擊右上角「立即列印」可調用瀏覽器列印功能直接另存為標準 A4 PDF 檔案。
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-space-md py-1.5 rounded-lg text-xs font-semibold bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            關閉預覽
          </button>
        </div>
      </div>
    </div>
  );
};
