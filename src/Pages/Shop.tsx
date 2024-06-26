import ProductCard from "../Components/ProductCard";

const Shop = () => {
  const addToCard = () => {};
  return (
    <section className="w-full md:pt-[12rem] pt-[8rem] h-full font-space px-5 md:px-[3rem] lg:px-[5rem] ">
      <h1 className=" font-semibold text-center text-xl mb-8 md:mb-10 lg:mb-12 lg:text-[2rem] md:text-[1.5rem] ">
        Our Products 🥳{" "}
      </h1>

      <div className="w-full min-h-screen flex flex-wrap justify-center  gap-x-[1.5rem] md:gap-x-[4rem] lg:gap-x-[5.2rem] pb-[8rem] gap-y-[2rem] lg:gap-y-[3.2rem] bg-gray-100">
        <ProductCard
          key="9901"
          productName="Plant Based Food Color"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
        <ProductCard
          key="9901"
          productName="Softies"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
        <ProductCard
          key="9901"
          productName="Softies"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
        <ProductCard
          key="9901"
          productName="Softies"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
        <ProductCard
          key="9901"
          productName="Softies"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
        <ProductCard
          key="9901"
          productName="Softies"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
        <ProductCard
          key="9901"
          productName="Softies"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
        <ProductCard
          key="9901"
          productName="Softies"
          productPrice={8900}
          handler={addToCard}
          productId="9900"
          stock={45}
        />
      </div>
    </section>
  );
};

export default Shop;
