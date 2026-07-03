import { useTranslation } from "react-i18next";

export interface Property {
  id: string;
  title: string;
  tipo: "atico" | "villa" | "casa" | "loft" | "apartamento";
  price: string;
  priceValue: number;
  location: string;
  city: "miraflores" | "san-isidro" | "la-molina" | "barranco" | "asia";
  beds: number;
  baths: number;
  sqm: number;
  tag?: string;
  images: string[];
  description: string;
  features: string[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  phone: string;
  email: string;
  photo: string;
  languages: string[];
  sales: number;
}

const rawProperties = [
  {
    id: "1",
    title_es: "Penthouse Vista al Pacífico",
    title_en: "Pacific View Penthouse",
    tipo: "atico",
    price: "S/ 3.850.000",
    priceValue: 3850000,
    location: "Malecón de la Reserva, Miraflores",
    city: "miraflores",
    beds: 4,
    baths: 3,
    sqm: 280,
    tag_es: "Exclusivo",
    tag_en: "Exclusive",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&h=1300&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=900&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
    ],
    description_es:
      "Penthouse de lujo en el icónico Malecón de la Reserva con vistas panorámicas al Pacífico y el acantilado de Miraflores. Acabados de primera línea, terrazas privadas y amenidades exclusivas definen este espacio único en la capital peruana.",
    description_en:
      "Luxury penthouse on the iconic Malecón de la Reserva with panoramic views of the Pacific and the Miraflores cliff. Top-of-the-line finishes, private terraces, and exclusive amenities define this unique space in the Peruvian capital.",
    features_es: ["Terraza de 90 m²", "Piscina privada", "Spa completo", "Bodega climatizada", "Domótica integral", "Estacionamiento × 3"],
    features_en: ["90 m² terrace", "Private pool", "Full spa", "Climate-controlled wine cellar", "Smart home system", "Parking × 3"],
  },
  {
    id: "2",
    title_es: "Casa La Planicie",
    title_en: "La Planicie House",
    tipo: "casa",
    price: "S/ 2.200.000",
    priceValue: 2200000,
    location: "La Planicie, La Molina",
    city: "la-molina",
    beds: 5,
    baths: 4,
    sqm: 480,
    tag_es: "Nueva",
    tag_en: "New",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&h=1200&fit=crop&auto=format",
    ],
    description_es:
      "Residencia de nueva construcción en La Planicie, el entorno más tranquilo y verde de La Molina. Arquitectura contemporánea con grandes jardines, piscina y materiales importados de primera calidad.",
    description_en:
      "New construction residence in La Planicie, the quietest and greenest environment in La Molina. Contemporary architecture with large gardens, pool, and top-quality imported materials.",
    features_es: ["Jardín de 1.200 m²", "Piscina con heating", "Cuarto de servicio", "Garaje × 4", "Paneles solares", "Certificado A"],
    features_en: ["1,200 m² garden", "Heated pool", "Maid's quarters", "Garage × 4", "Solar panels", "A-rating certificate"],
  },
  {
    id: "3",
    title_es: "Departamento Premium",
    title_en: "Premium Apartment",
    tipo: "apartamento",
    price: "S/ 1.150.000",
    priceValue: 1150000,
    location: "Av. Javier Prado Este, San Isidro",
    city: "san-isidro",
    beds: 3,
    baths: 2,
    sqm: 195,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&h=900&fit=crop&auto=format",
    ],
    description_es:
      "Departamento de alta gama en el corazón financiero de San Isidro. Techos de doble altura, acabados europeos y una terraza privada con vistas sobre el Olivar, el bosque más icónico de Lima.",
    description_en:
      "High-end apartment in the financial heart of San Isidro. Double-height ceilings, European finishes, and a private terrace overlooking El Olivar, Lima's most iconic forest.",
    features_es: ["Terraza 40 m²", "Doble altura 5 m", "Cocina italiana", "Pisos de mármol", "Clima centralizado", "Conserje 24 h"],
    features_en: ["40 m² terrace", "5 m double height", "Italian kitchen", "Marble floors", "Central climate control", "24/7 Concierge"],
  },
  {
    id: "4",
    title_es: "Mansión Chacarilla",
    title_en: "Chacarilla Mansion",
    tipo: "casa",
    price: "S/ 4.500.000",
    priceValue: 4500000,
    location: "Chacarilla del Estanque, Surco",
    city: "la-molina",
    beds: 6,
    baths: 5,
    sqm: 750,
    tag_es: "Oportunidad",
    tag_en: "Opportunity",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=900&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
    ],
    description_es:
      "Mansión de lujo en Chacarilla del Estanque, uno de los urbanizaciones más exclusivas de Lima. Gran parcela arbolada, piscina temperada, cancha de squash y toda la privacidad que una familia exigente merece.",
    description_en:
      "Luxury mansion in Chacarilla del Estanque, one of Lima's most exclusive neighborhoods. Large wooded plot, heated pool, squash court, and all the privacy a demanding family deserves.",
    features_es: ["Parcela 2.800 m²", "Piscina temperada", "Cancha de squash", "Cine privado", "Sala de fitness", "Garaje × 6"],
    features_en: ["2,800 m² plot", "Heated pool", "Squash court", "Private cinema", "Fitness room", "Garage × 6"],
  },
  {
    id: "5",
    title_es: "Loft Boutique Barranco",
    title_en: "Barranco Boutique Loft",
    tipo: "loft",
    price: "S/ 850.000",
    priceValue: 850000,
    location: "Av. Grau, Barranco",
    city: "barranco",
    beds: 2,
    baths: 2,
    sqm: 165,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&h=1000&fit=crop&auto=format",
    ],
    description_es:
      "Antiguo almacén republicano convertido en loft de diseño en el barrio más bohemio de Lima. Techos de 5 metros, vigas originales de madera y ventanales industriales crean una atmósfera única e irrepetible.",
    description_en:
      "Former republican warehouse converted into a designer loft in Lima's most bohemian neighborhood. 5-meter ceilings, original wooden beams, and industrial windows create a unique and unrepeatable atmosphere.",
    features_es: ["Techos 5 m", "Vigas originales", "Mezzanine", "Cocina abierta", "Acceso azotea", "Bicicleta parking"],
    features_en: ["5 m ceilings", "Original beams", "Mezzanine", "Open kitchen", "Rooftop access", "Bicycle parking"],
  },
  {
    id: "6",
    title_es: "Casona Colonial Barranco",
    title_en: "Barranco Colonial House",
    tipo: "casa",
    price: "S/ 5.600.000",
    priceValue: 5600000,
    location: "Pedro de Osma, Barranco",
    city: "barranco",
    beds: 7,
    baths: 6,
    sqm: 920,
    tag_es: "Exclusivo",
    tag_en: "Exclusive",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1400&h=900&fit=crop&auto=format",
    ],
    description_es:
      "Casona republicana de 1918 completamente restaurada en la calle más icónica de Barranco. Jardín interior, piscina y una arquitectura de época preservada con maestría que convive con interiores de diseño contemporáneo.",
    description_en:
      "Fully restored 1918 republican house on Barranco's most iconic street. Interior garden, pool, and masterfully preserved period architecture that coexists with contemporary design interiors.",
    features_es: ["Jardín 1.800 m²", "Piscina", "Biblioteca", "Sala de música", "Cuartos de servicio", "Ascensor privado"],
    features_en: ["1,800 m² garden", "Pool", "Library", "Music room", "Maid's quarters", "Private elevator"],
  },
  {
    id: "7",
    title_es: "Departamento Malecón",
    title_en: "Malecón Apartment",
    tipo: "apartamento",
    price: "S/ 620.000",
    priceValue: 620000,
    location: "Malecón Cisneros, Miraflores",
    city: "miraflores",
    beds: 2,
    baths: 1,
    sqm: 95,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=1000&fit=crop&auto=format",
    ],
    description_es:
      "Departamento en el codiciado Malecón Cisneros con vistas directas al Pacífico. Reforma integral respetando los detalles originales del edificio, con acabados modernos que elevan la experiencia de vivir frente al mar.",
    description_en:
      "Apartment on the coveted Malecón Cisneros with direct views of the Pacific. Comprehensive renovation respecting the building's original details, with modern finishes that elevate the experience of living facing the sea.",
    features_es: ["Vista al mar", "Reforma integral", "Pisos de madera", "Balcón exterior", "Edificio seguro", "Estacionamiento"],
    features_en: ["Ocean view", "Full renovation", "Wood floors", "Outdoor balcony", "Secure building", "Parking"],
  },
  {
    id: "8",
    title_es: "Villa Asia Ocean Club",
    title_en: "Asia Ocean Club Villa",
    tipo: "villa",
    price: "S/ 1.650.000",
    priceValue: 1650000,
    location: "Asia, Cañete",
    city: "asia",
    beds: 4,
    baths: 3,
    sqm: 380,
    tag_es: "Nueva",
    tag_en: "New",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=1200&fit=crop&auto=format",
    ],
    description_es:
      "Villa de playa de nueva construcción en el exclusivo balneario de Asia, el destino de verano más codiciado por la élite limeña. Acceso privado a la playa, piscina infinity y materiales de primer nivel.",
    description_en:
      "New construction beach villa in the exclusive Asia resort, the most coveted summer destination for the Lima elite. Private beach access, infinity pool, and top-tier materials.",
    features_es: ["Jardín 600 m²", "Piscina infinity", "Acceso playa privada", "Garaje × 3", "Domótica completa", "Amoblado"],
    features_en: ["600 m² garden", "Infinity pool", "Private beach access", "Garage × 3", "Full smart home system", "Furnished"],
  },
  {
    id: "9",
    title_es: "Departamento Centro Financiero",
    title_en: "Financial Center Apartment",
    tipo: "apartamento",
    price: "S/ 1.050.000",
    priceValue: 1050000,
    location: "Centro Empresarial, San Isidro",
    city: "san-isidro",
    beds: 3,
    baths: 2,
    sqm: 150,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1400&h=1000&fit=crop&auto=format",
    ],
    description_es:
      "Departamento ejecutivo en el corazón financiero de San Isidro, a metros de las principales sedes corporativas. Diseño minimalista, vistas a las lomas y acceso directo a los mejores restaurantes de Lima.",
    description_en:
      "Executive apartment in the financial heart of San Isidro, meters away from main corporate headquarters. Minimalist design, views of the hills, and direct access to Lima's best restaurants.",
    features_es: ["Terraza 25 m²", "Vistas a las lomas", "Piscina comunitaria", "Gimnasio", "Seguridad 24 h", "Estacionamiento × 2"],
    features_en: ["25 m² terrace", "Hill views", "Community pool", "Gym", "24/7 security", "Parking × 2"],
  },
];

