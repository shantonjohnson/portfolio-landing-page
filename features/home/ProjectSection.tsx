import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  bgColor: string;
  buttonColor: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Finance App & Website",
    slug: "finance-app",
    description:
      "Transform your financial life with my all-in-one finance app: budgeting, investing, and planning for a secure future, all in a single, user-friendly platform.",
    image: "/project-1.jpg",
    bgColor: "bg-lime-200",
    buttonColor: "bg-pink-200",
  },
  {
    id: 2,
    title: "Finance App & Website",
    slug: "finance-app-2",
    description:
      "Transform your financial life with my all-in-one finance app: budgeting, investing, and planning for a secure future, all in a single, user-friendly platform.",
    image: "/project-2.jpg",
    bgColor: "bg-pink-200",
    buttonColor: "bg-sky-300",
  },
  {
    id: 3,
    title: "Finance App & Website",
    slug: "finance-app-3",
    description:
      "Transform your financial life with my all-in-one finance app: budgeting, investing, and planning for a secure future, all in a single, user-friendly platform.",
    image: "/project-3.jpg",
    bgColor: "bg-sky-200",
    buttonColor: "bg-yellow-300",
  },
];

export default function ProjectSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-bold">Projects</h2>
        <span className="h-[2px] flex-1 bg-black" />
        <span className="w-2 h-2 bg-black rounded-full" />
      </div>

      {/* Cards */}
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.bgColor} border-2 border-black p-8 shadow-[8px_8px_0_0_#000]`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-800 mb-6 max-w-md">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className={`${project.buttonColor} inline-block border-2 border-black px-5 py-2 font-semibold shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition`}
                >
                  Read More
                </Link>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4">
                <div className="border-2 border-black overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-semibold">Timeline</p>
                    <p className="text-gray-700">Jan 2020 – Jul 2020</p>
                  </div>
                  <div>
                    <p className="font-semibold">Platform</p>
                    <p className="text-gray-700">Mobile & Website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
