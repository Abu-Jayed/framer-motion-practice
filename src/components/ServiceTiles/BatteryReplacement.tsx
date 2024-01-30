import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BatteryReplacement = () => {
  // const { style, componentRef } = useScrollGrow();
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ['0 1', '1.2 1'],
  });

  const scaleValues = useTransform(scrollYProgress,[0, 1],[0.8,1]);
  const opacityValues = useTransform(scrollYProgress,[0, 1],[0.6,1]);

  return (
    <motion.div
      style={{scale: scaleValues,opacity: opacityValues}}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
