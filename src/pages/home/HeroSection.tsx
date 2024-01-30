import Container from "@/components/Container";
import macbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div>
        <h1 className="text-8xl font-bold">
          <span className="text-gray">Don't worry,</span> <br /> <span>We'll fix it</span>
        </h1>
        <p>
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of
          <span>Macbook repairs</span>
          and diagnostics.
        </p>
      </div>
      <div>
        <img src={macbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
