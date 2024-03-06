import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <header className="h-20  w-screen">
      <nav className="flex justify-between">
        <Hamburger />
        <img
          src="/taxi-wml-high-resolution-logo.png"
          className="w-24 h-24 md:w-32 md:h-32 fixed right-4 top-4 md:top-0"
        />
      </nav>
    </header>
  );
};

export default Navbar;
