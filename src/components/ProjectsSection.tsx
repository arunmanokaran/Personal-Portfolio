import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";
import img2 from "../assets/1724977285315.png";
import img3 from "../assets/1721936945316.jpg";
import img1 from "../assets/1708072225211.png";
import img5 from "../assets/portfolio1.jpg";

const projects = [
  {
    title: "Evaluating the Integration of IT Solutions in Enhancing Customer",
    description:
      "In this project, I analyze how integrating IT solutions can enhance customer experience and drive business growth, while also tackling challenges like implementation costs, resistance to change, and data security. I highlight the necessity of aligning IT initiatives with business objectives and promoting collaboration across departments for effective integration.",
    image: img1, // Placeholder - images will be replaced later
    tags: [
      "InformationTechnology",
      "CRM",
      "CustomerExperience",
      "DigitalTransformation",
      "DataDrivenDecisionMaking",
      "OperationalEfficiency",
    ],
    liveUrl:
      "/docs/EVALUATING+THE+INTEGRATION+OF+IT+SOLUTIONS+IN+ENHANCING+CUSTOMER+EXPERIENCE+AND+BUSINESS+GROWTH.pdf",
    //"https://drive.google.com/file/d/1TPJS1pdFG6rpMe8aEiIRFXqhTghvSjGv/view?usp=sharing",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Reflecting on the Adoption of Generative AI in Python Coding",
    description:
      "In the article, I share my experiences using generative AI in my Python coding studies, highlighting its benefits for efficiency and creativity while also addressing concerns about over-reliance and ethical implications. I emphasize the importance of balancing AI assistance with critical coding skills to enhance my future work in digital business.",
    image: img2, // Placeholder - images will be replaced later
    tags: [
      "AIethics",
      "AIinBusiness",
      "GenerativeAI",
      "LearningwithAI",
      "DigitalBusiness",
      "AIIntegration",
    ],
    liveUrl:
      "https://www.linkedin.com/pulse/reflecting-adoption-generative-ai-python-coding-arun-manokaran-vg6uc",
    featured: true,
  },
  {
    title: "Information System and Digital Transformation",
    description:
      "In the article, I discuss how information systems serve as the backbone of modern businesses, emphasizing their role in leveraging data, enhancing operational efficiency, and supporting strategic decision-making. I explore the transformative impact of AI on customer personalization, automation, and decision support, while also addressing the importance of ethical considerations and security in the adoption of these technologies.",
    image: img3, // Placeholder - images will be replaced later
    tags: [
      "Artificial Intelligence (AI)",
      "Informed Decision-Making",
      "Enhancing Operations",
    ],
    liveUrl:
      "https://www.linkedin.com/pulse/information-system-digital-transformation-arun-manokaran-teg7c",
    featured: true,
  },

  {
    title: "Personal Portfolio",
    description:
      "The GitHub repository for the personal portfolio is built using Vite, TypeScript, React, and Tailwind CSS, providing a modern web development environment. It includes a structured file system with components for UI elements, a configuration setup for Tailwind and Vite, and scripts for managing dependencies and running the application. The project is designed to showcase personal projects and skills effectively.",
    image: img5, // Placeholder - images will be replaced later
    tags: [
      "TypeScript",
      "CSS",
      "React",
      "React DOM",
      "Tailwind CSS",
      "Shadcn-UI",
      "Custom Hooks",
    ],
    liveUrl: "https://github.com/arunmanokaran/Personal-Portfolio.git",
    featured: true,
  },
];

export function ProjectsSection() {
  const { theme } = useTheme();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const openDoc = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-900 text-justify"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents my
            skills and experiences. Still more to come.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-full grid content-between">
                <div>
                  {/* Project Image (placeholder) */}
                  <div
                    className={cn(
                      "h-54 bg-gradient-to-br",
                      theme === "dark"
                        ? "from-gray-700 to-gray-800"
                        : "from-blue-100 to-blue-200"
                    )}
                  >
                    {/* Image will be added here when available */}
                    <div className="h-full w-full flex items-center justify-center mask-cover">
                      <img
                        src={project.image}
                        alt={project.title + " " + "image"}
                        className=""
                      />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </div>

                <CardFooter className="flex gap-3">
                  <Button onClick={() => openDoc(project.liveUrl)}>
                    Read More
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
