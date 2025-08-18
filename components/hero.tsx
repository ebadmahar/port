"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
              Hi, I'm <span className="text-primary">Ebad Mahar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
              MERN Stack Developer & Caffeine Addict ✅
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              A caffeine addict armed with React, Python, Node, and C++. I don’t just write code —
              I focus on solving problems, building reliable systems, and creating digital experiences that truly work for people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Download CV Button */}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button size="lg" className="animate-pulse-glow">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>

              {/* Contact Me Button */}
              <Button variant="outline" size="lg" onClick={handleContactClick}>
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <Image
                  src="/developer-headshot.jpg"
                  alt="Ebad's - Professional Photo"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-accent-foreground font-bold text-sm">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
