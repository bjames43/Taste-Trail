import { Link } from 'react-router-dom';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BorderBeam } from '../magicui/border-beam';

export default function RestaurantCard() {
  return (
    <div className="relative flex flex-col h-[400px] w-[400px] transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-lg bg-black border border-black overflow-hidden">
      {/* Decorative border or animated beam */}
      <BorderBeam />
      
      {/* Restaurant image */}
      <img
        className="object-cover w-full h-32 rounded-t-lg"
        src="https://picsum.photos/400/200?blur"
        alt="Exterior view of the restaurant"
      />
      
      {/* Content area */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        <div>
          <h5 className="mb-1 text-xl font-bold truncate text-white">
            Restaurant Name
          </h5>
          <p className="mb-1 text-sm text-white">Rating: 4.5⭐</p>
          <p className="mb-1 text-sm text-white">Cuisine: Italian</p>
          <p className="mb-3 text-sm text-gray-400 line-clamp-2">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to="/restaurant/123"
            className="flex-1 inline-flex items-center justify-center rounded-md bg-sky-500 hover:bg-sky-600 px-3 py-1.5 text-white text-sm"
          >
            <BookmarkIcon className="h-4 w-4 mr-1" />
            Save
          </Link>
          <Link
            to="/restaurant/123"
            className="flex-1 inline-flex items-center justify-center rounded-md bg-gray-900 hover:bg-gray-800 px-3 py-1.5 text-white text-sm transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
