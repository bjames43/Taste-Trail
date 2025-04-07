export default function HowItWorks() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Taste Trail helps you discover and track your foodie adventures in 3 simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Explore</h3>
            <p className="text-gray-400">
              Browse top-rated local restaurants, hidden food gems, and trending bites near you.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Save & Share</h3>
            <p className="text-gray-400">
              Save favorites, create custom trails, and share your picks with friends or foodies.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Track Your Journey</h3>
            <p className="text-gray-400">
              Keep a food journal, earn badges, and build your personal trail of culinary memories.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16">
          <a
            href="/"
            className="inline-block bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-sky-600 transition"
          >
            Start Your Trail Now
          </a>
        </div>
      </div>
    </section>
  );
}
