const categoryNames: Record<string, string> = {
  "bez-szwu": "Seamless steel pipe",
  dwudzielne: "Split steel pipe",
  uzywane: "Used steel pipe",
  "w-izolacji": "Insulated steel pipe",
  "ze-szwem-spiralnym": "Spiral-welded steel pipe",
  "ze-szwem-wzdluznym": "Longitudinally welded steel pipe",
  "zwijane-z-blachy": "Plate-rolled steel pipe",
};
export const englishCategoryName = (slug: string) =>
  categoryNames[slug] || "Steel pipe";
export const englishProductName = (category: string, specification?: string) =>
  `${englishCategoryName(category)}${specification ? ` ${specification}` : ""}`;
export const englishParameterLabel = (label: string) =>
  ({
    Średnica: "Outside diameter",
    Norma: "Standard",
    Ścianka: "Wall thickness",
    Gatunek: "Steel grade",
    Długość: "Length",
  })[label] || label;
