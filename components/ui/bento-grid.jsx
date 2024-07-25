'use client';
import { cn } from "@/lib/utils";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { MagicButton } from "./MagicButton";
import { IconClipboardCopy } from "@tabler/icons-react";

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
      <div className={`${id == 6 && 'flex justify-center'} h-full `}>
        <div className="w-full h-full absolute">
          {
            img && (
              <img
                src={img}
                alt={img}
                className={cn(
                  "object-center object-cover",
                  imgClassName
                )}
              />
            )
          }
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {
            spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={"object-center object-cover w-full h-full"}
              />
            )
          }
        </div>

        <div className={cn(
          titleClassName,
          'group-hover/bento: translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
          {
            id == 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 lg:gap-8">
                  {
                    ['React', 'Next.js', 'TailwindCSS'].map((item) => (
                      <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                        {
                          item
                        }
                      </span>
                    ))
                  }
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                </div>
                <div className="flex flex-col gap-3 lg:gap-8">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>

                  {
                    ['HTML', 'CSS', 'Bootstrap'].map((item) => (
                      <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                        {
                          item
                        }
                      </span>
                    ))
                  }
                </div>
              </div>
            )
          }

          {
            id == 6 && (
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
                  otherClasses={`!bg-[#161a31]`}
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
