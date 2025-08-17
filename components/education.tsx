import { GraduationCap, Calendar } from "lucide-react"

interface Education {
  id: number
  degree: string
  institution: string
  period: string
  description: string
  gpa?: string
}

const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Software Engineering",
    institution: "FUUAST University",
    period: "2024 - 2028",
    description:
      "Armed with React, Python, Node, and C++. Focused on software development, algorithms, and data structures. Active member of the Computer Science Society.",
    gpa: "3.31/4.0",
  },
]
export function Education() {
  return (
    <section id="education" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-heading text-foreground">Education</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-card p-6 rounded-lg shadow-lg border border-border animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-3 mb-2 md:mb-0">
                    <div className="bg-primary p-2 rounded-full">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-heading text-card-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <div className="bg-accent px-2 py-1 rounded text-accent-foreground font-medium">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed ml-0 md:ml-11">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
