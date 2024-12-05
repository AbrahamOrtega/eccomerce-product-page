import Image from "next/image";

export default function Cart(props: { className: string }) {
  return (
    <div className={props.className}>
      <div className="flex flex-col bg-white shadow-xl rounded-lg py-6 gap-y-4 items-start">
        <h3 className="px-6 text-[20px] font-[700] text-veryDarkBlue">Cart</h3>
        <div className="flex w-full h-[1px] bg-slate-200" />
        <div className="flex flex-col w-full px-6 gap-y-6">
          <div className="flex w-full justify-between items-center">
            <Image
              className="rounded-lg"
              src={"/images/image-product-1-thumbnail.jpg"}
              alt=""
              width={56}
              height={56}
            />
            <div className="flex flex-col text-darkGrayishBlue">
              <p>Fall Limited Edition Sneakers</p>
              <div className="flex gap-x-2">
                <p>$125.00</p>
                <p> x 3</p>
                <p className="text-veryDarkBlue font-[700]">$375.00</p>
              </div>
            </div>
            <button className="w-fit" onClick={() => {}}>
              <Image
                src={"/icons/icon-delete.svg"}
                alt="delete"
                width={20}
                height={20}
              />
            </button>
          </div>

          <button className="flex w-full font-[700] text-veryDarkBlue justify-center p-4 bg-orange rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
