import { ItineraryStop, MenuItem, BudgetItem } from '../types';

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuALrJyg0eXWEEDvQc85cIw1trlAdJL2Cn-h6tSK-yVoSCHGWK-DCVVwkdqgfd_NZHbRNK_tocILrzpeeqkyHn0Inv5HZ7b5338S-lx-rlUrw_5o1jHf3lfdgE4r1a70atPh0IGQpAz302_qbDn5CiLikoZq5p79ZSr5IilGdt1GDy0_IWMNMY0xWuI8vhBvK7WuACSRSPYi23bLae5XUQNmvgSMu18Dk1ODakBEtln12swra8bVagw';

export const HERO_BG_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAFPNpJWUC7rRFlQ4ofC2jCWQM3Ocli34CMuj85mZQZFYi9Okojnsh0gW03P6n6TF9FP5s1ZLyUwNHPnxDR_nISgmyH7iOhySSeeZdTsLhlNWiXbvF9Zt3Zs7JPVaGOA28zx87_NDvpdpD-r6X3vglitOiekWZRF6KOCO2IjXcrPMtxIMTjQc7RIwysFyH9mBBlj_zin8jrdV4OAzZ_9vx3jKMDjhHyPDFKEl16-xMGsuULkuEeN3g';

export const ITINERARY_STOPS: ItineraryStop[] = [
  {
    id: 'stop-1',
    time: '09:30 - 10:30',
    category: '開場與巡遊',
    categoryColorClass: 'bg-surface-container text-on-surface-variant',
    title: '漁港單車巡禮 & 社區深度導覽',
    description:
      '專業導覽員帶領穿越漁村巷弄，介紹新龍社區如何從老舊漁村轉型為金牌農村。途經枋寮漁港紅燈塔、漁業歷史壁畫廊道與綠能養殖示範區，聆聽在地職人的動人奮鬥史。',
    badge: '枋寮鐵馬輕旅行',
    badgeIcon: 'pedal_bike',
    subInfo: '全隊單車配賦',
    dotColorClass: 'bg-secondary',
    details: [
      '路線：新龍活動中心 ➔ 枋寮漁港紅燈塔 ➔ 彩繪漁村巷弄 ➔ 綠能光電共生池',
      '提供專用舒適變速自行車、安全帽與隨行補給車',
      '在地金牌解說員隨隊深入解說在地創生歷程'
    ],
    tips: '建議著輕便運動鞋與防曬薄外套'
  },
  {
    id: 'stop-2',
    time: '10:30 - 12:00',
    category: '生態亮點體驗',
    categoryColorClass: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    title: '餵食龍膽石斑魚體驗',
    description:
      '穿戴裝備走進魚塭，近距離體驗餵食重達數百斤的「斑王」龍膽石斑，充滿震撼力！親身觀察石斑翻騰爭食的壯觀瞬間，並認識結合智慧監控的純海水養殖技術。',
    badge: '百斤斑王震撼互動',
    badgeIcon: 'phishing',
    subInfo: '救生裝備齊全',
    dotColorClass: 'bg-primary',
    details: [
      '穿戴止滑涉水防護裝備與安全救生衣',
      '由資深養殖達人解說龍膽石斑食性與海水養殖生態',
      '投餵餌料瞬間感受數十尾百斤巨魚翻騰水花波瀾'
    ],
    tips: '現場備有防水圍裙與洗手消毒設施'
  },
  {
    id: 'stop-3',
    time: '12:00 - 13:30',
    category: '產地旬味午宴',
    categoryColorClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    title: '在地海鮮風味餐 (龍膽石斑盛宴)',
    description:
      '享用由龍膽石斑、龍虎斑、午仔魚及在地時蔬砌成的海鮮桌菜，體現極致鮮甜。菜色嚴選產銷履歷水產，品嚐富含膠原蛋白的涮石斑魚片鍋、清蒸蔥油龍虎斑與酥炸紅甘。',
    badge: '$5,500/桌 頂級海味',
    badgeIcon: 'restaurant',
    subInfo: '共 2 桌 (含包廂)',
    dotColorClass: 'bg-tertiary',
    details: [
      '10 人一席，共 10 道奢華海味桌菜',
      '冷氣專屬貴賓用餐包廂',
      '特調在地冷泡茶與鮮果汁無限暢飲',
      '蛋奶素/全素同仁可預訂獨立個人精緻蔬食套餐'
    ]
  },
  {
    id: 'stop-4',
    time: '13:30 - 15:00',
    category: '團隊凝聚動力',
    categoryColorClass: 'bg-surface-container text-on-surface-variant',
    title: '團體動力：龍的傳人 或 蚵嘔 (摸魚)',
    description:
      '透過划膠筏競賽或下水摸魚體驗，提升團隊協作與向心力。分組接力划動傳統竹膠筏，考驗同仁間的口令協調與默契，在大自然魚塭中歡笑釋放辦公室壓力。',
    badge: 'Team Building 競賽',
    badgeIcon: 'rowing',
    subInfo: '分隊計時錦標',
    dotColorClass: 'bg-secondary',
    details: [
      '分組膠筏計時競速賽，考驗方向控制與團隊步調',
      '淺水魚塭「摸魚」互動遊戲，趣味積分爭奪戰',
      '配備合格救生員 2 名全程岸上及水面戒護'
    ],
    tips: '備有更衣沐浴間，可攜帶替換衣物'
  },
  {
    id: 'stop-5',
    time: '15:00 - 16:30',
    category: '手作工坊',
    categoryColorClass: 'bg-surface-container text-on-surface-variant',
    title: '午仔魚一夜干 DIY 製作',
    description:
      '在職人指導下，從魚體處理到抹鹽保存，親手製作一份可帶回家的在地伴手禮。深入了解海洋食物鏈保護與保鮮古法，帶回真空包裝的手作一夜干成果。',
    badge: '一人一尾冷鏈真空',
    badgeIcon: 'inventory_2',
    subInfo: '自製伴手禮',
    dotColorClass: 'bg-primary',
    details: [
      '職人親自示範剖切、清除血合與特殊鹽漬比例調配',
      '每人可獲得 1 尾完整新鮮現醃午仔魚',
      '專業真空封口包裝，贈送專屬保冰袋方便帶回家烹煮'
    ]
  },
  {
    id: 'stop-6',
    time: '16:30 - 17:00',
    category: '圓滿閉幕',
    categoryColorClass: 'bg-surface-container text-on-surface-variant',
    title: '伴手禮選購與賦歸',
    description:
      '採購龍膽石斑現兔酥、膠原蛋白保養品等特色產品，帶著滿滿回憶回家。支持社區循環經濟文創品，集合搭乘專車返程。',
    badge: '金牌特產伴手禮',
    badgeIcon: 'shopping_bag',
    subInfo: '賦歸回程',
    dotColorClass: 'bg-outline',
    details: [
      '參觀新龍社區「龍膽石斑魚鱗膠原蛋白」創新成果展示區',
      '員工專屬特惠採購：石斑魚片、魚鱗果凍、膠原修護精華',
      '大合照留念並領取活動證書'
    ]
  }
];

