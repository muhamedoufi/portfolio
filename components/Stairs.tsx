import { motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* render 6 motions div each presenting of the stairs 
  
  Each div will have the same animation defined by the stairsAnimation object
  The delay for each div calculated semicolly based on it's reversed index,
  creating a staggered effect with decreasing delay for each subsequent step.

  
  */}
      {[
        ...Array(6).map((_, i) => {
          return (
            <motion.div
              key={i}
              variants={stairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(i) * 0.1,
              }}
              className="h-full w-full bg-white relative "
            />
          );
        }),
      ]}
    </>
  );
};

export default Stairs;
