import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <h1 className="text-center text-2xl font-semibold mb-8">Sign Up</h1>
      <div className="flex flex-col gap-y-4">
        <input
          type="text"
          placeholder="Username"
          className="px-4 py-2 bg-transparent border border-gray-300 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-4 py-2 bg-transparent border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-4 py-2 bg-transparent border border-gray-300 rounded"
        />
        <button className="mt-4 p-2 bg-black text-white rounded hover:bg-opacity-80 active:bg-opacity-60">
          Create Account
        </button>
      </div>
      <div className="mt-8 flex flex-col items-center gap-y-2">
        <p>Or</p>
        <button className="flex items-center w-full max-w-xs px-4 py-2 border border-gray-300 rounded hover:opacity-80 active:opacity-60 gap-x-10 ">
          <FcGoogle className="mr-2 h-8 w-8 " />
          <p>Sign Up with Google</p>
        </button>
      </div>
    </>
  );
};

export default Signup;
