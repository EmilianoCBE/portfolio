import { HtmlIcon, CssIcon, ReactIcon, TailwindIcon, TypescriptIcon } from "@/assets/icons";

export const About = () => {
  return (
    <section className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px] relative">
      <h2 className="text-5xl md:text-6xl text-center font-medium mb-16">
        Technologies
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
          <ReactIcon />
        </div>
        <div className="p-4">
          <HtmlIcon />
        </div>
        <div className="p-4">
          <CssIcon />
        </div>
        <div className="p-4">
          <TailwindIcon />
        </div>
        <div className="p-4">
          <TypescriptIcon />
        </div>
      </div>  
    </section>
  );
};