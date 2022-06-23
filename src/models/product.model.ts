export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  imageAlt: string;
  imageCredit: string;
}

export interface ProductState {
  products: { [id: string]: Product };
}
