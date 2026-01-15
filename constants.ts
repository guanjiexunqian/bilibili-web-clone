import { Video, CarouselItem } from './types';

// ==================================================================================
// Asset Pool (High Fidelity - Real Bilibili/YouTube Style Covers)
// ==================================================================================
// These URLs are selected to mimic the "High Information Density" style of Bilibili covers.
// They include text overlays, high saturation, and clear subjects.

export const HDSLB_IMAGE_POOL = {
  anime: [
    "https://i0.hdslb.com/bfs/archive/19d5cb8d1283d69950dc9a9db6909893d567c9c2.jpg", // Frieren
    "https://i0.hdslb.com/bfs/archive/4b56801452243285750c18451878b40441584285.jpg", // Scenery/Anime Art
    "https://i0.hdslb.com/bfs/archive/e55855077443834da4659b854a01c37b38d39050.jpg", // Character Close-up
    "https://i0.hdslb.com/bfs/archive/7d566367c3305a4159518db9452b31499525042e.jpg", // Bright Colors
    "https://i0.hdslb.com/bfs/archive/04118318938740520297058866952709232370.jpg", // Oshi no Ko style
    "https://i0.hdslb.com/bfs/archive/a16e0ca65a7e67e335010691518f8e792015099b.jpg", // Detailed Art
    "https://i0.hdslb.com/bfs/archive/977319957270e55048222687f4c7849e89540e8d.jpg", // Action scene
    "https://i0.hdslb.com/bfs/archive/56e79294e022066847c234b397b914d246c14264.jpg", // Cute style
  ],
  gaming: [
    "https://i2.hdslb.com/bfs/archive/22d56a02b65825700882e3039d997235a9644f19.jpg", // Wukong/Dark style
    "https://i0.hdslb.com/bfs/archive/b204e578f77341071286c4295e263d6f1a804a9e.jpg", // FPS/Crosshair
    "https://i0.hdslb.com/bfs/archive/d5073062080064972e6b21588636270e4475471c.jpg", // Genshin Bright
    "https://i0.hdslb.com/bfs/archive/c897368536f9474775d7870a256a29790b957640.jpg", // Strategy/Map
    "https://i0.hdslb.com/bfs/archive/09255655325876403061793730796338872076.jpg", // Minecraft/Pixel
    "https://i0.hdslb.com/bfs/archive/8d689255866164627255146077363406622866.jpg", // Esport
    "https://i0.hdslb.com/bfs/archive/25175968531061726053351980315538902562.jpg", // Retro
  ],
  tech: [
    "https://i0.hdslb.com/bfs/archive/0631d871e4449d01525a76e05391e3e7f4749f87.jpg", // Gadget review
    "https://i0.hdslb.com/bfs/archive/33917462719114757134372559635076115263.jpg", // Desk setup
    "https://i0.hdslb.com/bfs/archive/a2c00e62551404c0df61474d2091702581636284.jpg", // Camera lens
    "https://i0.hdslb.com/bfs/archive/f7647262071852026402447230113833215682.jpg", // Code/Screen
    "https://i0.hdslb.com/bfs/archive/12716130836511027170562118320470217277.jpg", // AI/Robot
  ],
  life: [
    "https://i0.hdslb.com/bfs/archive/66324268069695628185016554605051676664.jpg", // Food close-up
    "https://i0.hdslb.com/bfs/archive/9c146602c22262272844573887321682662208.jpg", // Cat
    "https://i0.hdslb.com/bfs/archive/a16f8746777174670251745266710404071536.jpg", // Vlog face
    "https://i0.hdslb.com/bfs/archive/3f820546123477123467382173461234871234.jpg", // Travel
    "https://i0.hdslb.com/bfs/archive/b8832070088168281085002166688533816228.jpg", // DIY/Craft
    "https://i0.hdslb.com/bfs/archive/22026117565576288628318181662288161622.jpg", // Funny moment
  ],
  banners: [
    "https://i0.hdslb.com/bfs/archive/4b56801452243285750c18451878b40441584285.jpg", // Landscape 1
    "https://i0.hdslb.com/bfs/archive/19d5cb8d1283d69950dc9a9db6909893d567c9c2.jpg", // Landscape 2
    "https://i0.hdslb.com/bfs/archive/a16e0ca65a7e67e335010691518f8e792015099b.jpg", // Landscape 3
    "https://i0.hdslb.com/bfs/archive/7d566367c3305a4159518db9452b31499525042e.jpg", // Landscape 4
  ]
};

// Generic short video samples for hover preview
const PREVIEW_VIDEOS = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
];

// ==================================================================================
// Mock Data Generators
// ==================================================================================

