import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full h-full max-w-screen-xl px-5 mx-auto bg-rose-800 flex items-center justify-between">
        <h1 className="text-3xl">iRepair</h1>
        <ul className="space-x-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Button>
            <Link to={"/login"}>Login</Link>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
