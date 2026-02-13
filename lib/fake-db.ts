export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export const db: { products: Product[] } = {
  products: [
    {
      id: 1,
      title: "Sepatu Keren",
      price: 50,
      images: ["https://picsum.photos/200"],
    },
    {
      id: 2,
      title: "Tas Cantik",
      price: 80,
      images: ["https://picsum.photos/200"],
    },
  ],
};

