// Projects with updated numbering. All numbered images in /public/images/<slug>/
// Template auto-detects portrait vs landscape and arranges 2-per-row or full-width

const rgSub = `Color | Print | Jacquard Development\nlululemon | Robert Geller Collaboration, Spring '20`;
const rgType = `Color | Print | Jacquard Development`;
const rgMeta = `\nlululemon | Robert Geller Collaboration, Spring '20`;
const rgDesc = `Color palette and brushstroke-inspired artwork developed for "A Moment to Reflect," lululemon's collaboration with New York menswear designer Robert Geller. Geller's signature color sensibility was translated into the context of lululemon activewear, building a palette that balanced refined utilitarian neutrals with expressive accent hues. The artwork was then interpreted across two textile constructions– a Distressed Camo jacquard and a Washed Camo print, and applied across a 26-piece collection spanning technical tees, leggings, reversible outerwear, and a 3-in-1 waterproof parka. Together, the color and graphic language helped unify a wardrobe designed to transition seamlessly between movement and city life. The collaboration marked the first Robert Geller collection to include womenswear and drew wide editorial coverage.`;

const sumiSub = "Print + Burnout Development\nlululemon | Women's Yoga, Fall '18 / Spring '23";
const sumiType = `Print + Burnout Development`;
const sumiMeta = `\nlululemon | Women's Yoga, Fall '18 / Spring '23`;
const sumiDesc = `Created using suminagashi, the centuries-old Japanese technique of floating ink on water, the artwork embraces the quiet unpredictability of the patterns that surface when ink meets water– no two are the same. It was first introduced as a print for lululemon's lab collection before being brought back years later as a sheer burnout, where texture and materiality became an integral part of the design to further its sense of calm and movement.`;

const seaSub = "Print Development\nlululemon | Men's + Women's Run, Summer '20";
const seaType = `Print Development`;
const seaMeta = `\nlululemon | Men's + Women's Run, Summer '20`;
const seaDesc = `Created for lululemon's annual SeaWheeze collection, the Race Pace Print draws from the rhythm, movement, and collective energy of one of Vancouver's biggest running events. Developed in two colorways and applied across men's and women's run kits, the print was part of a limited-edition capsule released globally during the festival's virtual 2020 edition.`;

const lnySub = "Seamless | Jacquard | Print Development\nlululemon | Lunar New Year Collection, Winter '22";
const lnyType = `Seamless | Jacquard | Print Development`;
const lnyMeta = `\nlululemon | Lunar New Year Collection, Winter '22`;
const lnyDesc = `Abstract camouflage inspired by the Year of the Rabbit, balancing symbolism with performance. The artwork was engineered across three distinct constructions: a tonal seamless knit, an oversized jacquard for sweaters and outerwear, and an all-over print for technical activewear. Launched globally across North America and APAC, the collection reimagined a traditional Lunar New Year motif through a contemporary athletic lens.`;

const cuupSub = "Print Development\nCUUP | Swimwear Collection, Summer '23";
const cuupType = `Print Development`;
const cuupMeta = `\nCUUP | Swimwear Collection, Summer '23`;
const cuupDesc = `A reinterpretation of the classic zebra print through an organic, fluid, hand-drawn lens. The earthy terracotta against contrasting black stripes balance warmth, sensuality, and confident strength. Created for CUUP's debut swim collection, the print helped establish the visual language of CUUP's expansion into swim.`;

// Image lists with orientation info
const rgImages = [
  { name: '1_RG_Hero.jpg', portrait: false },
  { name: '2_RG_Hero.jpg', portrait: false },
  { name: '3_RG_Hero.jpg', portrait: true },
  { name: '4_RG_Hero.jpg', portrait: true },
  { name: '6_RG_Color1.png', portrait: false },
  { name: '7_RG_Color2.png', portrait: false },
  { name: '8_RG_Color3.png', portrait: false },
  { name: '10_RG_GraphicExploration_1.png', portrait: true },
  { name: '11_RG_GraphicExploration_3.jpg', portrait: true },
  { name: '12_RG_GraphicExploration_4.jpg', portrait: true },
  { name: '13_RG_GraphicExploration_2.png', portrait: true },
  { name: '15_Final_1.jpg', portrait: false },
  { name: '16_Final_2.jpg', portrait: false },
  { name: '17_Final_3.jpg', portrait: false },
];

const sumiImages = [
  { name: '4_LW5BTJS_026512_5.jpg', portrait: true },
  { name: '5_LW3BU7S_026512_Y.jpg', portrait: true },
  { name: '6_LW5BTJS_026512_1.jpg', portrait: true },
  { name: '7_LW2BCES_026512_1.jpg', portrait: true },
  { name: '8_LW3BU7S_026512_1.jpg', portrait: true },
  { name: '9_LW3BU7S_026512_4.jpg', portrait: true },
  { name: '10_Suminagashi_5.jpg', portrait: false },
  { name: '11_Suminagashi_1.jpg', portrait: false },
  { name: '12_Suminagashi_2.jpg', portrait: false },
  { name: '13_Suminagashi_6.jpg', portrait: false },
  { name: '14_Suminagashi_4.jpg', portrait: false },
  { name: '15_Suminagashi_3.jpg', portrait: false },
];

