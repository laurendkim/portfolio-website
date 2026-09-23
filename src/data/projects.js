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

// Content lists: images (with orientation) and text blocks, in display order
const rgGoalText = `The goal was to create a visual language that felt understated yet distinctive, balancing Robert Geller's refined aesthetic with lululemon's technical performance DNA.\n\nThe visual direction centered around the movement between city and nature, tailoring and utility. Rather than default to athletic graphic language, the direction leaned into architectural lines, gestural brushstrokes, and quiet rhythm. The collection needed to speak to a consumer moving fluidly between studio, street, and travel– and a lifestyle reflecting the collection's narrative of reflecting on the moments of transition.`;
const rgColorText = `The color palette was built around grounded neutrals punctuated by rich accents. Dusty olive, soft mauves, and grey neutrals created a calm foundation, while saturated pops of ochre, blue, and plum introduced energy without overwhelming the collection. The goal was to create a palette that transitioned effortlessly between performance and everyday wear.`;
const rgGraphicText = `Rather than referencing traditional camo, hand-painted brushwork was used to create a layered textural language that felt organic, elevated, and distinctly Robert Geller. Early explorations investigated variations in scale, density, placement, and color to understand how the pattern would read across different silhouettes. The final artwork was developed in two colorways across two scales while remaining subtle in execution– reading as an abstract camo from a distance, yet revealing its hand-drawn quality up close. It was then translated into both jacquard and printed constructions, adding depth while ensuring a cohesive visual language throughout the collection.`;

const rgImages = [
  { type: 'image', name: '1_RG_Hero.jpg', portrait: false },
  { type: 'image', name: '2_RG_Hero.jpg', portrait: false },
  { type: 'image', name: '3_RG_Hero.jpg', portrait: true },
  { type: 'image', name: '4_RG_Hero.jpg', portrait: true },
  { type: 'text', text: rgGoalText },
  { type: 'image', name: '6_RG_Color1.png', portrait: false },
  { type: 'image', name: '7_RG_Color2.png', portrait: false },
  { type: 'image', name: '8_RG_Color3.png', portrait: false },
  { type: 'text', text: rgColorText },
  { type: 'image', name: '10_RG_GraphicExploration_1.png', portrait: true },
  { type: 'image', name: '11_RG_GraphicExploration_3.jpg', portrait: true },
  { type: 'image', name: '12_RG_GraphicExploration_4.jpg', portrait: true },
  { type: 'image', name: '13_RG_GraphicExploration_2.png', portrait: true },
  { type: 'text', text: rgGraphicText },
  { type: 'image', name: '15_Final_1.jpg', portrait: false },
  { type: 'image', name: '16_Final_2.jpg', portrait: false },
  { type: 'image', name: '17_Final_3.jpg', portrait: false },
];

const sumiImages = [
  { type: 'image', name: '1_LW1DA8S_0002_5 2 copy.webp', portrait: false },
  { type: 'image', name: '2_LW3FI6S_0002_4.webp', portrait: true },
  { type: 'image', name: '3_LW3FI6S_0002_5.webp', portrait: true },
  { type: 'image', name: '4_LW5BTJS_026512_5.jpg', portrait: true },
  { type: 'image', name: '5_LW3BU7S_026512_Y.jpg', portrait: true },
  { type: 'image', name: '6_LW5BTJS_026512_1.jpg', portrait: true },
  { type: 'image', name: '7_LW2BCES_026512_1.jpg', portrait: true },
  { type: 'image', name: '8_LW3BU7S_026512_1.jpg', portrait: true },
  { type: 'image', name: '9_LW3BU7S_026512_4.jpg', portrait: true },
  { type: 'image', name: '10_Suminagashi_5.jpg', portrait: false },
  { type: 'image', name: '11_Suminagashi_1.jpg', portrait: false },
  { type: 'image', name: '12_Suminagashi_2.jpg', portrait: false },
  { type: 'image', name: '13_Suminagashi_6.jpg', portrait: false },
  { type: 'image', name: '14_Suminagashi_4.jpg', portrait: false },
  { type: 'image', name: '15_Suminagashi_3.jpg', portrait: false },
];

const seaImages = [
  { type: 'image', name: '1_SW_1 copy.jpg', portrait: false },
  { type: 'image', name: '2_bec2rqpxyyfjqy449xm2_crop 2.jpg', portrait: true },
  { type: 'image', name: '3_RacePace_SunlightYellowMulti.jpg', portrait: true },
  { type: 'image', name: '4_LM4AA1S_044708_6 copy.jpg', portrait: true },
  { type: 'image', name: '5_LM4AA1S_044708_4.jpg', portrait: true },
  { type: 'image', name: '6_SW_4 2.jpg', portrait: true },
  { type: 'image', name: '7_SW_7 copy.jpg', portrait: true },
  { type: 'image', name: '8_RacePace_FlareMulti copy.jpg', portrait: true },
  { type: 'image', name: '9_LW2BZ7S_044818_5 2.jpg', portrait: true },
];

