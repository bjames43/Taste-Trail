export default function Navbar() {
    return (
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md px-8 py-4 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-1 text-2xl hover:text-sky-500 transition-all duration-300">
            <a href="./" className="text-2xl ">Taste</a>  <a href="./" className="text-2xl  text-sky-500">Trail</a>
          </div>
  
          {/* Center: Nav Links */}
          <ul className="hidden lg:flex flex-1 justify-center space-x-10 text-sm">
            <li><a href="/" className="hover:text-sky-400 hover:tracking-wide transition-all duration-200">Home</a></li>
            <li><a href="/how-it-works" className="hover:text-sky-400 hover:tracking-wide transition-all duration-200">About</a></li>
            <li><a href="/saved" className="hover:text-sky-400 hover:tracking-wide transition-all duration-200">Saved</a></li>
            <li><a href="/explore" className="hover:text-sky-400 hover:tracking-wide transition-all duration-200">Explore</a></li>
          </ul>
  
          {/* Right: Buttons */}
          <div className="flex-1 flex justify-end space-x-3">
            <a
              className="px-4 py-2 bg-white text-black text-sm rounded-lg font-semibold hover:bg-gray-200"
              href="/signin"
            >
              Sign In
            </a>
            <a
              className="px-4 py-2 bg-sky-500 text-white text-sm rounded-lg font-semibold hover:bg-sky-600"
              href="signup"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    );
  }
  