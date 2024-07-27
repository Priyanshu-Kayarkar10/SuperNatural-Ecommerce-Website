import { MdOutlineAdd } from "react-icons/md";

type ProductsProps = {
  productId: string;
  productImageLink?: string;
  productName: string;
  productPrice: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  productId = "1",
  productImageLink = "https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1696868995999-WIAOMUAJLD68MO6NX0SX/17.png",
  productName,
  productPrice,
}: // stock = 10,
// handler = () => {},
ProductsProps) => {
  return (
    <div
      id={productId}
      className="relative flex h-[13rem] w-[9rem] md:h-[16rem] md:w-[14rem] flex-col items-center py-3 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow font-space duration-300 group group-hover:bg-slate-700 lg:h-[20rem] lg:w-[18rem] "
    >
      <div className="absolute inset-0 bg-zinc-700/30 h-full rounded-lg w-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 select-none ">
        <span className=" cursor-pointer p-1 md:p-2 bg-n-1  rounded-full active:opacity-[0.2] ">
          <MdOutlineAdd className="text-black/90 h-7 w-7 md:h-8 md:w-8 " />
        </span>
      </div>
      <img
        className="w-32 h-32 md:h-40 md:w-40 lg:w-56 lg:h-56 rounded mb-2"
        src={productImageLink}
        alt={productName}
      />
      <h1 className=" px-2 md:px-4 text-[0.9rem] overflow-hidden font-semibold md:text-[1.125rem] lg:text-[1.25rem] mb-1 lg:mb-2 text-center ">
        {productName}
      </h1>
      <p className="text-lg md:text-xl font-bold">₹{productPrice}</p>
    </div>
  );
};

export default ProductCard;
