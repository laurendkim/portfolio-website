// Projects in homepage order. `count` = number of NN.jpg gallery images besides cover.jpg.
// `width` = homepage cover width in vw (varied/dynamic). `subtitle` (optional) = the small meta
// lines under a project title. Images live in /public/images/<slug>/.
const rgSub = `Color / Print / Jacquard Development\nlululemon | Robert Geller Collaboration, Spring '20`;
const rgDesc = `Color palette and brushstroke-inspired artwork developed for "A Moment to Reflect," lululemon's collaboration with New York menswear designer Robert Geller. Geller's signature color sensibility was translated into the context of lululemon activewear, building a palette that balanced refined utilitarian neutrals with expressive accent hues. The artwork was then interpreted across two textile constructions– a Distressed Camo jacquard and a Washed Camo print, and applied across a 26-piece collection spanning technical tees, leggings, reversible outerwear, and a 3-in-1 waterproof parka. Together, the color and graphic language helped unify a wardrobe designed to transition seamlessly between movement and city life. The collaboration marked the first Robert Geller collection to include womenswear and drew wide editorial coverage.`;

const rgProcess = {
  goal: `The goal was to create a visual language that felt understated yet distinctive, balancing Robert Geller's refined aesthetic with lululemon's technical performance DNA.\n\nThe visual direction centered around the movement between city and nature, tailoring and utility. Rather than default to athletic graphic language, the direction leaned into architectural lines, gestural brushstrokes, and quiet rhythm. The collection needed to speak to a consumer moving fluidly between studio, street, and travel– and a lifestyle reflecting the collection's narrative of reflecting on the moments of transition.`,
  color: {
    text: `The color palette was built around grounded neutrals punctuated by rich accents. Dusty olive, soft mauves, and grey neutrals created a calm foundation, while saturated pops of ochre, blue, and plum introduced energy without overwhelming the collection. The goal was to create a palette that transitioned effortlessly between performance and everyday wear.`,
    images: [`/images/robert-geller-process/color-1.png`, `/images/robert-geller-process/color-2.png`, `/images/robert-geller-process/color-3.png`]
  },
  graphicExploration: {
    text: `Rather than referencing traditional camo, hand-painted brushwork was used to create a layered textural language that felt organic, elevated, and distinctly Robert Geller. Early explorations investigated variations in scale, density, placement, and color to understand how the pattern would read across different silhouettes.   The final artwork was developed in two colorways across two scales while remaining subtle in execution– reading as an abstract camo from a distance, yet revealing its hand-drawn quality up close. It was then translated into both jacquard and printed constructions, adding depth while ensuring a cohesive visual language throughout the collection.`,
    images: [`/images/robert-geller-process/graphic-exploration-1.png`, `/images/robert-geller-process/graphic-exploration-2.png`, `/images/robert-geller-process/graphic-exploration-3.jpg`, `/images/robert-geller-process/graphic-exploration-4.jpg`]
  }
};

const sumiSub = "Print + Burnout Development\nlululemon | Women's Yoga, Fall '18 / Spring '23";
const sumiDesc = `Created using suminagashi, the centuries-old Japanese technique of floating ink on water, the artwork embraces the quiet unpredictability of the patterns that surface when ink meets water– no two are the same. It was first introduced as a print for lululemon's lab collection before being brought back years later as a sheer burnout, where texture and materiality became an integral part of the design to further its sense of calm and movement.`;

const seaSub = "Print Development\nlululemon | Men's + Women's Run, Summer '20";
const seaDesc = `Created for lululemon's annual SeaWheeze collection, the Race Pace Print draws from the rhythm, movement, and collective energy of one of Vancouver's biggest running events. Developed in two colorways and applied across men's and women's run kits, the print was part of a limited-edition capsule released globally during the festival's virtual 2020 edition.`;

const lnySub = "Seamless/ Jacquard / Print Development\nlululemon | Lunar New Year Collection, Winter '22";
const lnyDesc = `Abstract camouflage inspired by the Year of the Rabbit, balancing symbolism with performance. The artwork was engineered across three distinct constructions: a tonal seamless knit, an oversized jacquard for sweaters and outerwear, and an all-over print for technical activewear. Launched globally across North America and APAC, the collection reimagined a traditional Lunar New Year motif through a contemporary athletic lens.`;

const cuupSub = "Print Development\nCUUP | Swimwear Collection, Summer '23";
const cuupDesc = `A reinterpretation of the classic zebra print through an organic, fluid, hand-drawn lens. The earthy terracotta against contrasting black stripes balance warmth, sensuality, and confident strength. Created for CUUP's debut swim collection, the print helped establish the visual language of CUUP's expansion into swim.`;

export const projects = [
  { slug: 'robert-geller',      num: '01', short: 'Robert Geller',      caption: 'lululemon / Robert Geller', client: 'Lululemon', title: 'lululemon / Robert Geller', dir: '/images/robert-geller',      count: 3, width: 48, subtitle: rgSub, desc: rgDesc, heroImages: [`/images/robert-geller/hero-1.jpg`, `/images/robert-geller/hero-2.jpg`, `/images/robert-geller/hero-3.jpg`, `/images/robert-geller/hero-4.jpg`], process: rgProcess },
  { slug: 'suminagashi',        num: '02', short: 'Suminagashi',        caption: 'Lululemon / Suminagashi',   client: 'Lululemon Lab', title: 'Lululemon / Suminagashi', dir: '/images/suminagashi',        count: 13, width: 44, subtitle: sumiSub, desc: sumiDesc },
  { slug: 'seawheeze',          num: '03', short: 'Seawheeze',          caption: 'Lululemon / Seawheeze',     client: 'Lululemon', title: 'Lululemon / Seawheeze', dir: '/images/seawheeze',          count: 8,  width: 38, subtitle: seaSub, desc: seaDesc },
  { slug: 'year-of-the-rabbit', num: '04', short: 'Year of the Rabbit', caption: 'Lululemon / Year of the Rabbit', client: 'Lululemon', title: 'Lululemon / Year of the Rabbit', dir: '/images/year-of-the-rabbit', count: 9,  width: 47, subtitle: lnySub, desc: lnyDesc },
  { slug: 'zebra-print',        num: '05', short: 'Zebra Print',        caption: 'CUUP / Zebra Print',        client: 'CUUP',      title: 'CUUP / Zebra Print',           dir: '/images/zebra-print',        count: 6,  width: 42, subtitle: cuupSub, desc: cuupDesc },
];

// All image paths for a project: cover first, then 01..count.
export function galleryFor(p) {
  const imgs = [`${p.dir}/cover.jpg`];
  for (let i = 1; i <= p.count; i++) imgs.push(`${p.dir}/${String(i).padStart(2, '0')}.jpg`);
  return imgs;
}
