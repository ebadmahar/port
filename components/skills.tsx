import { Star } from "lucide-react"

interface Skill {
  name: string
  rating: number
  category: string
}

const skills: Skill[] = [
  { name: "JavaScript/TypeScript", rating: 3.5, category: "Frontend" },
  { name: "React & Next.js", rating: 4, category: "Frontend" },
  { name: "Node.js", rating: 3, category: "Backend" },
  { name: "Python", rating: 4, category: "Backend" },
  { name: "MongoDB", rating: 4, category: "Database" },
  { name: "UI/UX Design", rating: 4, category: "Design" },
  { name: "Git/Github", rating: 5, category: "Collaboration Tools" },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-accent fill-accent" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  )
}

export function Skills() {
  const categories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category} className="animate-fade-in-up">
                <h3 className="text-lg font-semibold mb-4 text-primary font-heading">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-card-foreground text-sm">{skill.name}</h4>
                        </div>
                        <StarRating rating={skill.rating} />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
