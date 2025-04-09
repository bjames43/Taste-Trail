import RestaurantCard from "../cards/RestaurantCards";


export default function Explore() {
  return (
    <div className="min-h-screen bg-gradient-to-b pt-20 from-black to-gray-900 text-white px-4 py-8 font-sans [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#63e_100%)]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-600">
            Explore
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover amazing restaurants and culinary experiences local to you.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-1 space-y-6">
          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl relative">
              <input
                type="text"
                placeholder="Search by name, cuisine, or location..."
                className="w-full px-5 py-4 pl-12 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition shadow-xl backdrop-blur-sm"
              />
              <svg
                className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
              All Cuisines
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition">
              Italian
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition">
              Japanese
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition">
              Mexican
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition">
              Indian
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition">
              More Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-300">
            Showing <span className="font-semibold">4</span> of <span className="font-semibold">156</span> restaurants
          </p>
          <select className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500">
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Restaurant Grid - Displaying 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 py-4">
          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition disabled:opacity-50"
            disabled
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-sky-600 text-white">1</button>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition">
            2
          </button>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition">
            3
          </button>
          <span className="text-gray-400">...</span>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition">
            39
          </button>

          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
