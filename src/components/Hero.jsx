export default function Hero() {
  return (
    <section className="bg-black/90 text-white min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Something <span className="text-gray-400">Amazing</span>
        </h1>

        <p className="mt-4 text-gray-300">
          Simple, fast and modern web apps using Next.js and Tailwind CSS.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-black px-5 py-2 rounded">
            Get Started
          </button>

          <button className="border border-white px-5 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
