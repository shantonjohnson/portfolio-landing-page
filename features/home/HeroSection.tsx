import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-pink-200 px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-medium text-black/70 mb-3">
            <span className="font-semibold text-black">
              Muhammad Derry Oktaviandi
            </span>{" "}
            • Product Designer
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6">
            Product Designer <br /> from Indonesia
          </h1>

          <p className="text-base md:text-lg text-black/70 max-w-xl mb-8">
            An Indonesian product designer passionate about blending culture,
            functionality, and sustainability to create user-centric, inspiring
            designs.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-black bg-sky-300 px-6 py-3 text-sm font-semibold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          >
            Contact Me
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[380px] md:w-[360px] md:h-[480px] border-4 border-black overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
