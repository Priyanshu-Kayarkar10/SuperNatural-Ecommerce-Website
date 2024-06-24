import { useEffect, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { ProductCard } from "./ProductCard";
import SliderCard from "../Components/Home/SliderCard";
import Footer from "../Components/Footer";
import FeatureCard from "../Components/Home/FeatureCard";

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      };

      const handleNextClick = () => {
        scrollContainer.scrollLeft += 180;
      };

      const handlePreviousClick = () => {
        scrollContainer.scrollLeft -= 180;
      };

      scrollContainer.addEventListener("wheel", handleWheel);

      nextBtnRef.current?.addEventListener("click", handleNextClick);
      previousBtnRef.current?.addEventListener("click", handlePreviousClick);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
        nextBtnRef.current?.removeEventListener("click", handleNextClick);
        previousBtnRef.current?.removeEventListener(
          "click",
          handlePreviousClick
        );
      };
    }
  }, []);

  interface Step {
    heading: string;
    para: string;
  }

  const stepData: Step[] = [
    {
      heading: `1. Choose your case🎨`,
      para: "Our reusable Wild case is a stylish and timeless design - all you have to do is pick your colour.",
    },
    {
      heading: "2. Pick scents 🍭",
      para: `Choose your favourite Wild fragrance and we'll take care of the rest.`,
    },
    {
      heading: "3. Subscribe & save or buy once 📦",
      para: "We will ship your refills out to you exactly as and when you want.",
    },
  ];

  const StepsList: React.FC<{ steps: Step[] }> = ({ steps }) => (
    <ul className="flex flex-col gap-y-8   ">
      {steps.map((step, index) => (
        <li className="" key={index}>
          <h3 className="font-semibold md:text-[1.2rem] text-[1.1rem] py-3 ">
            {step.heading}
          </h3>
          <p className=" text-[1.05rem] ">{step.para}</p>
        </li>
      ))}
      <button className="uppercase flex items-start w-[10rem] justify-between text-white font-semibold -tracking-[0.2px]  text-[0.9rem]  p-3 rounded-lg bg-n-5 ">
        Get Started{" "}
        <MdKeyboardArrowRight className="bg-white/25 rounded-full h-[1.45rem] w-[1.45rem] p-1" />
      </button>
    </ul>
  );

  return (
    <section className="font-space">
      <div className="w-full bg-[url('https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1549839389454-V3EMXKBSKP3WS3IAJ9WE/yellow_messy_2000x1350_v2.jpg?format=1500w')] h-screen bg-center bg-no-repeat  " />
      <div className="w-full py-16 md:px-[3rem] lg:flex px-5 lg:px-[5rem] lg:gap-x-[1.3rem] bg-[url('https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1718993730398-OJQU6OW9BUF7LY0T9B52/Scoop+AShop+2.png?format=2500w')]  bg-no-repeat ">
        <span className="lg:w-[50%] pb-20 ">
          <img
            className="  "
            src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/419f19c0-f625-419b-905d-e04384d456b5/Untitled+design+%281%29.png?format=750w"
            alt=""
          />
        </span>
        <div className="flex lg:w-[50%] flex-col gap-y-6 py-12 lg:gap-y-[4rem] text-right ">
          <h1 className="font-normal text-[2rem] leading-[2rem] lg:text-[3rem] lg:leading-[3.5rem] ">
            Cause the only thing that should melt down is ice cream.
          </h1>
          <p className="leading-[1.6rem] font-normal text-[1.2rem] tracking-[0.6px] lg:text-[1.5rem] ">
            Artificially dyed cakes made us cringe, but plain white swirls left
            us sulking. So we followed the rainbow to a fresh recipe for vibrant
            frostings — made from ingredients that made us proud, and bursting
            with the incredible taste of real buttercream.
          </p>
          <button className=" text-right text-[2rem] font-semibold hover:text-white group relative lg:text-[3rem]  ">
            Shop frostings.
            <span className="absolute right-0 bottom-0 w-0 h-[3px] bg-white transition-all duration-500 group-hover:w-[13.5rem] lg:group-hover:w-[21rem] "></span>
          </button>
        </div>
      </div>
      <div className="w-full mt-32 md:px-[3rem] lg:flex px-5 lg:px-[5rem] lg:gap-x-[1.3rem] ">
        <div className="flex lg:w-[50%] flex-col gap-y-6 lg:gap-y-[4rem] ">
          <h1 className="font-normal text-[2rem] leading-[2rem] lg:text-[3rem] lg:leading-[3.5rem] ">
            Raise your hand for real rainbows.
          </h1>
          <p className="leading-[1.6rem] font-normal text-[1.2rem] tracking-[0.6px] lg:text-[1.5rem] ">
            In the world of playful baking chips, colors come with a side of
            chemicals. So we created the first colorful chip made with colors
            from plants, and a rich & creamy sweetness from coconut milk and
            organic, non-gmo cane sugar.
          </p>
          <button className="text-left text-[2rem] font-semibold hover:text-yellow group relative lg:text-[3rem]  ">
            Shop chips.
            <span className="absolute left-0 bottom-0 w-0 h-[3px] lg:mb-1 bg-n-1 transition-all duration-500 group-hover:w-[10.3rem] lg:group-hover:w-[15.7rem] "></span>
          </button>
        </div>
        <span className="lg:w-[50%] pb-20 ">
          <img
            className="  "
            src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/9bdca4a8-9c77-4e60-b91a-75f4772d284f/Supernatural-Rainbow-Chips_230929.png?format=750w"
            alt=""
          />
        </span>
      </div>

      <div className="w-full mt-32 md:px-[3rem] lg:flex px-5 lg:px-[5rem] bg-n-2 lg:gap-x-[1.3rem] py-16 ">
        <span className="lg:w-[50%] pb-20 ">
          <img
            className="  "
            src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/b22172bc-0672-457e-8eba-325e93f5d2be/Untitled+design+%284%29.png?format=750w"
            alt=""
          />
        </span>
        <div className="flex lg:w-[50%] flex-col gap-y-6 py-20 text-white lg:gap-y-[4rem] text-right ">
          <h1 className="font-normal text-[2rem] leading-[2rem] lg:text-[3rem] lg:leading-[3.5rem] ">
            Let’s party with plants.
          </h1>
          <p className="leading-[1.6rem] font-normal text-[1.2rem] tracking-[0.6px] lg:text-[1.5rem] ">
            Artificially dyed cakes made us cringe, but plain white swirls left
            us sulking. So we followed the rainbow to a fresh recipe for vibrant
            frostings — made from ingredients that made us proud, and bursting
            with the incredible taste of real buttercream.
          </p>
          <button className=" text-right text-[2rem] font-semibold hover:text-black group relative lg:text-[3rem]  ">
            Shop frostings.
            <span className="absolute right-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-500 group-hover:w-[13.7rem] lg:group-hover:w-[20.3rem] "></span>
          </button>
        </div>
      </div>

      <div className="w-full md:px-[3rem] lg:flex px-5 lg:px-[5rem] bg-[url('https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1648661995656-4SZCU65IGBASAL61YRA9/Untitled+design+%285%29.png?format=2500w')] bg-center bg-cover bg-no-repeat lg:gap-x-[1.3rem] py-24 text-white ">
        <div className="flex lg:w-[50%] flex-col gap-y-6 lg:gap-y-[4rem] ">
          <h1 className="font-normal text-[2rem] leading-[2rem] lg:text-[3rem] lg:leading-[3.5rem] ">
            Big bags for big fans.
          </h1>
          <p className="leading-[1.6rem] font-normal text-[1.2rem] tracking-[0.6px] lg:text-[1.5rem] ">
            Save up to 35% with extra large bags of our bestselling dye-free
            sprinkles, perfect for bakeries, scoop shops, and extremely lucky
            children.
          </p>
          <button className="text-left text-[2rem] font-semibold hover:text-black group relative lg:text-[3rem]  ">
            Shop big bags.
            <span className="absolute left-0 bottom-0 w-0 h-[3px] lg:mb-1 bg-black transition-all duration-500 group-hover:w-[13.4rem] lg:group-hover:w-[21rem] "></span>
          </button>
        </div>
        <span className="lg:w-[50%]  pb-20 ">
          <img
            className=" md:w-[30rem] lg:w-auto mx-auto my-auto "
            src="https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/967c3c2f-85a1-4e02-a455-2cfcee86390a/Supernatural_Rainbow-Softies-1lb_2204.png?format=750w"
            alt=""
          />
        </span>
      </div>

      <Footer />
    </section>
  );
};

export default Home;
