import { useState } from "react";

export default function SearchBar() {
	const [query, setQuery] = useState("");

	return (
		<div className="flex  w-[1035px] text-white h-[50px] rounded-xl  border-sky-500 border-[0.5px] backdrop-blur-lg shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-400">
		

			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="🔍 Search restaurants, cuisines, or locations..."
				className="w-full bg-transparent outline-none text-white text-sm pl-4"
			/>
		</div>
	);
}