const seaImages = [
  { name: '1_SW_1 copy.jpg', portrait: false },
  { name: '2_bec2rqpxyyfjqy449xm2_crop 2.jpg', portrait: true },
  { name: '3_RacePace_SunlightYellowMulti.jpg', portrait: true },
  { name: '4_LM4AA1S_044708_6 copy.jpg', portrait: true },
  { name: '5_LM4AA1S_044708_4.jpg', portrait: true },
  { name: '6_SW_4 2.jpg', portrait: true },
  { name: '7_SW_7 copy.jpg', portrait: true },
  { name: '8_RacePace_FlareMulti copy.jpg', portrait: true },
  { name: '9_LW2BZ7S_044818_5 2.jpg', portrait: true },
];

const lnyImages = [
  { name: '1_rs_1024x759-230111102253-lunar-1024-.jpg', portrait: false },
  { name: '2_324545625_5968353216548570_2469358245715729946_n.jpg', portrait: true },
  { name: '3_unnamed.jpg', portrait: true },
  { name: '4_324700807_1294172601363820_7354429857507063805_n.jpg', portrait: true },
  { name: '5_324845326_912225286601450_8560149858109560816_n.jpg', portrait: true },
  { name: '7_324416993_721019136008543_8567709523483278822_n.jpg', portrait: true },
  { name: '8_324548922_861147328553210_6646772576276743590_n.jpg', portrait: true },
  { name: '9_image.jpg', portrait: true },
  { name: '10_324457542_854841622409327_5760961443360146678_n.jpg', portrait: true },
];

const zebraImages = [
  { name: '1_SWIM23_ZEBRA_SCOOP_HW_D7A9915.jpg', portrait: false },
  { name: '2_SWIM23_ZEBRA_SCOOP_HW_D7A9959.jpg', portrait: true },
  { name: '4_SWIM23_ZEBRA_SCOOP_HW_D7A9990.jpg', portrait: true },
  { name: '5_SWIM23_ZEBRA_STR_0032 2.jpg', portrait: false },
  { name: '6_SWIM23_ZEBRA_STR_TOP_BK_D7A2732.jpg', portrait: false },
  { name: '7_CUUPZebraPrint_CopperBlack.jpg', portrait: true },
  { name: '8_SWIM23_ZEBRA_STR_TOP_BK_D7A2780.jpg', portrait: true },
  { name: '9_SWIM23_ZEBRA_STR_TOP_BK_D7A2638.jpg', portrait: true },
  { name: '10_SWIM23_ZEBRA_STR_TOP_BK_D7A2660.jpg', portrait: true },
  { name: '11_SWIM23_ZEBRA_STR_TOP_BK_D7A2698.jpg', portrait: true },
  { name: '12_SWIM23_ZEBRA_STR_TOP_BK_D7A2810.jpg', portrait: true },
];

export const projects = [
  { slug: 'robert-geller',      num: '01', short: 'Robert Geller',      caption: 'Robert Geller', client: 'Lululemon', title: 'Robert Geller', dir: '/images/robert-geller',      width: 48, subtitle: rgSub, type: rgType, meta: rgMeta, desc: rgDesc, images: rgImages },
  { slug: 'suminagashi',        num: '02', short: 'Suminagashi',        caption: 'Suminagashi',   client: 'Lululemon Lab', title: 'Suminagashi', dir: '/images/suminagashi',        width: 44, subtitle: sumiSub, type: sumiType, meta: sumiMeta, desc: sumiDesc, images: sumiImages },
  { slug: 'seawheeze',          num: '03', short: 'Seawheeze',          caption: 'Seawheeze',     client: 'Lululemon', title: 'Seawheeze', dir: '/images/seawheeze',          width: 38, subtitle: seaSub, type: seaType, meta: seaMeta, desc: seaDesc, images: seaImages },
  { slug: 'year-of-the-rabbit', num: '04', short: 'Year of the Rabbit', caption: 'Year of the Rabbit', client: 'Lululemon', title: 'Year of the Rabbit', dir: '/images/year-of-the-rabbit', width: 47, subtitle: lnySub, type: lnyType, meta: lnyMeta, desc: lnyDesc, images: lnyImages },
  { slug: 'zebra-print',        num: '05', short: 'Zebra Print',        caption: 'Zebra Print',        client: 'CUUP',      title: 'Zebra Print',           dir: '/images/zebra-print',        width: 42, subtitle: cuupSub, type: cuupType, meta: cuupMeta, desc: cuupDesc, images: zebraImages },
];
