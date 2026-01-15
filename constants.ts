import { Video, CarouselItem } from './types';

// ==================================================================================
// 1. REAL WORLD ASSET LIBRARY (Visual Soul)
// ==================================================================================
// Sourced from high-quality CDNs to mimic the real Bilibili Game Center aesthetic.

export const GAME_LIBRARY = {
  wukong: {
    name: "黑神话：悟空",
    icon: "https://i0.hdslb.com/bfs/game/19543886548774020967735345758366474643.png", 
    cover: "https://i0.hdslb.com/bfs/archive/22d56a02b65825700882e3039d997235a9644f19.jpg", 
    poster: "https://i0.hdslb.com/bfs/new_dyn/b45823145d2595085445258414902146445582236.png", 
    color: "#1a1a1a"
  },
  starrail: {
    name: "崩坏：星穹铁道",
    icon: "https://i0.hdslb.com/bfs/game/7d377c08502f6b864a938cc30444365851445778.png", 
    cover: "https://i0.hdslb.com/bfs/archive/4b56801452243285750c18451878b40441584285.jpg", 
    poster: "https://i0.hdslb.com/bfs/game/04118318938740520297058866952709232370.jpg", 
    color: "#2B1B3A"
  },
  genshin: {
    name: "原神",
    icon: "https://i0.hdslb.com/bfs/game/8d4382025732168915000965d4960d71e2204555.png", 
    cover: "https://i0.hdslb.com/bfs/archive/d5073062080064972e6b21588636270e4475471c.jpg", 
    poster: "https://i0.hdslb.com/bfs/game/d6023253b8116960f252445a4a58406f36357494.png", 
    color: "#33CCFF"
  },
  zzz: {
    name: "绝区零",
    icon: "https://i0.hdslb.com/bfs/game/c047125740445d44747495029e24694936307659.png", 
    cover: "https://i0.hdslb.com/bfs/archive/a16e0ca65a7e67e335010691518f8e792015099b.jpg", 
    poster: "https://i0.hdslb.com/bfs/game/e2d09855598177395048625348882737604508.png", 
    color: "#FF6600"
  },
  arknights: {
    name: "明日方舟",
    icon: "https://i0.hdslb.com/bfs/game/7b2d56637b512966847846561274647366367756.png", 
    cover: "https://i0.hdslb.com/bfs/archive/19d5cb8d1283d69950dc9a9db6909893d567c9c2.jpg", 
    poster: "https://i0.hdslb.com/bfs/game/96644265401664488358485235882666060456.png", 
    color: "#222222"
  },
  lol: {
    name: "英雄联盟",
    icon: "https://i0.hdslb.com/bfs/game/f5869408d6d6fb6013ae94541cd6630f06871e22.png", 
    cover: "https://i0.hdslb.com/bfs/archive/8d689255866164627255146077363406622866.jpg", 
    poster: "https://i0.hdslb.com/bfs/game/b6892695503083313063520025251644744435.png", 
    color: "#0055AA"
  },
  naraka: {
    name: "永劫无间",
    icon: "https://i0.hdslb.com/bfs/game/377a06708b532997184285746738910058822557.png",
    cover: "https://i0.hdslb.com/bfs/archive/c897368536f9474775d7870a256a29790b957640.jpg",
    poster: "https://i0.hdslb.com/bfs/game/04118318938740520297058866952709232370.jpg",
    color: "#882222"
  }
};

// ==================================================================================
// 2. AVATAR POOL & IMAGES
// ==================================================================================

