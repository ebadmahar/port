"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Travel Consultant Platform",
    description:
      "Travel Consultant Website Built with React.js & Node.js, featuring contact forms, booking/appointment system, backend integration, and deployed on Netlify.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "Netlify"],
    liveUrl: "https://nufconsultant.netlify.app/",
    githubUrl: "https://github.com/ebadmahar/Nuf-Consultant-Site",
  },
  {
    id: 2,
    title: "CovenantInteriors",
    description:
      "Interior design & construction company with 15+ years of experience in project management, renovations, and architectural services.",
    image: "/covenantinteriors-ca-1920x1080desktop-bb0ab0.png",
    technologies: ["PHP", "Wordpress","Elementor"],
    liveUrl: "https://covenantinteriors.ca/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Prime Aura property",
    description: "Real estate platform for buying, selling, and renting properties, mainly focused in Georgia.",
    image: "/PrimeAuraProperty-com-1920x1080desktop-e18d17.png",
    technologies: ["PHP", "Wordpress","Elementor"],
    liveUrl: "https://primeauraproperty.com/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Repair Hub",
    description: "A home and office maintenance service platform offering expert solutions across electrical, plumbing, AC and fridge repair, appliance servicing, solar installation, painting, and carpentry, all focused on ease and customer satisfaction.",
    image: "/repairhubservices-com-1024x768desktop-f71e8d.png",
    technologies: ["PHP", "Wordpress","Elementor"],
    liveUrl: "https://repairhubservices.com/",
    githubUrl: "#",
  },
]

export function Projects() {
  const { toast } = useToast()

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <Button asChild size="sm" className="flex-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {/* Code Button Handling */}
                    {project.githubUrl && (
                      project.id === 1 ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() =>
                            toast({
                              title: "Restricted",
                              description:
                                "Can't Show the Code Due to Privacy of the Owners.",
                              variant: "destructive",
                            })
                          }
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
