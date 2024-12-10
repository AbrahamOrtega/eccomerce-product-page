import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductModel from "@/models/ProductModel";
import { IoCartOutline } from "react-icons/io5";
import ImagesSlide from "@/components/ImagesSlide";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { addToCart } from "@/features/cartSlice";

const product: ProductModel = {
  id: "1",
  title: "Fall Limited Edition Sneakers",
  seller: "SNEAKER COMPANY",
  price: "250.00",
  descount: "50%",
  newPrice: "125.00",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  images: [
    {
      img: "/images/image-product-1.jpg",
      thumbail: "/images/image-product-1-thumbnail.jpg",
    },
    {
      img: "/images/image-product-2.jpg",
      thumbail: "/images/image-product-2-thumbnail.jpg",
    },
    {
      img: "/images/image-product-3.jpg",
      thumbail: "/images/image-product-3-thumbnail.jpg",
    },
    {
      img: "/images/image-product-4.jpg",
      thumbail: "/images/image-product-4-thumbnail.jpg",
    },
  ],
};

export default function Home() {
  const [countProduct, setCountProduct] = useState<number>(1);
  const cartItems = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProductCount = () => {
    setCountProduct((prev) => prev + 1);
  };

  const handleRemoveProductCount = () => {
    if (countProduct > 1) {
      setCountProduct((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row lg:mx-36 lg:mt-12 lg:mb-0 mb-8">
        <div className="flex w-full lg:w-1/2 items-center justify-center">
          <ImagesSlide product={product} />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 items-center justify-center mt-6 lg:mt-0 px-4 lg:px-0">
          <div className="flex flex-col w-full lg:max-w-[80%]">
            <p className="text-darkGrayishBlue font-[700] tracking-widest">
              {product.seller}
            </p>
            <h3 className="text-[36px] lg:text-[56px] font-[700] leading-tight mt-2">
              {product.title}
            </h3>
            <p className="text-darkGrayishBlue mt-8">{product.description}</p>

            <div className="flex items-center mt-6 gap-x-6">
              <p className="text-veryDarkBlue font-[700] text-[24px] lg:text-[36px]">
                ${product.newPrice}
              </p>
              <div className="text-white font-[700] bg-veryDarkBlue px-2 rounded">
                {product.descount}
              </div>
            </div>
            <p className="text-[16px] lg:text-[18px] font-[700] text-darkGrayishBlue line-through">
              ${product.price}
            </p>

            <div className="flex flex-col lg:flex-row w-full gap-x-8 gap-y-4 mt-8">
              <div className="flex bg-lightGrayishBlue rounded-lg py-6 justify-between">
                <button className="px-4" onClick={handleRemoveProductCount}>
                  <Image
                    src={"/icons/icon-minus.svg"}
                    alt="minus"
                    width={12}
                    height={12}
                  />
                </button>
                <p className="px-6 font-[700]">{countProduct}</p>
                <button className="px-4" onClick={handleAddProductCount}>
                  <Image
                    src={"/icons/icon-plus.svg"}
                    alt="plus"
                    width={12}
                    height={12}
                  />
                </button>
              </div>

              <button
                className="flex flex-grow py-6 bg-orange hover:bg-orange/80 rounded-lg justify-center gap-x-3"
                onClick={() =>
                  dispatch(
                    addToCart({ productId: product.id, count: countProduct })
                  )
                }
              >
                <IoCartOutline size={24} />
                <p className="text-veryDarkBlue font-[700]">Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
