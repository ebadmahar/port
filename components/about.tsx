export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-heading text-foreground">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I’m a Software Engr. student with over 2 years of experience, including multiple internships at NCBMS and hands-on freelancing projects. My expertise spans Python for automation, C++ for problem-solving/DSA, and React for UI/UX, with a strong focus on automation and backend development.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey into tech began at the age of 14, inspired by futuristic technologies and sci-fi classics like Mr. Robot. Since then, I’ve been passionate about building solutions that merge innovation with functionality.

Beyond coding, I enjoy videography, photography, and chess, which fuel my creativity and strategic thinking. My ultimate goal is to become a driving force in the tech industry and contribute to a revolution in technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-muted px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-muted-foreground">2+ Years Experience</span>
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-muted-foreground">15+ Projects Completed</span>
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-muted-foreground">Remote Friendly</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 font-heading text-card-foreground">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-card-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Frontend Development (React, Next.js)
                  </li>
                  <li className="flex items-center text-card-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Backend Development (Node.js, Python)
                  </li>
                  <li className="flex items-center text-card-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    UI/UX Design
                  </li>
                  <li className="flex items-center text-card-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Web App Development
                  </li>
                  <li className="flex items-center text-card-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Task Automation Expert
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