export const BANQUET_MENU: MenuItem[] = [
  {
    id: 1,
    name: '金牌迎賓三色冷盤',
    tag: '開胃前菜',
    tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    description: '龍膽魚皮凍、五味軟絲、在地櫻花蝦'
  },
  {
    id: 2,
    name: '清蒸頂級甘樹子龍膽石斑厚切',
    tag: '主廚招牌',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    description: '肉質彈牙 Q 潤、富含天然膠原蛋白'
  },
  {
    id: 3,
    name: '蒜香陶板鮮活白蝦',
    tag: '在地現撈',
    tagClass: 'bg-surface-container text-on-surface-variant',
    description: '枋寮現撈活蝦、甘甜彈牙'
  },
  {
    id: 4,
    name: '酥炸龍虎斑魚柳佐塔塔醬',
    tag: '人氣必吃',
    tagClass: 'bg-surface-container text-on-surface-variant',
    description: '金黃酥香、外酥內嫩'
  },
  {
    id: 5,
    name: '鮮人蔘百果燉龍膽魚骨膠原湯',
    tag: '溫潤養生',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    description: '慢火熬煮精華高湯、養顏溫潤'
  },
  {
    id: 6,
    name: '古法手工龍膽石斑鮮魚丸野菜鍋',
    tag: '農村手作',
    tagClass: 'bg-surface-container text-on-surface-variant',
    description: '產地直送當令野菜、純手工魚丸'
  },
  {
    id: 7,
    name: '避風塘香炒金沙中卷',
    tag: '經典海味',
    tagClass: 'bg-surface-container text-on-surface-variant',
    description: '香蒜辣椒酥脆下飯'
  },
  {
    id: 8,
    name: '在地當令鮮蔬佐XO干貝醬',
    tag: '友善耕作',
    tagClass: 'bg-surface-container text-on-surface-variant',
    description: '清爽爽口、在地青農友善耕作'
  },
  {
    id: 9,
    name: '新龍古早味海鮮櫻花蝦米糕',
    tag: '主食精選',
    tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    description: '澎湃鮮味、粒粒糯米浸透香氣'
  },
  {
    id: 10,
    name: '龍膽膠原鮮奶酪 & 在地時令鮮果盤',
    tag: '漁村甜品',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    description: '漁村創新甜品、清甜收尾'
  }
];

export const DEFAULT_BUDGET_ITEMS: BudgetItem[] = [
  {
    name: '社區專人導覽',
    unitPrice: 1200,
    type: 'fixed',
    note: '每隊上限 20 人，金牌資深解說員全場帶隊'
  },
  {
    name: '漁港單車租借',
    unitPrice: 200,
    type: 'per_person',
    note: '$200/人 (含安全帽、調校與保險)'
  },
  {
    name: '餵食石斑體驗',
    unitPrice: 300,
    type: 'per_person',
    note: '$300/人 (含餌料、防護用具、專業養殖師協防)'
  },
  {
    name: '在地海鮮風味餐',
    unitPrice: 5500,
    type: 'per_table',
    peoplePerTable: 10,
    note: '$5,500/桌 (含包廂專屬服務、茶水飲料)'
  },
  {
    name: '水上活動 (劃筏/摸魚)',
    unitPrice: 500,
    type: 'per_person',
    note: '$500/人 (含安全救生員2名、防水圍裙雨鞋)'
  },
  {
    name: '午仔魚一夜干 DIY',
    unitPrice: 450,
    type: 'per_person',
    note: '$450/人 (每人成品含保冰袋與真空包裝)'
  }
];

export const SERVICE_FEE_RATE = 0.15; // 15%
