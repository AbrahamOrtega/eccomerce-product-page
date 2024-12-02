import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [path, setPath] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative z-50">
      <div className="flex h-20 lg:h-28 items-center lg:border-b-2 mx-6 lg:mx-36">
        {/* Hamburger Menu */}
        <button
          className="flex lg:hidden mr-4 items-center"
          onClick={() => setMenuOpen(true)}
        >
          <Image src="/icons/icon-menu.svg" alt="menu" width={24} height={24} />
        </button>

        {/* Logo */}
        <Link href={"/"}>
          <Image
            className="w-28 lg:w-40"
            src="/icons/logo.svg"
            alt="logo"
            width={500}
            height={500}
          />
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex h-full ml-16 text-darkGrayishBlue gap-x-8">
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
          <div className="flex items-center gap-x-4 lg:gap-x-8">
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
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-0 bg-black/25 h-screen w-full"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="flex flex-col w-full max-w-72 h-full p-6 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setMenuOpen(false)}>
              <Image
                src={"/icons/icon-close.svg"}
                alt="close"
                width={24}
                height={24}
              />
            </button>

            <div className="flex flex-col text-[22px] font-[700] mt-12 gap-y-4">
              <button
                className={`w-fit ${
                  path === "collections"
                    ? "text-veryDarkBlue"
                    : "text-darkGrayishBlue"
                }`}
                onClick={() => setPath("collections")}
              >
                Collections
              </button>
              <button
                className={`w-fit ${
                  path === "men" ? "text-veryDarkBlue" : "text-darkGrayishBlue"
                }`}
                onClick={() => setPath("men")}
              >
                Men
              </button>
              <button
                className={`w-fit ${
                  path === "women"
                    ? "text-veryDarkBlue"
                    : "text-darkGrayishBlue"
                }`}
                onClick={() => setPath("women")}
              >
                Women
              </button>
              <button
                className={`w-fit ${
                  path === "about"
                    ? "text-veryDarkBlue"
                    : "text-darkGrayishBlue"
                }`}
                onClick={() => setPath("about")}
              >
                About
              </button>
              <button
                className={`w-fit ${
                  path === "contact"
                    ? "text-veryDarkBlue"
                    : "text-darkGrayishBlue"
                }`}
                onClick={() => setPath("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
