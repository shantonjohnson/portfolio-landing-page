// this is how app/projects/[slug]/page.tsx looks, it works and i like it
import { notFound } from "next/navigation";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  timeline: string;
  platform: string;
};

const projects: Project[] = [
  {
    slug: "finance-app",
    title: "Finance App & Website",
    description:
      "An all-in-one finance platform focused on budgeting, investing, and long-term financial planning.",
    image: "/project-1.jpg",
    timeline: "Jan 2020 – Jul 2020",
    platform: "Mobile & Website",
  },
  {
    slug: "finance-app-2",
    title: "Finance App Redesign",
    description:
      "A complete UI/UX redesign improving accessibility, clarity, and conversion.",
    image: "/project-2.jpg",
    timeline: "Aug 2020 – Dec 2020",
    platform: "Mobile & Website",
  },
  {
    slug: "finance-app-3",
    title: "Investment Dashboard",
    description:
      "A real-time investment dashboard with analytics and reporting tools.",
    image: "/project-3.jpg",
    timeline: "Jan 2021 – Apr 2021",
    platform: "Web App",
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  // 🔑 REQUIRED in Next.js 16
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        {project.title}
      </h1>

      <div className="flex gap-8 text-sm mb-8">
        <div>
          <p className="font-semibold">Timeline</p>
          <p className="text-gray-600">{project.timeline}</p>
        </div>
        <div>
          <p className="font-semibold">Platform</p>
          <p className="text-gray-600">{project.platform}</p>
        </div>
      </div>

      <div className="border-2 border-black mb-8">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={600}
          className="w-full object-cover"
          priority
        />
      </div>

      <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
        {project.description}
      </p>
    </main>
  );
}
