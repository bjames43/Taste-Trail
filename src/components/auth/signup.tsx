export default function SignIn() {
    return (
      <div className="relative h-screen">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#63e_100%)]" />
  
        {/* Centered container */}
        <div className="relative z-30 flex h-full items-center justify-center">
          <div className="bg-gradient-to-b from-gray-800 to-indigo-600 shadow-lg w-[400px] h-[420px] rounded-xl border border-white/30 p-6 text-white flex flex-col items-center justify-center space-y-4">
            <p className="text-lg font-semibold ">Welcome to Taste Trail</p>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 rounded-md border border-gray-300 bg-black text-black focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-md border border-gray-300 text-black bg-gradient-to-br from-gray-800 to-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button className="w-full bg-sky-500 text-white px-4 py-2 rounded-md  hover:bg-sky-600 transition-all duration-300">
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
  