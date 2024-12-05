import ProductModel from "../models/ProductModel";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ImagesSlideModal(props: {
  product: ProductModel;
  activeImage: number;
  setActiveImage: (index: number) => void;
  setModalOpen: (open: boolean) => void;
}) {
  const handleNext = () => {
    if (props.activeImage < props.product.images.length - 1) {
      props.setActiveImage(props.activeImage + 1);
    }
  };

  const handlePrev = () => {
    if (props.activeImage > 0) {
      props.setActiveImage(props.activeImage - 1);
    }
  };

  return (
    <div
      className="fixed flex top-0 left-0 w-full h-screen bg-veryDarkBlue/70 z-40 justify-center items-center"
      onClick={() => props.setModalOpen(false)}
    >
      <div
        className="flex flex-col w-full max-w-[30%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full justify-end">
          <button className="py-2" onClick={() => props.setModalOpen(false)}>
            <IoClose className="text-orange text-4xl font-[700]" />
          </button>
        </div>

        {/* Carrusel de imágenes */}
        <div className="relative w-full rounded-lg">
          {/* Button "Prev" */}
          <Link
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-20 rounded-full bg-white shadow-lg p-2"
            href={`#${props.activeImage - 1}`}
            onClick={handlePrev}
          >
            <IoIosArrowBack className="text-veryDarkBlue hover:text-orange text-4xl font-[700]" />
          </Link>

          {/* Button "Next" */}
          <Link
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-20 rounded-full bg-white shadow-lg p-2"
            href={`#${props.activeImage + 1}`}
            onClick={handleNext}
          >
            <IoIosArrowForward className="text-veryDarkBlue hover:text-orange text-4xl font-[700]" />
          </Link>

          <div className="flex w-full rounded-xl overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar cursor-pointer">
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
        </div>

        {/* Miniaturas */}
        <div className="flex mt-6 justify-between w-full px-12">
          {props.product.images.map((image, index) => (
            <Link
              key={index}
              href={`#${index}`}
              className="relative rounded-lg overflow-hidden w-[20%] cursor-pointer"
              onClick={() => props.setActiveImage(index)}
            >
              <div
                className={`absolute w-full h-full hover:bg-white/35 rounded-lg ${
                  props.activeImage === index &&
                  "bg-white/50 border-2 border-orange"
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
    </div>
  );
}
