"use client";

import { cn } from "@/lib/utils";
import CountUp from "react-countup";
const stats = [
  { title: "Projects completed", count: 10 },
  { title: "Clients", count: 20 },
  { title: "Technologies measured ", count: 5 },
  { title: "Years of Experience", count: 10 },
  { title: "Code Commits", count: 500 },
];
const Stats = () => {
  return (
    <section className="">
      <div className="container mx-auto pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="flex flex-wrap gap-6  max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex  gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                key={index}
                end={stat.count}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={cn(
                  stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]",
                  "leading-snug text-white/80"
                )}
              >
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
