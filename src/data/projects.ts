import { Project } from "@/models";

export const projects: Project[] = [
  {
    name: "Niky Landing Page",
    description: "Landing page hecha con React y TailwindCSS simulando página web de Nike.",
    image: "/images/project1.webp",
    technologies: ["React", "TailwindCSS"],
    github: ""
  },
  {
    name: "Gym Landing Page",
    description: "Landing page hecha con React y CSS la cual muestra una página web con información de un gimnasio.",
    image: "/images/project2.webp",
    technologies: ["React", "TailwindCSS"],
    github: ""
  },
  {
    name: "Calculadora de precios de inmuebles",
    description: "Prueba técninca en la cual se calcula en automático el precio total de acuerdo a la cantidad de muebles seleccionados y sus medidas.",
    image: "/images/project3.webp",
    technologies: ["React"],
    github: ""
  },
  {
    name: "Tienda Online",
    description: "Página hecha con React y Chakra UI que muestra el Frontend de cómo se vería una tienda online.",
    image: "/images/project4.webp",
    technologies: ["React", "Chakra UI"],
    github: ""
  }
]

export const headingStyles = {
  h1: "text-7xl md:text-8xl font-bold",
  h2: "text-5xl md:text-6xl font-bold",
  h3: "text-4xl md:text-5xl font-semibold",
  h4: "text-3xl md:text-4xl font-semibold",
  h5: "text-2xl md:text-3xl font-medium",
  h6: "text-xl md:text-2xl font-medium",
};