export const AVATAR_POOL = [
  "https://i1.hdslb.com/bfs/face/4945e975762d64094a4755d9d73d2787e9112999.jpg", // Kiana
  "https://i2.hdslb.com/bfs/face/d2a95376140fb1e5efbcbed70ef62891a3e5284f.jpg", // Paimon
  "https://i0.hdslb.com/bfs/face/7e008b89569736c56b621e25862b1b3658257004.jpg", // Anya
  "https://i1.hdslb.com/bfs/face/00228d447f54c93547f3a8b233a00589133887c9.jpg", // Frieren
  "https://i2.hdslb.com/bfs/face/c37651030e844280b18f6943e3e4a3b04c86121f.jpg", // 2233
  "https://i0.hdslb.com/bfs/face/ce6358c5c4d06900f8623d24295e8e89552c679b.jpg", // Cute
  "https://i1.hdslb.com/bfs/face/9f10323503739e67685753d356dc74a816c27189.jpg", // Cool Boy
  "https://i0.hdslb.com/bfs/face/0c5218d6e3952f5205562761895a6b72944b581e.jpg", // Doge
];

export const HDSLB_IMAGE_POOL = {
  anime: [
    "https://i0.hdslb.com/bfs/archive/19d5cb8d1283d69950dc9a9db6909893d567c9c2.jpg", // Frieren
    "https://i0.hdslb.com/bfs/archive/e55855077443834da4659b854a01c37b38d39050.jpg", // Spy Family
    "https://i0.hdslb.com/bfs/archive/04118318938740520297058866952709232370.jpg", // Oshi no Ko
    "https://i0.hdslb.com/bfs/archive/a16e0ca65a7e67e335010691518f8e792015099b.jpg", // CSM
    "https://i0.hdslb.com/bfs/archive/977319957270e55048222687f4c7849e89540e8d.jpg", // JJK
    "https://i0.hdslb.com/bfs/archive/56e79294e022066847c234b397b914d246c14264.jpg", // Bocchi
  ],
  gaming: [
    GAME_LIBRARY.wukong.cover,
    GAME_LIBRARY.starrail.cover,
    GAME_LIBRARY.genshin.cover,
    GAME_LIBRARY.zzz.cover,
    GAME_LIBRARY.lol.cover,
    GAME_LIBRARY.naraka.cover,
    "https://i0.hdslb.com/bfs/archive/09255655325876403061793730796338872076.jpg", // Minecraft
    "https://i0.hdslb.com/bfs/archive/25175968531061726053351980315538902562.jpg", // Retro
  ],
  tech: [
    "https://i0.hdslb.com/bfs/archive/0631d871e4449d01525a76e05391e3e7f4749f87.jpg", // Review
    "https://i0.hdslb.com/bfs/archive/33917462719114757134372559635076115263.jpg", // Desk
    "https://i0.hdslb.com/bfs/archive/a2c00e62551404c0df61474d2091702581636284.jpg", // Lens
    "https://i0.hdslb.com/bfs/archive/f7647262071852026402447230113833215682.jpg", // Code
    "https://i0.hdslb.com/bfs/archive/12716130836511027170562118320470217277.jpg", // Robot
  ],
  life: [
    "https://i0.hdslb.com/bfs/archive/66324268069695628185016554605051676664.jpg", // Food
    "https://i0.hdslb.com/bfs/archive/9c146602c22262272844573887321682662208.jpg", // Cat
    "https://i0.hdslb.com/bfs/archive/3f820546123477123467382173461234871234.jpg", // Travel
    "https://i0.hdslb.com/bfs/archive/b8832070088168281085002166688533816228.jpg", // DIY
    "https://i0.hdslb.com/bfs/archive/22026117565576288628318181662288161622.jpg", // Funny
  ],
  banners: [
    GAME_LIBRARY.starrail.cover,
    GAME_LIBRARY.wukong.cover,
    GAME_LIBRARY.genshin.cover,
    GAME_LIBRARY.arknights.cover,
    GAME_LIBRARY.zzz.cover,
  ]
};

const PREVIEW_VIDEOS = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
];

// ==================================================================================
// 3. MATCHED CONTENT MAP (The "Lookup Table")
// ==================================================================================
// This ensures that "Genshin" titles always get "Genshin" images.

