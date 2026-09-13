import { ArrowRight } from "lucide-react";
import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center px-5 pt-5 sm:px-8 sm:pt-16 md:pt-20 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-24">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Heading */}
          <h1 className="mx-auto max-w-[340px] text-[25px] font-extrabold leading-[1.18] tracking-tight text-slate-950 sm:max-w-xl sm:text-4xl md:text-5xl lg:mx-0 lg:max-w-xl lg:text-6xl">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          {/* Description */}
          <p className="mx-auto mt-3 max-w-[340px] text-[12px] leading-5 text-slate-500 sm:mt-5 sm:max-w-lg sm:text-base sm:leading-7 lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          {/* Buttons */}
          <div className="mx-auto mt-5 flex max-w-[340px] gap-2.5 sm:mt-8 sm:max-w-md sm:gap-4 lg:mx-0">
            <a
              href="#technologies"
              className="group flex flex-1 items-center justify-center gap-1 rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 px-2 py-2.5 text-[10px] font-semibold text-white shadow-md shadow-pink-100 transition hover:shadow-lg sm:rounded-lg sm:px-5 sm:py-3 sm:text-sm"
            >
              Explore Technologies
              <ArrowRight
                size={13}
                className="transition group-hover:transition-x-0.5 sm:h-4 sm:w-4"
              />
            </a>
            <a
              href="#about"
              className="flex flex-1 items-center justify-center rounded-md border border-slate-200 bg-white px-2 py-2.5 text-[10px] font-medium text-slate-600 transition hover:border-fuchsia-300 hover:bg-fuchsia-50 sm:rounded-lg sm:px-5 sm:py-3 sm:text-sm"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Banner Image */}
        <div className="relative mt-8 flex justify-center items-center sm:mt-10 lg:mt-0">
          {/* Soft Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-200/40 blur-3xl sm:h-96 sm:w-96" />
          <img
            src={banner}
            alt="Technology development stack illustration"
            className="relative z-10 w-full max-w-[330px] object-contain sm:max-w-[420px] lg:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
