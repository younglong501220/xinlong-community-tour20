import React from 'react';

interface DocPreviewModalProps {
  title: string | null;
  onClose: () => void;
}

export const DocPreviewModal: React.FC<DocPreviewModalProps> = ({ title, onClose }) => {
  if (!title) return null;

  const getContent = () => {
    switch (title) {
      case '行程確認與遊覽車動線圖':
        return {
          badge: '交通動線指引',
          details: [
            '導航定位點：屏東縣枋寮鄉新龍村義民路 201 號（新龍社區活動中心）',
            '大型遊覽車動線：國道 3 號南州交流道下 ➔ 台 1 線往南行駛至枋寮 ➔ 轉接台 17 線 ➔ 依新龍金牌農村路標右轉進入義民路',
            '活動中心設有可容納 4 輛 43 人座大客車之平整專用停車區，並有社區交管義工現場導引引導倒車迴轉',
            '司機專屬休息室備有冷飲茶水與空調，供遊覽車駕駛同仁休憩'
          ]
        };
      case '石斑魚鱗膠原蛋白 DIY 講義':
        return {
          badge: '循環經濟食農教材',
          details: [
            '新龍社區榮獲金牌農村代表作：廢棄魚鱗高值化綠色再生',
            '魚鱗富含第 I 型膠原蛋白，胜肽分子小易吸收',
            '課程流程：魚鱗高溫微波酵素水解 ➔ 濃縮提煉純化 ➔ 調製個人天然果香保濕晶凍',
            '每位同仁可親手封裝 2 瓶特製龍膽膠原晶凍帶回保養'
          ]
        };
      case '投保團體旅遊意外險證明名冊':
        return {
          badge: '安全保險認證',
          details: [
            '全場域投保新台幣 3,400 萬元公共意外責任保險',
            '水域活動（划膠筏/摸魚體驗）額外附加水上特定活動意外險每人 200 萬元 / 傷害醫療 20 萬元',
            '活動前 3 日由主辦福委窗口提供參加人員名冊以利名冊造冊上傳主管機關備查',
            '配合屏東縣枋寮消防分隊建立緊急綠色救援醫療動線通道'
          ]
        };
      case '雨天應變備案場地規範說明':
        return {
          badge: '天候備案手冊',
          details: [
            '備案啟動標準：活動前一日下午 17:00 依中央氣象署降雨機率預報達 70% 或活動當日突發豪大雨',
            '室內主場館：新龍活動中心 2 樓多功能大禮堂（全空調、視聽設備完備）',
            '替換活動：單車巡禮改為「4K 漁村故事館影音導覽 + 魚鱗膠原體驗」；水上競速改為「彈牙石斑鮮魚丸古法手作捏製賽」',
            '原定之 10 道龍膽石斑頂級午宴及午仔魚一夜干真空 DIY 均在室內空調餐廳進行，不受任何風雨影響'
          ]
        };
      default:
        return {
          badge: '企劃文件',
          details: ['相關文件檔案由屏東縣枋寮鄉新龍社區發展協會提供備查。']
        };
    }
  };

  const docData = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/30 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-primary text-on-primary px-space-lg py-space-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
              description
            </span>
            <span className="font-title-md text-title-md text-on-primary">{title}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-space-lg flex flex-col gap-space-md">
          <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md self-start">
            {docData.badge}
          </span>
          <div className="p-space-md bg-surface-container-low rounded-xl border border-outline-variant/30 flex flex-col gap-2">
            <ul className="list-disc list-inside space-y-2 text-body-md text-on-surface-variant">
              {docData.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-title-md hover:bg-primary-container transition-colors cursor-pointer"
            >
              了解並關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
