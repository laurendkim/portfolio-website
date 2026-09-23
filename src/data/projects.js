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

export const projects = [
  { slug: 'robert-geller',      num: '01', short: 'Robert Geller',      caption: 'Robert Geller', client: 'Lululemon', title: 'Robert Geller', dir: '/images/robert-geller',      width: 48, subtitle: rgSub, type: rgType, meta: rgMeta, desc: rgDesc },
  { slug: 'suminagashi',        num: '02', short: 'Suminagashi',        caption: 'Suminagashi',   client: 'Lululemon Lab', title: 'Suminagashi', dir: '/images/suminagashi',        width: 44, subtitle: sumiSub, type: sumiType, meta: sumiMeta, desc: sumiDesc },
  { slug: 'seawheeze',          num: '03', short: 'Seawheeze',          caption: 'Seawheeze',     client: 'Lululemon', title: 'Seawheeze', dir: '/images/seawheeze',          width: 38, subtitle: seaSub, type: seaType, meta: seaMeta, desc: seaDesc },
  { slug: 'year-of-the-rabbit', num: '04', short: 'Year of the Rabbit', caption: 'Year of the Rabbit', client: 'Lululemon', title: 'Year of the Rabbit', dir: '/images/year-of-the-rabbit', width: 47, subtitle: lnySub, type: lnyType, meta: lnyMeta, desc: lnyDesc },
  { slug: 'zebra-print',        num: '05', short: 'Zebra Print',        caption: 'Zebra Print',        client: 'CUUP',      title: 'Zebra Print',           dir: '/images/zebra-print',        width: 42, subtitle: cuupSub, type: cuupType, meta: cuupMeta, desc: cuupDesc },
];
