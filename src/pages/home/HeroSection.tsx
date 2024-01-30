import Container from "@/components/Container";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div>
        <h1 className="text-5xl lg:text-8xl font-bold text-nowrap">
          <span className="text-gray">Don't worry,</span> <br />{" "}
          <span>We'll fix it</span>
        </h1>
        <p className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg">
          Welcome to{" "}
          <span className="text-primary-foreground font-semibold">iRepair</span>
          , your one-stop place for all kinds of
          <span className="text-primary-foreground font-semibold">
            {" "}
            Macbook repairs
          </span>{" "}
          and diagnostics.
        </p>
      </div>
      <div className="mt-10 lg:w-full w-3/4 mx-auto">
        <img className="-rotate-[35deg] h-[95%] obj " src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
