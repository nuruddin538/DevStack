import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative flex h-[58px] items-center justify-between md:h-[72px]">
          {/* Hamburger - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-slate-500 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          {/* Logo  */}
          <a
            href="#home"
            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 md:static md:translate-x-0"
          >
            <img
              src={logo}
              alt="Dev stack logo"
              className="h-18 w-18 object-contain sm:h-16 sm:w-16 md:h-40 md:w-40"
            />
          </a>
          {/* Desktop Menu */}
          <div className="ml-auto hidden items-center gap-7 md:flex lg:gap-9">
            {navItems.map((item, index) => (
              <a
                href={item.href}
                key={item.name}
                className={`text-sm font-medium transition ${
                  index === 0
                    ? "text-fuchsia-600"
                    : "text-slate-500 hover:text-fuchsia-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Actions */}
          <div className="ml-auto flex items-center gap-2 sm:gap-4 md:ml-8">
            <button className="text-[9px] font-medium text-slate-600 sm:text-xl md:text-sm">
              Sign In
            </button>
            <button className="rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 px-3 py-1.5 text-[9px] font-semibold text-white sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-sm">
              Sign Up
            </button>
          </div>
        </div>
        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-fuchsia-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