const rawAgents = [
  {
    id: "a1",
    name: "Jaime Monroy",
    role_es: "Directora General",
    role_en: "General Director",
    specialty_es: "Propiedades de Ultra Lujo",
    specialty_en: "Ultra Luxury Properties",
    phone: "+51 999 000 001",
    email: "maria.fernandez@arque.pe",
    photo: "/agents/jaime.png",
    languages: ["Español", "Inglés", "Francés"],
    sales: 142,
  },
  {
    id: "a2",
    name: "Gonzalo Centeno",
    role_es: "Asesor Senior",
    role_en: "Senior Advisor",
    specialty_es: "Mercado Limeño",
    specialty_en: "Lima Market",
    phone: "+51 999 000 002",
    email: "carlos.torres@arque.pe",
    photo: "/agents/gonzalo.png",
    languages: ["Español", "Inglés"],
    sales: 98,
  },
  {
    id: "a3",
    name: "Rodrigo Nuñez",
    role_es: "Especialista Miraflores",
    role_en: "Miraflores Specialist",
    specialty_es: "Residencial Miraflores y Barranco",
    specialty_en: "Miraflores and Barranco Residential",
    phone: "+51 999 000 003",
    email: "ana.quispe@arque.pe",
    photo: "/agents/rodrigo.png",
    languages: ["Español", "Inglés", "Quechua"],
    sales: 87,
  },
  {
    id: "a4",
    name: "Jesús Cordova",
    role_es: "Asesor Internacional",
    role_en: "International Advisor",
    specialty_es: "Inversión y Clientes Extranjeros",
    specialty_en: "Investment and Foreign Clients",
    phone: "+51 999 000 004",
    email: "diego.villanueva@arque.pe",
    photo: "/agents/jesus.jpg",
    languages: ["Español", "Inglés", "Portugués"],
    sales: 73,
  },
];

export function useData() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "es";

  const properties: Property[] = rawProperties.map((p: any) => ({
    ...p,
    title: p["title_" + lang],
    tag: p["tag_" + lang] || undefined,
    description: p["description_" + lang],
    features: p["features_" + lang],
  }));

  const agents: Agent[] = rawAgents.map((a: any) => ({
    ...a,
    role: a["role_" + lang],
    specialty: a["specialty_" + lang],
  }));

  return { properties, agents };
}

// Fallbacks for outside React
export const properties: Property[] = rawProperties.map((p: any) => ({
    ...p,
    title: p.title_es,
    tag: p.tag_es,
    description: p.description_es,
    features: p.features_es,
}));

export const agents: Agent[] = rawAgents.map((a: any) => ({
    ...a,
    role: a.role_es,
    specialty: a.specialty_es,
}));
