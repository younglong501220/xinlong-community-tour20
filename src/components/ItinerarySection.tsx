import React, { useState } from 'react';
import { ITINERARY_STOPS, BANQUET_MENU } from '../data/proposalData';

interface ItinerarySectionProps {
  headcount: number;
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ headcount }) => {
  const [expandedStopId, setExpandedStopId] = useState<string | null>(null);
  const [isMenuDetailOpen, setIsMenuDetailOpen] = useState(true);
  const [showVegetarianInfo, setShowVegetarianInfo] = useState(false);

  const toggleStopExpand = (id: string) => {
    setExpandedStopId(prev => (prev === id ? null : id));
  };

  const tablesCount = Math.ceil(headcount / 10);

  return (
    <section className="flex flex-col gap-space-xl" id="timeline">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm">
        <div className="flex flex-col gap-space-xxs">
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase flex items-center gap-space-xxs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            ITINERARY OVERVIEW
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            一、行程規劃 (Timeline)
          </h2>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container px-space-md py-space-xxs rounded-full">
          <span className="material-symbols-outlined text-secondary text-[18px]">schedule</span>
          <span className="font-title-md text-title-md text-on-surface">全日規劃 (09:30 - 17:00)</span>
        </div>
      </div>

      {/* Timeline Tracking Grid */}
      <div className="relative flex flex-col gap-space-lg pl-6 md:pl-10 before:absolute before:top-4 before:bottom-4 before:left-3 md:before:left-5 before:w-0.5 before:bg-surface-container-highest">
        {/* Stop 1 */}
        <div className="relative flex flex-col md:flex-row gap-space-md md:gap-space-lg items-start">
          <div className="absolute -left-6 md:-left-10 mt-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center ring-4 ring-surface">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col lg:flex-row gap-space-lg justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-space-xxs rounded-md bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-md text-label-md font-bold">
                  09:30 - 10:30
                </span>
                <span className="px-space-sm py-space-xxs rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  開場與巡遊
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                漁港單車巡禮 &amp; 社區深度導覽
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                專業導覽員帶領穿越漁村巷弄，介紹新龍社區如何從老舊漁村轉型為金牌農村。途經枋寮漁港紅燈塔、漁業歷史壁畫廊道與綠能養殖示範區，聆聽在地職人的動人奮鬥史。
              </p>

              {expandedStopId === 'stop-1' && (
                <div className="mt-space-xs p-space-sm bg-surface-container-low rounded-lg text-body-md text-on-surface-variant flex flex-col gap-1 border border-outline-variant/30 animate-in fade-in duration-200">
                  <span className="font-title-md text-title-md text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">explore</span>
                    遊程巡禮亮點
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-on-surface-variant">
                    <li>集合處：新龍社區活動中心前廣場，領取特約安全帽與變速單車</li>
                    <li>巡訪景點：枋寮漁港紅燈塔、海堤防波堤、彩繪歷史廊道、海水供水站</li>
                    <li>深入了解龍膽石斑養殖產業演進與全國第一座金牌漁村的永續創生</li>
                  </ul>
                </div>
              )}

              <div className="pt-space-xxs">
                <button
                  type="button"
                  onClick={() => toggleStopExpand('stop-1')}
                  className="text-secondary font-title-md text-sm inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {expandedStopId === 'stop-1' ? 'expand_less' : 'expand_more'}
                  </span>
                  {expandedStopId === 'stop-1' ? '收起詳細資訊' : '查看巡訪景點與騎乘細節'}
                </button>
              </div>
            </div>

            <div className="flex lg:flex-col items-center lg:items-end justify-between shrink-0 gap-space-xs bg-surface-container-low p-space-md rounded-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[16px] text-secondary">pedal_bike</span>
                枋寮鐵馬輕旅行
              </span>
              <span className="font-title-md text-title-md text-primary">全隊單車配賦</span>
            </div>
          </div>
        </div>

        {/* Stop 2 */}
        <div className="relative flex flex-col md:flex-row gap-space-md md:gap-space-lg items-start">
          <div className="absolute -left-6 md:-left-10 mt-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center ring-4 ring-surface">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col lg:flex-row gap-space-lg justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-space-xxs rounded-md bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md font-bold">
                  10:30 - 12:00
                </span>
                <span className="px-space-sm py-space-xxs rounded-md bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">
                  生態亮點體驗
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                餵食龍膽石斑魚體驗
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                穿戴裝備走進魚塭，近距離體驗餵食重達數百斤的「斑王」龍膽石斑，充滿震撼力！親身觀察石斑翻騰爭食的壯觀瞬間，並認識結合智慧監控的純海水養殖技術。
              </p>

              {expandedStopId === 'stop-2' && (
                <div className="mt-space-xs p-space-sm bg-surface-container-low rounded-lg text-body-md text-on-surface-variant flex flex-col gap-1 border border-outline-variant/30 animate-in fade-in duration-200">
                  <span className="font-title-md text-title-md text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">info</span>
                    餵食須知與安全裝備
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-on-surface-variant">
                    <li>提供專業長筒涉水鞋、防滑手套與專用餌料舀具</li>
                    <li>魚塭巡池步道兩側均有防護圍欄與合格救生指導員在旁輔導</li>
                    <li>近距離拍攝石斑躍起獵食的壯觀水花，是絕佳公司團體拍照打卡點</li>
                  </ul>
                </div>
              )}

              <div className="pt-space-xxs">
                <button
                  type="button"
                  onClick={() => toggleStopExpand('stop-2')}
                  className="text-secondary font-title-md text-sm inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {expandedStopId === 'stop-2' ? 'expand_less' : 'expand_more'}
                  </span>
                  {expandedStopId === 'stop-2' ? '收起詳細資訊' : '查看安全裝備與亮點說明'}
                </button>
              </div>
            </div>

            <div className="flex lg:flex-col items-center lg:items-end justify-between shrink-0 gap-space-xs bg-primary/5 p-space-md rounded-lg">
              <span className="font-label-sm text-label-sm text-primary flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[16px] text-primary">phishing</span>
                百斤斑王震撼互動
              </span>
              <span className="font-title-md text-title-md text-primary">救生裝備齊全</span>
            </div>
          </div>
        </div>

        {/* Stop 3 (Lunch Spotlight) */}
        <div className="relative flex flex-col md:flex-row gap-space-md md:gap-space-lg items-start">
          <div className="absolute -left-6 md:-left-10 mt-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-tertiary-fixed shadow-md flex items-center justify-center ring-4 ring-surface">
            <div className="w-3 h-3 rounded-full bg-tertiary"></div>
          </div>
          <div className="w-full bg-gradient-to-br from-surface-container-lowest to-tertiary-fixed/10 p-space-lg rounded-xl shadow-md flex flex-col gap-space-lg hover:shadow-lg transition-shadow border border-tertiary-fixed/30">
            {/* Top header row */}
            <div className="flex flex-col lg:flex-row gap-space-lg justify-between items-start">
              <div className="flex flex-col gap-space-xs max-w-2xl">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="px-space-sm py-space-xxs rounded-md bg-tertiary text-on-tertiary font-label-md text-label-md font-bold">
                    12:00 - 13:30
                  </span>
                  <span className="px-space-sm py-space-xxs rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                    產地旬味午宴
                  </span>
                  <span className="px-space-sm py-space-xxs rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-space-xxs">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    產銷履歷 ‧ 地產地消
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  在地海鮮風味餐 (龍膽石斑盛宴)
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  享用由龍膽石斑、龍虎斑、午仔魚及在地時蔬砌成的海鮮桌菜，體現極致鮮甜。菜色嚴選產銷履歷水產，品嚐富含膠原蛋白的涮石斑魚片鍋、清蒸蔥油龍虎斑與酥炸紅甘。
                </p>
              </div>

              <div className="flex lg:flex-col items-center lg:items-end justify-between shrink-0 gap-space-xs bg-tertiary-fixed/40 p-space-md rounded-lg w-full lg:w-auto border border-tertiary-fixed/50">
                <span className="font-label-sm text-label-sm text-on-tertiary-fixed flex items-center gap-space-xxs">
                  <span className="material-symbols-outlined text-[16px]">restaurant</span>
                  $5,500/桌 頂級海味
                </span>
                <span className="font-title-md text-title-md text-primary">
                  共 {tablesCount} 桌 (含包廂)
                </span>
              </div>
            </div>

            {/* Menu toggle & list */}
            <div className="mt-space-xs pt-space-md border-t border-outline-variant/30 flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                <div className="flex items-center gap-space-xs text-primary font-title-md text-title-md">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">menu_book</span>
                  <span>龍膽石斑風味桌菜 10 道精選料理清單</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    主廚手作 ‧ 每席 10 人份 ‧ 葷素/過敏原可彈性調整
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMenuDetailOpen(!isMenuDetailOpen)}
                    className="p-1 rounded text-primary hover:bg-tertiary-fixed/30 cursor-pointer"
                    title={isMenuDetailOpen ? '收起菜單' : '展開菜單'}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isMenuDetailOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                </div>
              </div>

              {isMenuDetailOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm animate-in fade-in duration-200">
                  {BANQUET_MENU.map(dish => (
                    <div
                      key={dish.id}
                      className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest/80 shadow-sm border border-outline-variant/20 hover:border-tertiary-fixed transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-md text-label-md shrink-0">
                        {dish.id}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-title-md text-title-md text-primary">
                            {dish.name}
                          </span>
                          <span className={`px-space-xxs py-0 rounded ${dish.tagClass} font-label-sm text-label-sm`}>
                            {dish.tag}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {dish.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Dietary notes bar */}
              <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs text-on-surface-variant font-body-md text-body-md">
                <div className="flex items-center gap-space-xxs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">info</span>
                  <span>
                    素食同仁（蛋奶素/全素）可提前 3 天預訂客製化個人精緻蔬食套餐，毋須額外加價。
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowVegetarianInfo(!showVegetarianInfo)}
                    className="font-label-sm text-label-sm text-primary underline cursor-pointer"
                  >
                    {showVegetarianInfo ? '收起素食菜單' : '查看精緻素食套餐內容'}
                  </button>
                  <span className="font-label-sm text-label-sm text-secondary font-bold shrink-0">
                    附特調冷泡茶與鮮果汁無限暢飲
                  </span>
                </div>
              </div>

              {showVegetarianInfo && (
                <div className="p-space-sm rounded-lg bg-tertiary-fixed/15 border border-tertiary-fixed/30 text-on-surface font-body-md text-body-md animate-in fade-in duration-200">
                  <span className="font-title-md text-primary flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">spa</span>
                    精緻個人蔬食套餐（蛋奶素 / 全素皆可）：
                  </span>
                  <p className="text-on-surface-variant">
                    前菜三品（黑豆/涼拌川七/牛蒡絲）➔ 猴頭菇養生膠原盅 ➔ 樹子清蒸素鱈魚 ➔ 百果彩椒炒蘆筍 ➔ 麻油素腰花 ➔ 櫻花果香菇素米糕 ➔ 季節時令甜湯與鮮果。
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stop 4 */}
        <div className="relative flex flex-col md:flex-row gap-space-md md:gap-space-lg items-start">
          <div className="absolute -left-6 md:-left-10 mt-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center ring-4 ring-surface">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col lg:flex-row gap-space-lg justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-space-xxs rounded-md bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-md text-label-md font-bold">
                  13:30 - 15:00
                </span>
                <span className="px-space-sm py-space-xxs rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  團隊凝聚動力
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                團體動力：龍的傳人 或 蚵嘔 (摸魚)
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                透過划膠筏競賽或下水摸魚體驗，提升團隊協作與向心力。分組接力划動傳統竹膠筏，考驗同仁間的口令協調與默契，在大自然魚塭中歡笑釋放辦公室壓力。
              </p>

              {expandedStopId === 'stop-4' && (
                <div className="mt-space-xs p-space-sm bg-surface-container-low rounded-lg text-body-md text-on-surface-variant flex flex-col gap-1 border border-outline-variant/30 animate-in fade-in duration-200">
                  <span className="font-title-md text-title-md text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">groups</span>
                    分組競賽玩法
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-on-surface-variant">
                    <li>4-5 人一組同乘傳統竹膠筏，自起點鳴笛後划向折返標誌旗</li>
                    <li>岸上設有應援鼓與加油計時看板，勝出組別頒贈新龍特色冠軍禮包</li>
                    <li>備有防水青蛙裝、救生衣及專業教練指導防護</li>
                  </ul>
                </div>
              )}

              <div className="pt-space-xxs">
                <button
                  type="button"
                  onClick={() => toggleStopExpand('stop-4')}
                  className="text-secondary font-title-md text-sm inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {expandedStopId === 'stop-4' ? 'expand_less' : 'expand_more'}
                  </span>
                  {expandedStopId === 'stop-4' ? '收起詳細資訊' : '查看膠筏競賽賽制與獎勵'}
                </button>
              </div>
            </div>

            <div className="flex lg:flex-col items-center lg:items-end justify-between shrink-0 gap-space-xs bg-surface-container-low p-space-md rounded-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[16px] text-secondary">rowing</span>
                Team Building 競賽
              </span>
              <span className="font-title-md text-title-md text-primary">分隊計時錦標</span>
            </div>
          </div>
        </div>

        {/* Stop 5 */}
        <div className="relative flex flex-col md:flex-row gap-space-md md:gap-space-lg items-start">
          <div className="absolute -left-6 md:-left-10 mt-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center ring-4 ring-surface">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col lg:flex-row gap-space-lg justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-space-xxs rounded-md bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md font-bold">
                  15:00 - 16:30
                </span>
                <span className="px-space-sm py-space-xxs rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  手作工坊
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                午仔魚一夜干 DIY 製作
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                在職人指導下，從魚體處理到抹鹽保存，親手製作一份可帶回家的在地伴手禮。深入了解海洋食物鏈保護與保鮮古法，帶回真空包裝的手作一夜干成果。
              </p>

              {expandedStopId === 'stop-5' && (
                <div className="mt-space-xs p-space-sm bg-surface-container-low rounded-lg text-body-md text-on-surface-variant flex flex-col gap-1 border border-outline-variant/30 animate-in fade-in duration-200">
                  <span className="font-title-md text-title-md text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">kitchen</span>
                    一夜干古法製作與保存秘訣
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-on-surface-variant">
                    <li>嚴選當日清晨現撈枋寮在地優質午仔魚</li>
                    <li>親自學習「背開法」、清洗去除微血管、浸泡特調海洋深層海鹽水</li>
                    <li>完成後現場使用日本進口真空封口機包裝，附贈保冰提袋，可常溫保冷 6 小時</li>
                  </ul>
                </div>
              )}

              <div className="pt-space-xxs">
                <button
                  type="button"
                  onClick={() => toggleStopExpand('stop-5')}
                  className="text-secondary font-title-md text-sm inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {expandedStopId === 'stop-5' ? 'expand_less' : 'expand_more'}
                  </span>
                  {expandedStopId === 'stop-5' ? '收起詳細資訊' : '查看食材規格與冷鏈保存說明'}
                </button>
              </div>
            </div>

            <div className="flex lg:flex-col items-center lg:items-end justify-between shrink-0 gap-space-xs bg-surface-container-low p-space-md rounded-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[16px] text-primary">inventory_2</span>
                一人一尾冷鏈真空
              </span>
              <span className="font-title-md text-title-md text-primary">自製伴手禮</span>
            </div>
          </div>
        </div>

        {/* Stop 6 */}
        <div className="relative flex flex-col md:flex-row gap-space-md md:gap-space-lg items-start">
          <div className="absolute -left-6 md:-left-10 mt-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center ring-4 ring-surface">
            <div className="w-3 h-3 rounded-full bg-outline"></div>
          </div>
          <div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col lg:flex-row gap-space-lg justify-between hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-space-xxs rounded-md bg-surface-container-high text-on-surface-variant font-label-md text-label-md font-bold">
                  16:30 - 17:00
                </span>
                <span className="px-space-sm py-space-xxs rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  圓滿閉幕
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                伴手禮選購與賦歸
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                採購龍膽石斑現兔酥、膠原蛋白保養品等特色產品，帶著滿滿回憶回家。支持社區循環經濟文創品，集合搭乘專車返程。
              </p>

              {expandedStopId === 'stop-6' && (
                <div className="mt-space-xs p-space-sm bg-surface-container-low rounded-lg text-body-md text-on-surface-variant flex flex-col gap-1 border border-outline-variant/30 animate-in fade-in duration-200">
                  <span className="font-title-md text-title-md text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-outline">verified</span>
                    金牌農村永續循環伴手禮推薦
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-on-surface-variant">
                    <li>新龍獨創「魚鱗膠原蛋白萃取」：膠原晶凍、精華液、修護面膜</li>
                    <li>產銷履歷真空急凍水產：頂級厚切龍膽石斑魚排、嚴選午仔魚</li>
                    <li>福委團購專案：當日填單享企業同仁專屬 9 折及免費冷凍宅配到公司</li>
                  </ul>
                </div>
              )}

              <div className="pt-space-xxs">
                <button
                  type="button"
                  onClick={() => toggleStopExpand('stop-6')}
                  className="text-secondary font-title-md text-sm inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {expandedStopId === 'stop-6' ? 'expand_less' : 'expand_more'}
                  </span>
                  {expandedStopId === 'stop-6' ? '收起詳細資訊' : '查看特產清單與福委會宅配折扣'}
                </button>
              </div>
            </div>

            <div className="flex lg:flex-col items-center lg:items-end justify-between shrink-0 gap-space-xs bg-surface-container-low p-space-md rounded-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xxs">
                <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                金牌特產伴手禮
              </span>
              <span className="font-title-md text-title-md text-primary">賦歸回程</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
