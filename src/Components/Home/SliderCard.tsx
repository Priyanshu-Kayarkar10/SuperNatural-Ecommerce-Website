const SliderCard = () => {
  interface slider {
    imageLink: string;
    productTitle: string;
    productPrice: string;
    productDetail: string;
  }

  const BodyWash: slider[] = [
    {
      imageLink:
        "https://i.postimg.cc/m2s1V4Xs/1711472641-ivory-bw-rf-1xrefill-Copy.jpg",
      productTitle: "Rainforest Oasis Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Sage, 1 Refill",
    },
    {
      imageLink:
        "https://i.postimg.cc/4xb3dhs7/1711472390-sage-bw-rf-1xrefill-sensitive.jpg",
      productTitle: "Rainforest Oasis Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Sage, 1 Refill",
    },
    {
      imageLink:
        "https://i.postimg.cc/pXCrZF5f/1700077333-black-bw-ts-case-1xrefill-product-card-Copy.jpg",
      productTitle: "Thunderstorm Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Black Case, 1 Refill",
    },
    {
      imageLink:
        "https://i.postimg.cc/d1grJTjk/1700563746-aqua-bw-ts-case-1xrefill-product-card-Copy.jpg",
      productTitle: "Thunderstorm Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Aqua Case,1 Refill",
    },
    {
      imageLink:
        "https://i.postimg.cc/JzWnMQVC/1714139157-bw-powder-blue-fc-ss-product-card.jpg",
      productTitle: "Fresh Cotton & Sea Salt Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Powder Blue Case, 1 Refill",
    },
    {
      imageLink:
        "https://i.postimg.cc/pV8nDrBC/1707748452-powderblue-ocean-mist-bw-1xrefill-product-card-Copy.jpg",
      productTitle: "Ocean Mist Body Wash Started Pack",
      productPrice: "£19",
      productDetail: "1 Powder Blue Case,1 Refill",
    },

    {
      imageLink:
        "https://i.postimg.cc/L5zYRQsw/1707748113-ivory-ocean-mist-bw-1xrefill-product-card-Copy.jpg",
      productTitle: "Ocean Mist Body Wash Started Pack",
      productPrice: "£19",
      productDetail: "1 Ivory Case,1 Refill",
    },

    {
      imageLink:
        "https://i.postimg.cc/jSRNqTPX/1707384584-sage-ocean-mist-bw-1xrefill-product-card-Copy.jpg",
      productTitle: "Ocean Mist Body Wash Started Pack",
      productPrice: "£19",
      productDetail: "1 Sage Case,1 Refill",
    },

    {
      imageLink:
        "https://i.postimg.cc/T1mm1Ytk/1701874480-a-o-sage-case-1xrefill-productcard-Copy.jpg",
      productTitle: "Amber & Oud Body Wash Started Pack",
      productPrice: "£19",
      productDetail: "1 Sage Case , 1 Refiil",
    },

    {
      imageLink:
        "https://i.postimg.cc/0NFbS1Mh/1690809367-aqua-c-v-1x-refill-productcard-Copy.jpg",
      productTitle: "Coconut & Vanilla Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Aqua, 1 Refill",
    },
    {
      imageLink:
        "https://i.postimg.cc/bwYDcTfV/1690809333-pink-c-v-1x-refill-productcard-Copy.jpg",
      productTitle: "Coconut & Vanilla Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Pink Case, 1 Refill",
    },

    {
      imageLink:
        "https://i.postimg.cc/15hwTwzb/1707384536-rose-cherryblossom-bw-1xrefill-product-card-Copy.jpg",
      productTitle: "Cherry Blossom Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Rose Case, 1 Refill",
    },

    {
      imageLink:
        "https://i.postimg.cc/sx9XbB6R/1690809458-aqua-fcss-1x-refill-productcard-Copy.jpg",
      productTitle: "Fresh cotton & Sea Salt Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Aqua Case, 1 Refill",
    },

    {
      imageLink:
        "https://i.postimg.cc/Kjyj975N/1690809417-pink-fcss-1x-refill-productcard-Copy.jpg",
      productTitle: "Fresh cotton & Sea Salt Body Wash Starter Pack",
      productPrice: "£19",
      productDetail: "1 Pink Case, 1 Refill",
    },
  ];

  console.log(BodyWash.length);

  return (
    <>
      {BodyWash.map((data: slider, index: number) => {
        return (
          <div
            key={index}
            className="w-[14rem] relative flex flex-col h-[22rem] border border-n-2 rounded-[1.3rem] p-4 md:w-[15rem] md:h-[23rem] cursor-pointer group  transition-transform  duration-300  "
          >
            <img
              className="rounded-[0.8rem] w-full h-[15rem]  group-hover:-translate-y-6 transition-transform duration-300 "
              src={data.imageLink}
              alt={data.productTitle}
            />
            <div className="datacontainer font-poppins leading-[1.3rem] text-center mt-3  ">
              <h1 className="font-semibold -tracking-[0.3px] text-[0.9rem] ">
                {data.productTitle}
              </h1>
              <p className="text-xs mt-1 ">{data.productDetail}</p>
              <h1 className="font-semibold mt-1 ">{data.productPrice}</h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SliderCard;