const TITLES_POOL = [
  "【4K】耗时300天，我用我的世界还原了清明上河图", "这就是中国制造！", "猫咪：我太难了",
  "黑神话：悟空 全收集攻略", "原神4.4版本前瞻总结", "崩坏星穹铁道：流萤", 
  "从零开始的异世界生活", "葬送的芙莉莲 28话", "我推的孩子", 
  "LPL春季赛：WBG vs BLG", "Faker名人堂皮肤鉴赏", "CSGO：简单开个箱",
  "如何用Python写一个B站爬虫", "35岁程序员的真实生活", "RTX 5090性能预测",
  "极光下的冰岛，美得窒息", "特种兵式旅游", "去有风的地方",
  "2025年了，显卡降价了吗？", "华强北能造出Vision Pro吗？", "苹果发布会前瞻",
  "周杰伦新歌解析", "【翻唱】恋爱循环", "贝斯手：孤独摇滚",
  "试图教会猫咪后空翻", "修狗能有什么坏心眼呢", "熊猫：我就是国宝",
  "阅片无数，这几部神作你一定没看过", "这个特效我跪着看完", "全程高能！建议佩戴耳机",
  "假如甄嬛传是悬疑片", "【鬼畜】全员恶人", "改革春风吹满地",
  "罗翔老师：张三的传奇一生", "考研政治冲刺", "英语口语速成",
  "手工耿：又做了一个废品", "【何同学】我做了一个透明电视", "影视飓风画质提升",
  "绝地求生：究极老六", "永劫无间：太刀颠勺教学", "我的世界：100天生存",
  "舌尖上的中国：深夜放毒", "街头美食挑战", "自制惠灵顿牛排",
];

const UPLOADERS_POOL = [
  "老师好我叫何同学", "影视飓风", "极客湾Geekerwan", "罗翔说刑法", "老番茄", "某幻君", 
  "花少北", "LexBurner", "泛式", "凉风Kaze", "硬核的半佛仙人", "稚晖君", 
  "手工耿", "盗月社食遇记", "绵羊料理", "日食记", "木鱼水心", "小约翰可汗",
  "无穷小亮的科普日常", "毕导THU", "在此见宝", "黑桐谷歌", "渗透之C君",
  "纯黑", "依然小智", "以前是小庄", "周六野Zoey", "帕梅拉Pamela",
  "观察者网", "央视新闻", "共青团中央", "哔哩哔哩赛事", "英雄联盟赛事",
];

/**
 * Helper to get a random item from an array
 */
const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

/**
 * Helper to get a random image from our robust pool
 */
export const getRandomCover = (category?: keyof typeof HDSLB_IMAGE_POOL): string => {
  if (category && HDSLB_IMAGE_POOL[category]) {
    return getRandom(HDSLB_IMAGE_POOL[category]);
  }
  // If no category specific, pick from any category except banners
  const allImages = [
    ...HDSLB_IMAGE_POOL.anime,
    ...HDSLB_IMAGE_POOL.gaming,
    ...HDSLB_IMAGE_POOL.tech,
    ...HDSLB_IMAGE_POOL.life
  ];
  return getRandom(allImages);
};

/**
 * THE DATA FACTORY
 * Generates 'count' number of realistic video objects.
 */
export const generateVideos = (count: number, startIndex: number = 0): Video[] => {
  return Array.from({ length: count }).map((_, i) => {
    const id = `vid-${Date.now()}-${startIndex + i}-${Math.random()}`;
    // Randomize category influence
    const r = Math.random();
    let category: keyof typeof HDSLB_IMAGE_POOL = 'anime';
    if (r > 0.25) category = 'gaming';
    if (r > 0.50) category = 'tech';
    if (r > 0.75) category = 'life';

    return {
      id,
      title: getRandom(TITLES_POOL),
      uploader: getRandom(UPLOADERS_POOL),
      views: `${(Math.random() * 500).toFixed(1)}万`,
      date: Math.random() > 0.8 ? '昨天' : `${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
      duration: `${Math.floor(Math.random() * 20)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      coverUrl: getRandomCover(category),
      previewUrl: Math.random() > 0.3 ? getRandom(PREVIEW_VIDEOS) : undefined, // 70% chance to have preview
      isAd: Math.random() > 0.95 // 5% chance of being an ad (though we don't render it differently yet)
    };
  });
};

// ==================================================================================
// Initial Data (Bootstrapped)
// ==================================================================================

export const INITIAL_VIDEOS: Video[] = generateVideos(20);

export const CAROUSEL_ITEMS: CarouselItem[] = [
  { 
    id: 'c1', 
    title: '葬送的芙莉莲：旅途的终点是起点', 
    imageUrl: 'https://i0.hdslb.com/bfs/archive/19d5cb8d1283d69950dc9a9db6909893d567c9c2.jpg', 
    color: '#1a2b3c' 
  },
  { 
    id: 'c2', 
    title: '崩坏：星穹铁道 2.0版本上线', 
    imageUrl: 'https://i0.hdslb.com/bfs/archive/4b56801452243285750c18451878b40441584285.jpg', 
    color: '#3c2b1a' 
  },
  { 
    id: 'c3', 
    title: '2024 LPL春季赛', 
    imageUrl: 'https://i0.hdslb.com/bfs/archive/8d689255866164627255146077363406622866.jpg', 
    color: '#654321' 
  },
  { 
    id: 'c4', 
    title: '间谍过家家 Season 2', 
    imageUrl: 'https://i0.hdslb.com/bfs/archive/e55855077443834da4659b854a01c37b38d39050.jpg', 
    color: '#abcdef' 
  },
];