const lnyImages = [
  { type: 'image', name: '1_rs_1024x759-230111102253-lunar-1024-.jpg', portrait: false },
  { type: 'image', name: '2_324545625_5968353216548570_2469358245715729946_n.jpg', portrait: true },
  { type: 'image', name: '3_unnamed.jpg', portrait: true },
  { type: 'image', name: '4_324700807_1294172601363820_7354429857507063805_n.jpg', portrait: true },
  { type: 'image', name: '5_324845326_912225286601450_8560149858109560816_n.jpg', portrait: true },
  { type: 'image', name: '6_LululemonLunarNewYear_vlvoli.jpg', portrait: false },
  { type: 'image', name: '7_324416993_721019136008543_8567709523483278822_n.jpg', portrait: true },
  { type: 'image', name: '8_324548922_861147328553210_6646772576276743590_n.jpg', portrait: true },
  { type: 'image', name: '10_Asia_23Jan_WK3_website_LNY_bag_Promotile.webp', portrait: false },
  { type: 'image', name: '11_image.jpg', portrait: true },
  { type: 'image', name: '12_324457542_854841622409327_5760961443360146678_n.jpg', portrait: true },
];

const zebraImages = [
  { type: 'image', name: '1_SWIM23_ZEBRA_SCOOP_HW_D7A9915.jpg', portrait: false },
  { type: 'image', name: '2_SWIM23_ZEBRA_SCOOP_HW_D7A9959.jpg', portrait: true },
  { type: 'image', name: '4_SWIM23_ZEBRA_SCOOP_HW_D7A9990.jpg', portrait: true },
  { type: 'image', name: '5_SWIM23_ZEBRA_STR_0032 2.jpg', portrait: false },
  { type: 'image', name: '6_SWIM23_ZEBRA_STR_TOP_BK_D7A2732.jpg', portrait: false },
  { type: 'image', name: '7_CUUPZebraPrint_CopperBlack.jpg', portrait: true },
  { type: 'image', name: '8_SWIM23_ZEBRA_STR_TOP_BK_D7A2780.jpg', portrait: true },
  { type: 'image', name: '9_SWIM23_ZEBRA_STR_TOP_BK_D7A2638.jpg', portrait: true },
  { type: 'image', name: '10_SWIM23_ZEBRA_STR_TOP_BK_D7A2660.jpg', portrait: true },
  { type: 'image', name: '11_SWIM23_ZEBRA_STR_TOP_BK_D7A2698.jpg', portrait: true },
  { type: 'image', name: '12_SWIM23_ZEBRA_STR_TOP_BK_D7A2810.jpg', portrait: true },
];

export const projects = [
  { slug: 'robert-geller',      num: '01', short: 'Robert Geller',      caption: 'Robert Geller', client: 'Lululemon', title: 'Robert Geller', dir: '/images/robert-geller',      width: 48, subtitle: rgSub, type: rgType, meta: rgMeta, desc: rgDesc, images: rgImages },
  { slug: 'suminagashi',        num: '02', short: 'Suminagashi',        caption: 'Suminagashi',   client: 'Lululemon Lab', title: 'Suminagashi', dir: '/images/suminagashi',        width: 44, subtitle: sumiSub, type: sumiType, meta: sumiMeta, desc: sumiDesc, images: sumiImages },
  { slug: 'seawheeze',          num: '03', short: 'Seawheeze',          caption: 'Seawheeze',     client: 'Lululemon', title: 'Seawheeze', dir: '/images/seawheeze',          width: 38, subtitle: seaSub, type: seaType, meta: seaMeta, desc: seaDesc, images: seaImages },
  { slug: 'year-of-the-rabbit', num: '04', short: 'Year of the Rabbit', caption: 'Year of the Rabbit', client: 'Lululemon', title: 'Year of the Rabbit', dir: '/images/year-of-the-rabbit', width: 47, subtitle: lnySub, type: lnyType, meta: lnyMeta, desc: lnyDesc, images: lnyImages },
  { slug: 'zebra-print',        num: '05', short: 'Zebra Print',        caption: 'Zebra Print',        client: 'CUUP',      title: 'Zebra Print',           dir: '/images/zebra-print',        width: 42, subtitle: cuupSub, type: cuupType, meta: cuupMeta, desc: cuupDesc, images: zebraImages },
];
