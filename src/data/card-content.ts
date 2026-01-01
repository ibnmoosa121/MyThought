// Card content data for dynamic text display
export interface CardContent {
  title: string;
  description: string;
  category: string;
}

export const cardContents: CardContent[] = [
  {
    title: "IT Solutions",
    description: "Comprehensive technology solutions including custom software development, cloud infrastructure, cybersecurity, and enterprise systems integration.",
    category: "TECH"
  },
  {
    title: "Fintech",
    description: "Innovative financial technology solutions for modern banking, payment processing, blockchain integration, and secure transactions.",
    category: "FINANCE"
  },
  {
    title: "Design & Marketing",
    description: "Creative design and strategic marketing services to build your brand, engage your audience, and drive growth through digital channels.",
    category: "CREATIVE"
  },
  {
    title: "Hajj & Umrah",
    description: "Comprehensive pilgrimage management solutions including travel planning, accommodation booking, and digital guidance systems for sacred journeys.",
    category: "SPIRITUAL"
  }
];