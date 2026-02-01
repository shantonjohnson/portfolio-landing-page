import { notFound } from "next/navigation";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  intro: string;
  heroImage: string;
  timeline: string;
  platform: string;
  role: string;
  company: string;
  challenge: string;
  result: string;
};

const projects: Project[] = [
  {
    slug: "finance-app",
    title: "Finance App & Website",
    intro:
      "Transform your financial life with my all-in-one finance app: budgeting, investing, and planning for a secure future, all in a single, user-friendly.",
    heroImage: "/project-2.jpg",
    timeline: "Jan 2020 – Dec 2020",
    platform: "Mobile App",
    role: "UI Designer",
    company: "DANA",
    challenge:
      "Lorem ipsum dolor sit amet consectetur. Nam id nisl malesuada leo eget sit sed. At lorem viverra quis pellentesque nullam amet porta scelerisque quam. Donec orci aliquam malesuada elementum et purus. Ut ac quam vulputate malesuada vitae id. Accumsan quis massa feugiat amet. Et fusce elementum cursus tristique. Pharetra enim turpis ipsum pretium. Felis pharetra feugiat interdum nunc nec lacus mi posuere bibendum. Nibh ipsum purus senectus purus rhoncus imperdiet enim. Tortor rutrum mauris risus nec.",
    result:
      "Lorem ipsum dolor sit amet consectetur. Nam id nisl malesuada leo eget sit sed. At lorem viverra quis pellentesque nullam amet porta scelerisque quam. Donec orci aliquam malesuada elementum et purus.",
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6">
        {project.title}
      </h1>

      {/* Intro */}
      <p className="max-w-4xl text-lg text-gray-700 mb-12">
        {project.intro}
      </p>

      {/* Hero Image */}
      <div className="border-2 border-black mb-16">
        <Image
          src={project.heroImage}
          alt={project.title}
          width={1400}
          height={700}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Content Grid */}
      <section className="grid md:grid-cols-[280px_1fr] gap-16">
        {/* Left Meta Column */}
        <aside className="space-y-8 text-sm">
          <div>
            <p className="font-semibold text-lg">Timeline</p>
            <p className="text-gray-600">{project.timeline}</p>
          </div>

          <div>
            <p className="font-semibold text-lg">Platform</p>
            <p className="text-gray-600">{project.platform}</p>
          </div>

          <div>
            <p className="font-semibold text-lg">Role</p>
            <p className="text-gray-600">{project.role}</p>
          </div>

          <div>
            <p className="font-semibold text-lg">Company name</p>
            <p className="text-gray-600">{project.company}</p>
          </div>
        </aside>

        {/* Right Content Column */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Challange/Problem
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Result
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
