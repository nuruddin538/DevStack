import footerLogo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        {/* Footer Main */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div>
            <img src={footerLogo} alt="footer logo" />
            <p className="mt-4 max-w-xs leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex gap-5 text-xs font-medium text-slate-500">
              <a href="#" className="transition hover:text-pink-500">
                Github
              </a>
              <a href="#" className="transition hover:text-pink-500">
                Twitter
              </a>
              <a href="#" className="transition hover:text-pink-500">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-pink-500">
                Github
              </a>
            </div>
          </div>
          {/* Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Product
            </h4>
            <div className="mt-4 space-y-3 text-xs text-slate-400">
              <a href="#home" className="block hover:text-pink-500">
                Home
              </a>
              <a href="#technologies" className="block hover:text-pink-500">
                Technologies
              </a>
              <a href="#projects" className="block hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Company
            </h4>
            <div className="mt-4 space-y-3 text-xs text-slate-400">
              <a href="#about" className="block hover:text-pink-500">
                About
              </a>
              <a href="#about" className="block hover:text-pink-500">
                Contact
              </a>
              <a href="#about" className="block hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>
          {/* Legal */}
          <div className="mt-4 space-y-3 text-xs text-slate-400">
            <a href="#" className="block hover:text-pink-500">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-pink-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-pink-500">
            Privacy
          </a>
          <a href="#" className="hover:text-pink-500">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
