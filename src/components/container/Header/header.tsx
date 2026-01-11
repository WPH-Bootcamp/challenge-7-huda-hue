import Button from "../../ui/Button/Button";
import YourLogo from "/YourLogo.svg";

const Header = () => {
  return (
    <header className="bg-black">
      <nav className="flex justify-between items-center h-15 mr-8 ml-8 z-10">
        <img src={YourLogo} alt="Your_Logo.svg" className="w-30 ml-1" />
        <div className="flex justify-between gap-12">
          <p className="text-white">About</p>
          <p className="text-white">Service</p>
          <p className="text-white">Projects</p>
          <p className="text-white">Testimonials</p>
          <p className="text-white">FAQ</p>
        </div>
        <div>
          <Button>Let's Talk</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