const MATCHED_CONTENT = [
    // --- GAMING ---
    { title: "【黑神话：悟空】最终预告 | 8月20日，重走西游", uploader: "黑神话之父", cover: GAME_LIBRARY.wukong.cover, category: 'gaming' },
    { title: "黑神话：悟空 实机演示，这画质我跪了", uploader: "游戏科学", cover: GAME_LIBRARY.wukong.cover, category: 'gaming' },
    { title: "崩坏：星穹铁道 2.0版本PV：「假如在午夜入梦」", uploader: "崩坏星穹铁道", cover: GAME_LIBRARY.starrail.cover, category: 'gaming' },
    { title: "【星穹铁道】流萤角色演示 -「飞萤扑火」", uploader: "崩坏星穹铁道", cover: GAME_LIBRARY.starrail.cover, category: 'gaming' },
    { title: "【原神】4.4版本PV：「彩鹞栉春风」", uploader: "原神", cover: GAME_LIBRARY.genshin.cover, category: 'gaming' },
    { title: "【原神】闲云角色演示 -「云起鹤叹」", uploader: "原神", cover: GAME_LIBRARY.genshin.cover, category: 'gaming' },
    { title: "绝区零 降噪测试实机演示 | 欢迎来到新艾利都", uploader: "绝区零", cover: GAME_LIBRARY.zzz.cover, category: 'gaming' },
    { title: "绝区零：艾伦·乔 角色展示", uploader: "绝区零", cover: GAME_LIBRARY.zzz.cover, category: 'gaming' },
    { title: "明日方舟：【怀黍离】活动PV", uploader: "明日方舟", cover: GAME_LIBRARY.arknights.cover, category: 'gaming' },
    { title: "2024 LPL春季赛：BLG vs TES 决胜局", uploader: "LPL赛事频道", cover: GAME_LIBRARY.lol.cover, category: 'gaming' },
    { title: "Faker名人堂皮肤：阿狸实机演示", uploader: "英雄联盟", cover: GAME_LIBRARY.lol.cover, category: 'gaming' },
    { title: "永劫无间：新英雄「魏轻」实机演示", uploader: "永劫无间", cover: GAME_LIBRARY.naraka.cover, category: 'gaming' },

    // --- ANIME ---
    { title: "葬送的芙莉莲：辛梅尔逝世50年后", uploader: "木鱼水心", cover: HDSLB_IMAGE_POOL.anime[0], category: 'anime' },
    { title: "【间谍过家家】阿尼亚：哇古哇古！", uploader: "泛式", cover: HDSLB_IMAGE_POOL.anime[1], category: 'anime' },
    { title: "【我推的孩子】首集90分钟！封神开局", uploader: "LexBurner", cover: HDSLB_IMAGE_POOL.anime[2], category: 'anime' },
    { title: "电锯人：玛奇玛小姐的狗", uploader: "瓶子君152", cover: HDSLB_IMAGE_POOL.anime[3], category: 'anime' },
    { title: "咒术回战：涩谷事变 最终局", uploader: "凉风Kaze", cover: HDSLB_IMAGE_POOL.anime[4], category: 'anime' },
    { title: "孤独摇滚：吉他英雄的诞生", uploader: "动画学术趴", cover: HDSLB_IMAGE_POOL.anime[5], category: 'anime' },

    // --- TECH ---
    { title: "【何同学】我做了一个透明电视", uploader: "老师好我叫何同学", cover: HDSLB_IMAGE_POOL.tech[0], category: 'tech' },
    { title: "RTX 5090 性能预测：能跑8K吗？", uploader: "极客湾Geekerwan", cover: HDSLB_IMAGE_POOL.tech[1], category: 'tech' },
    { title: "索尼A7C2深度评测：年轻人的第一台全画幅？", uploader: "影视飓风", cover: HDSLB_IMAGE_POOL.tech[2], category: 'tech' },
    { title: "35岁程序员的真实桌面", uploader: "代码随想录", cover: HDSLB_IMAGE_POOL.tech[3], category: 'tech' },
    { title: "Sora模型实测：AI视频生成颠覆行业", uploader: "差评君", cover: HDSLB_IMAGE_POOL.tech[4], category: 'tech' },
    { title: "苹果Vision Pro首发体验：空间计算时代？", uploader: "钟文泽", cover: HDSLB_IMAGE_POOL.tech[0], category: 'tech' },

    // --- LIFE ---
    { title: "耗时300天，还原舌尖上的中国", uploader: "绵羊料理", cover: HDSLB_IMAGE_POOL.life[0], category: 'life' },
    { title: "猫咪：我太难了，这届铲屎官不好带", uploader: "花花与三猫", cover: HDSLB_IMAGE_POOL.life[1], category: 'life' },
    { title: "极光下的冰岛，美得窒息", uploader: "Linksphotograph", cover: HDSLB_IMAGE_POOL.life[2], category: 'life' },
    { title: "手工耿：自制全自动倒立洗头机", uploader: "手工耿", cover: HDSLB_IMAGE_POOL.life[3], category: 'life' },
    { title: "【罗翔】张三的传奇一生", uploader: "罗翔说刑法", cover: HDSLB_IMAGE_POOL.life[4], category: 'life' },
    { title: "试图教会猫咪后空翻，结果...", uploader: "蒂蒂", cover: HDSLB_IMAGE_POOL.life[1], category: 'life' },
];

