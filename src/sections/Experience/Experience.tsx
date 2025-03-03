import { Ripple } from "@/components/magicui/ripple";
import { experience } from "@/data/experience";

export const Experience = () => {
  return (
    <section className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px] relative overflow-hidden">
      <h2 className="text-5xl md:text-6xl text-center font-medium text-[#eaeaea] z-10">
        Experience
      </h2>
      <p className="text-lg md:text-xl text-center w-full pt-2 text-[#b3b3b3] z-10">
        Here are some of the companies I've worked with
      </p>

      <div className="absolute inset-0 pointer-events-none">
        <Ripple mainCircleOpacity={0.8} numCircles={9} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-8">
        {experience.map((job, index) => (
          <div
            key={index}
            className="relative p-6 border border-[#3a3a3a] bg-[#1e1e1e] rounded-2xl shadow-md"
          >
            <h3 className="text-2xl text-[#eaeaea] font-semibold">{job.title}</h3>
            <p className="text-lg text-[#b3b3b3] mt-1">
              {job.company} • {job.location}
            </p>
            <p className="text-sm text-gray-400">{job.date}</p>
            <p className="mt-3 text-gray-300">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};