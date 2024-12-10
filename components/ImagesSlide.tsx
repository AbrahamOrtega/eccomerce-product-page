import Image from "next/image";
import ProductModel from "@/models/ProductModel";
import Link from "next/link";
import { useState } from "react";
import ImagesSlideModal from "./ImagesSlideModal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ImagesSlide(props: { product: ProductModel }) {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleNext = () => {
    if (activeImage < props.product.images.length - 1) {
      setActiveImage(activeImage + 1);
    }
  };

  const handlePrev = () => {
    if (activeImage > 0) {
      setActiveImage(activeImage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[500px] relative">
      {/* ImagesSlideModal component */}
      {modalOpen && (
        <ImagesSlideModal
          product={props.product}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          setModalOpen={setModalOpen}
        />
      )}

      {/* Button "Prev" */}
      <Link
        className="flex lg:hidden absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-1/2 z-20 rounded-full bg-white shadow-lg p-2"
        href={`#${activeImage - 1}`}
        onClick={handlePrev}
      >
        <IoIosArrowBack className="text-veryDarkBlue hover:text-orange text-3xl font-[700]" />
      </Link>

      {/* Button "Next" */}
      <Link
        className="flex lg:hidden absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 z-20 rounded-full bg-white shadow-lg p-2"
        href={`#${activeImage + 1}`}
        onClick={handleNext}
      >
        <IoIosArrowForward className="text-veryDarkBlue hover:text-orange text-3xl font-[700]" />
      </Link>

      <div
        className="flex w-full lg:rounded-lg overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar cursor-pointer"
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

      {/* Images selector */}
      <div className="hidden lg:flex mt-4 justify-between w-full">
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
