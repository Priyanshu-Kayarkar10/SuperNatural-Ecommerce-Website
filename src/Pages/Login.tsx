import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [gender, setGender] = useState<string>("");
  const [date, setDate] = useState<string>("");

  return (
    <div className="w-full h-screen pt-[8rem]  lg:pt-[12rem] px-5 md:px-[3rem] md:pt-[10rem] lg:px-[5rem] font-space flex justify-center ">
      <main className=" px-10 w-[23rem] h-[70vh] rounded  flex flex-col border justify-center shadow-sm shadow-black/40 ">
        <h1 className="text-center text-2xl font-semibold mb-10 ">Login</h1>
        {/* <section className="bg-red-600 "> */}
        <div className=" flex justify-start  flex-col gap-y-2 ">
          <label htmlFor="" className=" text-lg ">
            Gender
          </label>
          <select
            className="px-2 py-1 bg-transparent border border-zinc-600 rounded-sm "
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex justify-start  flex-col gap-y-2 mt-5 ">
          <label htmlFor="" className="text-lg">
            Date of Birth
          </label>
          <input
            className="px-2 py-1 bg-transparent border border-zinc-600 rounded-sm "
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="mm/dd/yyyy"
          />
        </div>
        <div className=" mt-[5rem] flex items-center flex-col justify-center ">
          <p className=" group relative cursor-pointer">
            Already Signed In?
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-[8.5rem]"></span>
          </p>
          <button className=" hover:opacity-[0.8] active:opacity-[0.3] mt-5 flex w-[14rem] h-[2.5rem] text-center items-center overflow-hidden rounded gap-x-2  ">
            <FcGoogle className="w-[16%] h-full bg-white ml-2 " />{" "}
            <span className=" h-full w-[84%] bg-blue-600 {bg-n-1} flex items-center justify-center text-white ">
              Sign In with Google
            </span>
          </button>
        </div>
        {/* </section> */}
      </main>
    </div>
  );
};

export default Login;
