export default interface ProductModel {
  id: string;
  title: string;
  seller: string;
  price: string;
  descount: string;
  newPrice: string | null;
  description: string;
  images: {
    img: string;
    thumbail: string;
  }[];
}
