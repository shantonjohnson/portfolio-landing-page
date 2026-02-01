import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#fffdf5] border-b border-black/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-black">
          Pro<span className="text-black">Folio</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-black">
          <li>
            <Link href="#about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:underline">
              Experiences
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-black bg-lime-300 px-5 py-2 text-sm font-semibold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
