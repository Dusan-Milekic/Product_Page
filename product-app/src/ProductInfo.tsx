import "./App.css";
import "./ProductInfo.css";
export default function ProductInfo() {
  return (
    <>
      <div>
        <div className="info px-8 flex flex-col gap-4">
          <h3 className="font-extrabold  text-xs text-gray-500 tracking-widest">
            SNEAKER COMPANY
          </h3>
          <h2 className="font-extrabold text-black text-3xl">
            Fall Limited Edition Sneakers
          </h2>
          <p className="text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <h2 className="text-black font-bold text-3xl">$125.00</h2>
              <p className="bg-black font-bold px-2 rounded-md">50%</p>
            </div>

            <p className="text-gray-600 font-semibold line-through">$250.00</p>
          </div>
        </div>

        <div className="info-btn flex px-10 mt-7 flex-col gap-5">
          <div
            className=" bg-gray-100 w-full h-14 max-h-full flex justify-between items-center rounded-xl "
            id="numericContainer"
          >
            <div className=" w-10 hover:bg-black  h-full flex justify-center items-center rounded-l-xl cursor-pointer">
              <img src="icon-minus.svg" alt="minus" />
            </div>
            <p className="text-black font-bold">0</p>

            <div className="w-10 hover:bg-black h-full flex items-center justify-center rounded-r-xl cursor-pointer">
              <img src="icon-plus.svg" alt="plus" />
            </div>
          </div>

          <div
            className="rounded-xl flex gap-3 justify-center items-center py-5 bg-orange-500"
            id="cart"
          >
            <img src="icon-cart.svg" alt="cart" className="h-5" />
            <p className="text-black font-bold text-lg">Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
}
