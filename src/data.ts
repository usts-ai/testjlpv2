export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
};

export type DayHours = {
  day: string;
  hours: string;
  closed?: boolean;
};

export const products: Product[] = [
  {
    id: "campagne",
    name: "Pain de campagne",
    description: "Levain naturel, croûte épaisse, mie alvéolée.",
    price: "4,80 €",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80",
    alt: "Miche de pain de campagne tranchée",
  },
  {
    id: "croissant",
    name: "Croissant pur beurre",
    description: "Feuilletage croustillant, beurre de baratte.",
    price: "1,50 €",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    alt: "Croissants dorés sur une plaque",
  },
  {
    id: "baguette",
    name: "Baguette tradition",
    description: "Façonnage à la main, cuisson de la nuit.",
    price: "1,30 €",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    alt: "Baguettes tradition fraîchement cuites",
  },
  {
    id: "brioche",
    name: "Brioche tressée",
    description: "Mie filante, vanille et beurre doux.",
    price: "6,20 €",
    image:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
    alt: "Brioche dorée sur un plan de travail",
  },
  {
    id: "tarte",
    name: "Tarte du verger",
    description: "Fruits de saison, pâte sablée maison.",
    price: "3,90 €",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=800&q=80",
    alt: "Tarte aux fruits sur un plateau",
  },
  {
    id: "fougasse",
    name: "Fougasse aux olives",
    description: "Huile d'olive, olives noires, fleur de sel.",
    price: "3,40 €",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
    alt: "Fougasse artisanale aux olives",
  },
];

export const openingHours: DayHours[] = [
  { day: "Lundi", hours: "Fermé", closed: true },
  { day: "Mardi", hours: "7h00 – 19h00" },
  { day: "Mercredi", hours: "7h00 – 19h00" },
  { day: "Jeudi", hours: "7h00 – 19h00" },
  { day: "Vendredi", hours: "7h00 – 19h30" },
  { day: "Samedi", hours: "7h00 – 19h30" },
  { day: "Dimanche", hours: "7h00 – 13h00" },
];
