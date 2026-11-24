const exactSlugs: Record<string, string> = {
  'bez-szwu': 'seamless', 'dwudzielne': 'split', 'uzywane': 'used', 'w-izolacji': 'insulated',
  'ze-szwem-spiralnym': 'spiral-welded', 'ze-szwem-wzdluznym': 'longitudinally-welded', 'zwijane-z-blachy': 'plate-rolled',
  'spawanie-i-produkcja-rurociagow-stalowych': 'steel-pipeline-welding-and-fabrication', 'skup-rur-stalowych': 'steel-pipe-purchase',
  'montaz-rur-stalowych-dwudzielnych': 'split-steel-pipe-installation', 'malowanie-rur-od-wewnatrz': 'internal-pipe-coating',
  'laminowanie-rur-stalowych': 'steel-pipe-lamination', 'izolowanie-rur-stalowych': 'steel-pipe-insulation',
  'pale-rurowe': 'steel-pipe-piles', 'kolnierze-rurowe': 'pipe-flanges', 'paloscianki-rurowe-combiwall': 'combiwall-pipe-sheet-piles',
  'produkcja-i-walcowanie-blach': 'plate-fabrication-and-rolling', 'produkcja-kolan-segmentowych': 'segment-bends',
  'produkcja-kominow-stalowych-przemyslowych': 'industrial-steel-chimneys', 'produkcja-ploz-dystansowych': 'spacer-skids',
  'produkcja-podpor-mostowych': 'bridge-bearings', 'produkcja-zbiornikow-stalowych': 'steel-tanks', 'rozpory-rurowe-systemowe': 'system-pipe-struts'
};

export function englishSlug(slug: string) {
  if (exactSlugs[slug]) return exactSlugs[slug];
  return slug
    .replace(/^rura-stalowa-bez-szwu/, 'seamless-steel-pipe')
    .replace(/^rura-stalowa-dwudzielna/, 'split-steel-pipe')
    .replace(/^rura-stalowa-ze-szwem-spiralnym/, 'spiral-welded-steel-pipe')
    .replace(/^rura-stalowa-ze-szwem-wzdluznym/, 'longitudinally-welded-steel-pipe')
    .replace(/^rura-stalowa-zwijana-z-blachy/, 'plate-rolled-steel-pipe')
    .replace(/rury-stalowe/g, 'steel-pipes')
    .replace(/dostawa/g, 'delivery')
    .replace(/praca/g, 'careers');
}

export const urls = {
  steelPipes: '/steel-pipes/', services: '/services/', manufacturing: '/manufacturing/', news: '/news/',
  downloads: '/downloads/', careers: '/careers/', about: '/about-us/', contact: '/contact/',
  delivery: '/pipe-delivery/', offer: '/offer/', calculator: '/steel-pipe-weight-calculator/', privacy: '/privacy-policy/',
  product: (slug: string) => `/${englishSlug(slug)}/`,
  category: (slug: string) => `/steel-pipes-${englishSlug(slug)}/`,
  service: (slug: string) => `/services/${englishSlug(slug)}/`,
  production: (slug: string) => `/manufacturing/${englishSlug(slug)}/`,
  deliveryCity: (slug: string) => `/pipe-delivery/${englishSlug(slug)}/`,
  job: (slug: string) => `/careers/${englishSlug(slug)}/`
};
