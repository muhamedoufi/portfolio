"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
// import { CiMenuFries } from "react-icons";
// import { FaBars } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { links } from "./Nav";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTitle className="DialogTitle"></SheetTitle>

      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className=" text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className="mt-32 mb-40 text-center text-2xl ">
          <Link href="/">
            <h1 className="text-4xl font-semibold ">
              Muhamedou<span className="text-accent">fi</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8 ">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={cn(
                  "text-xl capitalize hover:text-accent transition-all",
                  link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
