export interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface MarketPrice {
  market: string;
  price: number;
}

export interface Product {
  id: number | string;
  slug: string;
  nameBn: string;
  name?: string;
  icon: string;
  unit: string;
  price: number;
  todayPrice?: number;
  changePercent: number;
  category: string;
  categorySlug?: string;
  categoryName?: string;
  description?: string;
  minPrice?: number;
  maxPrice?: number;
  averagePrice?: number;
  marketPrices?: MarketPrice[];
  markets?: MarketPrice[];
}