import { use, useState } from "react";
import type { ITechnology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";
import CardStack from "./CardStack";
import { Bounce, toast } from "react-toastify";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  //   console.log(technologies);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);
  // Add technology to stack
  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in the cart!`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    }
    setSelectedTechnologies((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to cart!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  // Remove one technology
  const handleRemoveFromStack = (id: string) => {
    const technology = selectedTechnologies.find((item) => item.id === id);
    setSelectedTechnologies((prev) => prev.filter((item) => item.id !== id));
    if (technology) {
      toast.info(`${technology.name} remove from stack!`, {
        position: "top-center",
        autoClose: 2500,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }
    setSelectedTechnologies([]);
    toast.info("All technologies removed from stack!", {
      position: "top-center",
      autoClose: 2500,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div id="technologies" className="bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore The <span className="text-fuchsia-600">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            Pick one technology per category to build your ideal stack
          </p>
        </div>
        {/* Grid + Sidebar */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_300px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (item) => item.id === technology.id
              );
              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAdd={handleAddToStack}
                ></TechnologyCard>
              );
            })}
          </div>
          {/* Your Stack */}
          <CardStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
