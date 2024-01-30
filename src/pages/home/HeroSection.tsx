import Container from "@/components/Container";
import macbook from "@/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
        delayChildren:1,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: {duration:0.5,type: "spring", bounce: 0.45} },
  };

  return (
    <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1 className="text-5xl lg:text-8xl font-bold text-nowrap" variants={introChildren} >
          <span className="text-gray">Don't worry,</span> <br />{" "}
          <span>We'll fix it</span>
        </motion.h1>
        <motion.p variants={introChildren} className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg">
          Welcome to{" "}
          <span className="text-primary-foreground font-semibold">iRepair</span>
          , your one-stop place for all kinds of
          <span className="text-primary-foreground font-semibold">
            {" "}
            Macbook repairs
          </span>{" "}
          and diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a Service</Button>
        </motion.div>
      </motion.div>
      <div className="mt-10 lg:w-full w-3/4 mx-auto">
        <img className="-rotate-[35deg] h-[95%] obj " src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
