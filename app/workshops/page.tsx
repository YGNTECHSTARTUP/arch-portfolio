
import Image from "next/image"

const imagese = [
  {
    id:"1",
    image:"/w1.jpg"
  },
  {
    id:"2",
    image:"/w2.jpg"
  },    
  {
    id:"3",
    image:"/w3.jpg"
  } , 
  {
    id:"4",
    image:"/w4.jpg" 
  },
  {
    id:"5",
    image:"/w5.jpg"
  },
  {
    id:"6",
    image:"/w6.jpg"
  },
  {
    id:"7",
    image:"/w7.jpg"
  },
  {
    id:"8",
    image:"/w8.jpg"
  },
  {
    id:"9",
    image:"/w9.jpg"
  },
  {
    id:"10",
    image:"/w10.jpg"
  },
  {
    id:"11",
    image:"/w11.jpg"
  }
]
// Mock projects data (props copied from each Project{n}/page.tsx)
const projects = [
  {
    id: 1,
    title: " Auroville workshop: Earth Institute",
    description:
      "The Auroville workshop was truly a turning point for me. It was exhilarating to move beyond theory and get my hands into the materials—to genuinely feel the potential of sustainable construction. Working with techniques like Compressed Stabilized Earth Blocks (CSEB), Rammed Earth, and even the delicacy of Ferrocement was incredibly rewarding. Mastering the construction of arches and vaults didn't just teach me about structure; it expanded my intellectual understanding of resourceful design. This immersion solidified my passion for low-embodied-energy systems and has made me a much more informed and confident.   ",
    technologies: ["Architecture", "Modular Design", "Sustainability"],
    image: "/work2.png",
    slug: "essence-of-design",
    type: "hosted",
  },
    {
    id: 2,
    title: "  jeev jathu farmhouse : hand's on volunteer in Nagpur",
    description:
      "My time at Jeev Jantu was exhilarating! Spending 15 days in the deep forest offered an intensive, holistic learning experience that made me a much more capable designer. Every moment was a lesson: mastering soil tests and Cob construction, executing detailed lime plaster and floor finishes, and integrating site elements like pond plastering. It was a wonderfully immersive challenge that exponentially grew my knowledge and confidence in creating genuinely sustainable structures.",
       technologies: ["Architecture", "Modular Design", "Sustainability"],
    image: "/work1.png",
    slug: "essence-of-design",
    type: "hosted",
  },
    {
    id: 3,
    title: " Title lina bo bardi illustration : woman's day competition",
    description:
      "Securing Second Prize in the Women's Day illustration competition, focused on the works of Lina Bo Bardi, was a truly exhilarating experience. It felt fantastic to have my talent recognized, but the greatest reward was the deep connection I made with Bo Bardi's revolutionary design spirit. The process of illustrating her famous building pushed my artistic and technical skills further than I imagined, teaching me invaluable lessons in both design and architectural storytelling.",
       technologies: ["Architecture", "Modular Design", "Sustainability"],
    image: "/work3.png",
    slug: "essence-of-design",
    type: "hosted",
  },

];

export default function ProjectsPage() {
  // Separate hosted and GitHub-only projects
  const hostedProjects = projects.filter((project) => project.type === "hosted")

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Workshops</h1>
          <p className="body-lg text-muted-foreground">
            A showcase of Hands-on workshops and miscellaneous work.
          </p>
        </div>
         <div className="mb-12">
        {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">{title}</h1> */}
        <p className="text-lg md:text-xl text-muted-foreground"> Fourth-year Architecture Student committed to responsible and resourceful design. I thrive on hands-on workshops because they are where I feel most intellectually engaged, allowing me to move beyond theory and directly experience techniques like cob, bamboo construction, and site ecology. This practical immersion is crucial to understanding the materials and processes that make architecture truly sustainable and informed.
</p>
      </div>
       

        {/* Hosted Projects */}
        <div className="mb-24">


          <div className="grid gap-16 md:gap-24">
            {hostedProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                    {/* <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div> */}
                    
                  </div>
                  <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub-only Projects */}
        {/* <div>
          <h2 className="heading-lg mb-10 relative">
            Deep CS Projects
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
            These projects focus on computer science fundamentals and systems programming. They&apos;re available on GitHub
            for code review and educational purposes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>View on GitHub</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>
          <div className="mb-16 px-8">
              <h2 className="text-2xl font-semibold text-primary mb-6">Gallery</h2>
              <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                {imagese.map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-video overflow-hidden rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <Image
                      src={image.image|| "/placeholder.svg"}
                      alt={`Project image ${image.id + 1}`}
                      fill
                      className="object-cover  transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}

