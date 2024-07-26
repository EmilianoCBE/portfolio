'use client';
import { cn } from "@/lib/utils";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { MagicButton } from "./MagicButton";
import { IconClipboardCopy } from "@tabler/icons-react";
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from "react-icons/fa";

export const BentoGrid = ({
  className, 
  children
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({className, title, description, id, img, imgClassName, titleClassName, spareImg}) => {

  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('e.carrizales1305@gmail.com')
    setCopy(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className,
      )}
      style={{
        background: 'rgb(4, 7, 29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      <div className={`${id == 2 && 'flex justify-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700'} h-full`}>
        <div className="absolute">
          {
            img && (
              <img
                src={img}
                alt={img}
                className={cn(
                  "object-cover",
                  imgClassName
                )}
              />
            )
          }
        </div>

        <div className={cn(
          titleClassName,
          `group-hover/bento: translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 
            ${id == 3 && 'bg-gradient-to-r from-[#000000] to-[#101154]'}
          `
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
          {
            id == 3 && (
              <div className="flex flex-col md:flex-row gap-2 lg:gap-5 w-fit mt-3">
                <FaReact className="text-[#61dafb] text-3xl"/>
                <FaHtml5 className="text-[#e34f26] text-3xl"/>
                <FaCss3 className="text-[#1572b6] text-3xl"/>
                <FaBootstrap className="text-[#7952b3] text-3xl"/>
                <img src="/tailwindcss.svg" width={30} height={30}/>
              </div>
            )
          }

          {
            id == 2 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie options={{
                    loop: copy,
                    autoplay: copy,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}/>
                </div>
                <MagicButton 
                  title={copy ? 'Email Copied!' : 'Copy Email'}
                  icon={<IconClipboardCopy />}
                  position={'left'}
                  otherClasses={``}
                  handleClick={handleCopy}
                />
              </div>
            )
          }
        </div>
      </div>

    </div>
  );
};
