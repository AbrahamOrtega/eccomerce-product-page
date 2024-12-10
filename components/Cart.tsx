import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import ProductModel from "@/models/ProductModel";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { removeFromCart } from "@/features/cartSlice";

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

export default function Cart(props: {
  handleCartOpen: () => void;
  cartOpen: boolean;
}) {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveProduct = (productId: string) => {
    // Remove product from cart
    dispatch(removeFromCart(productId));
  };

  return (
    <div
      onClick={props.handleCartOpen}
      className="relative flex items-center justify-center"
    >
      {/* Cart Icon */}
      <button
        onClick={props.handleCartOpen}
        className="relative text-darkGrayishBlue hover:text-veryDarkBlue"
      >
        {/* Product count */}
        {cartItems.length > 0 && (
          <div className="absolute flex right-0 top-0 w-6 h-4 transform translate-x-1/3 -translate-y-1/4 text-[12px] justify-center items-center bg-orange text-white rounded-full">
            {cartItems.length}
          </div>
        )}
        <IoCartOutline size={32} />
      </button>

      {/* Cart panel */}
      {props.cartOpen && (
        <div
          className="fixed right-0 w-full px-2 top-[72px] max-w-[500px] lg:absolute lg:left-0 lg:top-12 lg:w-[400px] lg:-translate-x-1/2 lg:translate-y-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col bg-white shadow-xl rounded-lg py-6 gap-y-4 items-start">
            <h3 className="px-6 text-[20px] font-[700] text-veryDarkBlue">
              Cart
            </h3>
            <div className="flex w-full h-[1px] bg-slate-200" />

            {cartItems.length === 0 ? (
              <p className="w-full text-center py-12 font-[700] text-darkGrayishBlue">
                Your cart is empty
              </p>
            ) : (
              <div className="flex flex-col w-full px-6 gap-y-6">
                {cartItems.map((item: { productId: string; count: number }) => (
                  <div
                    key={item.productId}
                    className="flex w-full justify-between items-center"
                  >
                    <Image
                      className="rounded-lg"
                      src={product.images[0].thumbail}
                      alt={product.title}
                      width={56}
                      height={56}
                    />
                    <div className="flex flex-col text-darkGrayishBlue">
                      <p>{product.title}</p>
                      <div className="flex gap-x-2">
                        <p>{product.newPrice}</p>
                        <p>x {item.count}</p>
                        <p className="text-veryDarkBlue font-[700]">
                          {`$${
                            Number.parseFloat(product.newPrice || "") *
                            item.count
                          }.00`}
                        </p>
                      </div>
                    </div>
                    <button
                      className="w-fit"
                      onClick={() => handleRemoveProduct(item.productId)}
                    >
                      <MdDelete
                        className="text-darkGrayishBlue hover:text-veryDarkBlue"
                        size={24}
                      />
                    </button>
                  </div>
                ))}

                <button className="flex w-full font-[700] text-veryDarkBlue justify-center p-4 bg-orange hover:bg-orange/80 rounded-lg">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
