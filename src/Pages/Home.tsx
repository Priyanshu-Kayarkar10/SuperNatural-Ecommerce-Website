import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
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
    <div className="  w-full h-screen ">
      <div className=" image bg-[url('../src/assets/images/hero-mobile-4.png')] lg:bg-none lg:bg-black lg:h-[100%] ">
        <div className=" pt-28 flex flex-col items-center lg:items-start justify-start h-full text-white px-10 font-song lg:px-16 lg:pt-48 ">
          <h1 className="flex  text-[2.4rem] font-semibold lg:text-[5.5rem] text-white flex-col text-center lg:text-left lg:leading-[5rem] ">
            Refillable,
            <br />
            natural,
            <br />
            scent-sational.
          </h1>
          <p className="hidden mt-6 text-[1.1rem] lg:flex">
            Redefine your bathroom with our deodorant,
            <br />
            body wash, lip balm and so much more.
            <br />
            Plastic waste stinks, but you don’t have to.
          </p>
          <div className="btncontainer flex flex-col gap-y-6 pt-10 font-poppins -tracking-[0.4px] text-[0.9rem] font-semibold items-center justify-center lg:flex-row lg:gap-x-4 ">
            <button className=" w-[12rem] lg:w-[14rem] px-4 h-[2.9rem] lg:h-[3.5rem] lg:rounded-lg lg:px-6  bg-n-5 rounded-md flex items-center  justify-between ">
              SHOP DEODORANT
              <MdKeyboardArrowRight className="bg-white/25 rounded-full h-[1.45rem] w-[1.45rem] p-1" />
            </button>
            <button className=" w-[12rem] lg:w-[14rem] px-4 h-[2.9rem] lg:h-[3.5rem] lg:rounded-lg lg:px-6 bg-n-1  text-black rounded-md flex items-center justify-between ">
              SHOP BODY WASH
              <MdKeyboardArrowRight className="bg-black/25 rounded-full h-[1.45rem] w-[1.45rem] p-1" />
            </button>
          </div>
        </div>
      </div>
      {/* As you wish */}

      {/* 👇 downside of home */}
      <section className=" mt-28 w-full h-full px-10 py-3 lg:py-0 ">
        <h1 className="text-[1.5rem]  font-song tracking-[0.5px] text-center font-semibold lg:text-[2.5rem] md:px-[10rem] lg:px-[8rem] xl:px-[20rem] ">
          High-performing, natural body care without the waste.
        </h1>
        <div className="bodycare lg:mt-16 mt-8 flex flex-col lg:flex-row  w-full h-[12rem] text-center lg:px-[3rem]  gap-y-[3rem] xl:px-[15rem]   ">
          {/* Up Wards */}
          <div className="w-full h-[50%]  flex items-center justify-center  gap-x-4 lg:gap-x-10 ">
            <div className="flex w-[50%] h-full  flex-col gap-y-1 ">
              <span className="text-[1.2rem] lg:text-[1.4rem] ">👃</span>
              <h1 className=" lg:font-bold font-semibold lg:text-[1.3rem] text-[1.1rem] -tracking-[0.2px] ">
                Effective
              </h1>
              <p className=" lg:leading-[2rem] leading-[1.7rem] lg:text-[1rem] text-[0.9rem] tracking-[0.2px] ">
                Rigorously tried, tested and customer approved
              </p>
            </div>
            <div className="flex w-[50%] h-full  flex-col gap-y-1 ">
              <span className="text-[1.2rem] lg:text-[1.4rem] ">❌</span>
              <h1 className=" lg:font-bold font-semibold lg:text-[1.3rem] text-[1.1rem] -tracking-[0.2px] ">
                No waste
              </h1>
              <p className=" lg:leading-[2rem] leading-[1.7rem] lg:text-[1rem] text-[0.9rem] tracking-[0.2px] ">
                Unique plastic-free, compostable refills
              </p>
            </div>
          </div>
          {/* Down Wards */}
          <div className="w-full h-[50%]  flex items-center justify-center  gap-x-4 ">
            <div className="flex w-[50%] h-full  flex-col gap-y-1 ">
              <span className="text-[1.2rem] lg:text-[1.4rem] ">🌱</span>
              <h1 className=" lg:font-bold font-semibold lg:text-[1.3rem] text-[1.1rem] -tracking-[0.2px] ">
                Naturally vegan
              </h1>
              <p className=" lg:leading-[2rem] leading-[1.7rem] lg:text-[1rem] text-[0.9rem] tracking-[0.2px] ">
                Powered by plants, not parabens or aluminium
              </p>
            </div>
            <div className="flex w-[50%] h-full  flex-col gap-y-1 ">
              <span className="text-[1.2rem] lg:text-[1.4rem] ">📦</span>
              <h1 className=" lg:font-bold font-semibold lg:text-[1.3rem] text-[1.1rem] -tracking-[0.2px] ">
                Convenient
              </h1>
              <p className=" lg:leading-[2rem] leading-[1.7rem] lg:text-[1rem] text-[0.9rem] tracking-[0.2px] ">
                Delivered through your letterbox when needed
              </p>
            </div>
          </div>
        </div>

        <h1 className=" tracking-1 text-[2.8rem] pt-[7.5rem] lg:pt-[1.5rem] lg:text-[5.8rem] text-center font-song font-bold ">
          How it works
        </h1>

        <section className=" w-full h-full flex items-center md:px-10  flex-col py-8 ">
          <div className="w-full md:w-[40rem]  lg:w-[45rem] py-8 px-6 border border-n-1 rounded-3xl shadow-sm shadow-black/25 ">
            <StepsList steps={stepData} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
