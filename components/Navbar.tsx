import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [path, setPath] = useState<string>("");

  return (
    <div className="flex h-32 items-center border-b-2 mx-36">
      {/* Logo */}
      <Link href={"/"}>
        <Image src="/icons/logo.svg" alt="logo" width={150} height={150} />
      </Link>

      {/* Navigation */}
      <div className="flex h-full ml-16 text-darkGrayishBlue gap-x-8">
        <button
          className={`flex h-full items-center hover:text-veryDarkBlue ${
            path === "/collections" &&
            "border-collapse border-b-4 border-t-4 border-t-transparent border-orange text-veryDarkBlue"
          }`}
          onClick={() => setPath("/collections")}
        >
          <p>Collections</p>
        </button>
        <button
          className={`flex h-full items-center hover:text-veryDarkBlue ${
            path === "/men" &&
            "border-collapse border-b-4 border-t-4 border-t-transparent border-orange text-veryDarkBlue"
          }`}
          onClick={() => setPath("/men")}
        >
          <p>Men</p>
        </button>
        <button
          className={`flex h-full items-center hover:text-veryDarkBlue ${
            path === "/women" &&
            "border-collapse border-b-4 border-t-4 border-t-transparent border-orange text-veryDarkBlue"
          }`}
          onClick={() => setPath("/women")}
        >
          <p>Women</p>
        </button>
        <button
          className={`flex h-full items-center hover:text-veryDarkBlue ${
            path === "/about" &&
            "border-collapse border-b-4 border-t-4 border-t-transparent border-orange text-veryDarkBlue"
          }`}
          onClick={() => setPath("/about")}
        >
          <p>About</p>
        </button>
        <button
          className={`flex h-full items-center hover:text-veryDarkBlue ${
            path === "/contact" &&
            "border-collapse border-b-4 border-t-4 border-t-transparent border-orange text-veryDarkBlue"
          }`}
          onClick={() => setPath("/contact")}
        >
          <p>Contact</p>
        </button>
      </div>

      {/* Cart  and Perfil*/}
      <div className="flex flex-grow justify-end">
        <div className="flex items-center gap-x-8">
          <Image
            className=" cursor-pointer text-darkGrayishBlue hover:text-veryDarkBlue"
            src="/icons/icon-cart.svg"
            alt="cart"
            width={24}
            height={24}
          />
          <button className="border-2 border-transparent hover:border-orange rounded-full">
            <Image
              src="/images/image-avatar.png"
              alt="profile"
              width={56}
              height={56}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
