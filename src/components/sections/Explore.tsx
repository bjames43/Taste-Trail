import RestaurantCards from "../cards/RestaurantCards";
import SearchBar from "../cards/SearchBar";

export default function Explore() {
    return (
      <div className="relative h-screen">
        {/* Background gradient - lowest layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#63e_100%)]" />
        </div>
  
        {/* Centered heading */}
        <h1 className="pt-32 text-center font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out hover:scale-105">
          Explore Local Food Gems
        </h1>
        <p className="text-center text-white text-lg">
          Discover hidden gems and trending bites near you.
        </p>
        <div className="flex justify-end pr-24 rounded-md -mb-12 mt-11">
  <SearchBar />
</div>
        
        <div className="mt-16 flex gap-6 px-24">
  {/* Small container on the left */}
  
  <div>

  
  </div>
  
  <div className="bg-gradient-to-b shadow-lg w-[200px] h-[420px] rounded-xl  border-sky-500 border-[0.5px] py-20">
  <ul className="text-white  text-lg flex flex-col gap-10 font-bold justify-center items-center">
    <li className="hover:text-sky-500 transition-all w-[150px] duration-300 z-10 bg-white px-4 py-2 text-center rounded-md bg-slate-700">For You</li>
    <li className="hover:text-sky-500 transition-all w-[150px] duration-300 z-10 bg-white px-4 py-2 text-center rounded-md bg-slate-700">Trending</li>
    <li className="hover:text-sky-500 transition-all w-[150px] duration-300 z-10 bg-white px-4 py-2 text-center rounded-md bg-slate-700">Saved</li>
  </ul>
  </div>

  {/* Big container on the right */}

  <div className="bg-gradient-to-b shadow-lg w-[1050px] h-[420px] rounded-xl  border-sky-500 border-[0.5px] flex">
    
  <div className="flex flex-wrap gap-4 justify-center">
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
    
  </div>
  </div>

  
</div>
      </div>
    );
  }
  