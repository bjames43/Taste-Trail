import GlobeComponent from "../effects/Globe";
import ParticlesBackground from "../effects/ParticlesBackground";
import { Link } from 'react-router-dom';

// You could extract these as constants if they're used elsewhere
const HERO_TITLE = "Find Local Food Gems";
const HERO_SUBTITLE = "Tailored to You.";
const HERO_DESCRIPTION = "Discover top-rated restaurants near you, save favorites, and track your culinary journey.";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background gradient - lowest layer */}
     <div className="absolute inset-0">
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#63e_100%)]" />
</div>

      {/* Particles Effect - layer 1 
      <div className="absolute inset-0 z-1">
        <ParticlesBackground />
      </div>
*/}
      {/* Globe overlay - layer 2 */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-30 z-1">
        <GlobeComponent />
      </div>

      {/* Content - top layer */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-sky-500 hover:scale-105 transition-all duration-300">
            {HERO_TITLE} <span className="text-white">{HERO_SUBTITLE}</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white">
            {HERO_DESCRIPTION}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
  <Link
    to="/Explore"
    className="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:scale-90 transition-all duration-300"
  >
    Explore Nearby
  </Link>

  <Link
    to="/how-it-works"
    className="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:scale-90 transition-all duration-300"
  >
    How it works
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
