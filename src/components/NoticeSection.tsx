import React from 'react';

export const NoticeSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-space-xl" id="notice">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm">
        <div className="flex flex-col gap-space-xxs">
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase flex items-center gap-space-xxs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            SAFETY &amp; CONTINGENCY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            三、貼心提醒與備案 (Notice &amp; Rainy Day Plan)
          </h2>
        </div>
        <span className="font-label-md text-label-md text-on-surface-variant">
          以安全為最高指導原則
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {/* Notice Card */}
        <div className="p-space-xl bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant/20 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-space-xs text-primary">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">wb_sunny</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm">戶外活動防曬與著裝建議</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">屏東海岸氣候因應方案</p>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm text-on-surface-variant font-body-lg text-body-lg">
            <p>
              漁村活動多為戶外性質，請參與員工自備防曬用品、遮陽帽、防蚊液及充足飲水瓶。
            </p>
            <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xxs">
              <span className="font-title-md text-title-md text-on-surface">個人準備物品清單：</span>
              <ul className="list-disc list-inside space-y-1 font-body-md text-body-md text-on-surface-variant">
                <li>健保卡、個人習慣用藥</li>
                <li>快乾防滑布鞋或運動休閒鞋（切勿穿著細高跟鞋）</li>
                <li>水上活動換洗衣物一套與輕便毛巾</li>
                <li>環保保溫水壺（現場提供冰涼決明子冬瓜茶補給）</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contingency Plan Card */}
        <div className="p-space-xl bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md border border-outline-variant/20 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-space-xs text-primary">
            <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
              <span className="material-symbols-outlined">rainy</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm">天候大雨備案計畫</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">舒適安全的室內轉化流程</p>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm text-on-surface-variant font-body-lg text-body-lg">
            <p>
              若遇天候不佳，戶外行程將轉為室內石斑魚丸 DIY 或手縫漁網體驗，確保活動不中斷，全體同仁於社區活動中心安全室內空間進行。
            </p>
            <div className="p-space-md rounded-lg bg-secondary-fixed/20 flex flex-col gap-space-xxs">
              <span className="font-title-md text-title-md text-on-secondary-fixed-variant">室內備案流程彈性切換：</span>
              <ul className="list-disc list-inside space-y-1 font-body-md text-body-md text-on-secondary-fixed-variant">
                <li>09:30 - 10:30：新龍社區故事館 4K 影音導覽與魚鱗膠原蛋白萃取實體展示</li>
                <li>13:30 - 15:00：職人手作古法「彈牙石斑魚丸」實作品嚐賽</li>
                <li>15:00 - 16:30：室內午仔魚一夜干真空教學完整保留</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Assembly & Logistics Bar */}
      <div className="p-space-lg bg-surface-container-low rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md border border-outline-variant/20">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-secondary text-[28px] shrink-0">directions_bus</span>
          <div className="flex flex-col">
            <span className="font-title-md text-title-md text-primary">當日集合與交通抵達導引</span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              遊覽車專屬停靠處：屏東縣枋寮鄉新龍社區活動中心前廣場 (附設寬敞迴車空間與專人導引)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs shrink-0">
          <span className="px-space-md py-1 bg-surface-container-lowest rounded-full font-label-md text-label-md text-secondary border border-secondary/20">
            報到時間：09:15 - 09:30
          </span>
        </div>
      </div>
    </section>
  );
};
