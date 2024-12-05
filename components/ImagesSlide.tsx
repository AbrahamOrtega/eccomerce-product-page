import Image from "next/image";
import ProductModel from "@/models/ProductModel";
import Link from "next/link";
import { useState } from "react";
import ImagesSlideModal from "./ImagesSlideModal";

export default function ImagesSlide(props: { product: ProductModel }) {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[500px]">
      {/* ImagesSlideModal component */}
      {modalOpen && (
        <ImagesSlideModal
          product={props.product}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          setModalOpen={setModalOpen}
        />
      )}
      <div
        className="flex w-full rounded-lg overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {props.product.images.map((image, index) => (
          <Image
            className="snap-center"
            key={index}
            id={`${index}`}
            src={image.img}
            alt={`${props.product.title}-${index}`}
            width={1000}
            height={1000}
          />
        ))}
      </div>
      <div className="flex mt-4 justify-between w-full">
        {props.product.images.map((image, index) => (
          <Link
            key={index}
            href={`#${index}`}
            className={`relative rounded-lg overflow-hidden w-[20%] `}
            onClick={() => setActiveImage(index)}
          >
            <div
              className={`absolute w-full h-full hover:bg-white/35 rounded-lg ${
                activeImage === index && "bg-white/50 border-2 border-orange"
              }`}
            />
            <Image
              src={image.thumbail}
              alt={props.product.title}
              width={200}
              height={200}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
