export interface ShoppingCartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

export interface ProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FilterProps {
  name: string;
  rangePrice: number[];
  sort: string;
}
