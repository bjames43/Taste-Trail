export default function RestarauntCards() {
	return (
		<div className="p-3">

			<div className="bg-slate-800 text-white      shadow-md overflow-hidden h-[180px] w-[280px]">


				<div className="p-4 space-y-2">
					<h2 className="text-xl font-semibold text-center">Restaurant Name</h2>
					<p className="text-sm text-slate-300 text-center">
						A delicious spot for modern eats and local favorites.
					</p>

					<div className="flex items-center gap-1 text-yellow-400 text-sm">
						⭐5/5
					</div>
				</div>
			</div>
		</div>
	);
}
