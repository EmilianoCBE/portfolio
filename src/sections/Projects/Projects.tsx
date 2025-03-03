import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/data/projects"

export const Projects = () => {
  return (
    <section className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px]">
      <h2 className="text-5xl md:text-6xl text-center font-medium">
        Projects  
      </h2>
      <p className="text-lg md:text-xl text-center w-full pt-2">
        Here are some of the projects I've worked on recently
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8 place-items-center">
        {
          projects.map((project, index) => (
            <Card className="relative max-w-md shadow-none bg-[#1e1e1e] border border-[#3a3a3a]" key={index}>
              <CardHeader>
                  <img
                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image placeholder"
                    width={500}
                    height={500}
                  />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl text-[#eaeaea]">{project.name}</CardTitle>
                <CardDescription className="text-[#b3b3b3]">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-4">
              <a
                href="#"
                className="border border-[#b3b3b3] py-3 px-6 rounded-2xl text-[#eaeaea] hover:bg-[#eaeaea] hover:text-[#1e1e1e] ease-in-out transition-colors duration-300"
              >
                View Project
              </a>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </section>
  )
}
