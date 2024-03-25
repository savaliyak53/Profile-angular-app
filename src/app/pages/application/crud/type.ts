export interface IMovieShowList {
  id: number;
  url: string;
  icon: string;
  name: string;
}

export interface IProducts {
  limit: number;
  products: product[];
  skip: number;
  total: number;
}

export interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
