"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiNodedotjs,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    " Lorem Ips incorrectly translated  into something more readable and intuitive syntax for developers to enjoy a great experience with the latest version of the Lorem Ips library and the latest versions of the latest versions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohamedou ahmed mahmoud",
    },
    {
      fieldName: "Phone",
      fieldValue: "(222) 32 33 58 32",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skeype",
      fieldValue: "muham.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Mauritanian",
    },
    {
      fieldName: "Email",
      fieldValue: "muhamedoufi@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, French, English",
    },
  ],
};
const experience = [
  {
    icon: "/assets/images/badge.svg",
    title: "My Experience",
    description:
      " experience description for the experience that was created by the user and the experience that was created by the user and   ",
    items: [
      {
        company: "Google Inc",
        position: "Full Stack Developer",
        duration: "2022 - Present",
      },
      {
        company: "Microsoft Inc",
        position: "Next JS Developer",
        duration: "Summer 2021",
      },
      {
        company: "E-commerce Startup",
        position: "Freelance web Developer",
        duration: "2020 - 2022",
      },
      {
        company: "Tech Academy",
        position: "Teaching Assistant",
        duration: "2019 - 2021",
      },
      {
        company: "Digital Agency",
        position: "UI Designer",
        duration: "2018 - 2019",
      },
      {
        company: "Software Development Firm",
        position: "Junior Developer",
        duration: "2017 - 2018",
      },
    ],
  },
];

const education = [
  {
    icon: "/assets/images/cap.svg",
    title: "My Experience",
    description:
      " experience description for the experience that was created by the user and the experience that was created by the user and   ",
    items: [
      {
        institution: "University of Nouakchott",
        degree: "Master in computer science",
        duration: "2022",
      },
      {
        institution: "University of Nouakchott",
        degree: "Bachelor in computer science",
        duration: "2019",
      },
      {
        institution: "University of Nouakchott",
        degree: "Baccalaury in Mathematics",
        duration: "2018",
      },
    ],
  },
];

const skills = {
  title: "My Skills",
  description:
    "My skills Lorem Ipsum dolor emet aliquet et justo euismod tempor invidunt ut labore et dolore magna aliquet.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    { icon: <FaCss3 />, name: "CSS3" },
    {
      icon: <FaJs />,
      name: "JAVA Script",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node JS",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2.4,
        duration: 0.4,
        easeIn: "easeIn",
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full ">
              experienc
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full ">
              Education
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skill" className="w-full ">
              skills
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full ">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
