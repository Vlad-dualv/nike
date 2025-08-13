import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

export default function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray p-2 hover:text-coral-red transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden max-lg:block" type="button">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </button>
      </nav>
    </header>
  );
}