// Fallback pools for infinite scrolling variety
const TITLES_POOL = MATCHED_CONTENT.map(m => m.title);
const UPLOADERS_POOL = MATCHED_CONTENT.map(m => m.uploader);

// ==================================================================================
// Data Generators
// ==================================================================================

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
  const allImages = [
    ...HDSLB_IMAGE_POOL.anime,
    ...HDSLB_IMAGE_POOL.gaming,
    ...HDSLB_IMAGE_POOL.tech,
    ...HDSLB_IMAGE_POOL.life
  ];
  return getRandom(allImages);
};

export const getRandomAvatar = (): string => {
    return getRandom(AVATAR_POOL);
};

/**
 * THE DATA FACTORY (Refactored for Step 2)
 * Now pulls from MATCHED_CONTENT to ensure Title/Image consistency.
 */
export const generateVideos = (count: number, startIndex: number = 0): Video[] => {
  return Array.from({ length: count }).map((_, i) => {
    const id = `vid-${Date.now()}-${startIndex + i}-${Math.random()}`;
    
    // Core Logic Change: Pick a matched content item primarily
    const matchedItem = MATCHED_CONTENT[(startIndex + i) % MATCHED_CONTENT.length];
    
    // Add some randomness to stats so duplicates don't look identical
    const views = (Math.random() * 500).toFixed(1) + '万';
    const danmaku = Math.floor(Math.random() * 10000).toString();
    const duration = `${Math.floor(Math.random() * 20) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
    const date = Math.random() > 0.7 ? '昨天' : `${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`;

    return {
      id,
      title: matchedItem.title,
      uploader: matchedItem.uploader,
      views,
      danmaku,
      date,
      duration,
      coverUrl: matchedItem.cover,
      previewUrl: Math.random() > 0.3 ? getRandom(PREVIEW_VIDEOS) : undefined, 
      isAd: Math.random() > 0.96 
    };
  });
};

export const INITIAL_VIDEOS: Video[] = generateVideos(20);

export const CAROUSEL_ITEMS: CarouselItem[] = [
  { 
    id: 'c1', 
    title: '黑神话：悟空 - 最终预告片', 
    imageUrl: GAME_LIBRARY.wukong.cover, 
    color: GAME_LIBRARY.wukong.color 
  },
  { 
    id: 'c2', 
    title: '崩坏：星穹铁道 2.0版本上线', 
    imageUrl: GAME_LIBRARY.starrail.cover, 
    color: GAME_LIBRARY.starrail.color 
  },
  { 
    id: 'c3', 
    title: '绝区零：降噪测试', 
    imageUrl: GAME_LIBRARY.zzz.cover, 
    color: GAME_LIBRARY.zzz.color 
  },
  { 
    id: 'c4', 
    title: '原神：海灯节快乐', 
    imageUrl: GAME_LIBRARY.genshin.cover, 
    color: GAME_LIBRARY.genshin.color 
  },
];
