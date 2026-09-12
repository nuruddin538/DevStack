import type { ITechnology } from "../../types/technology";

interface TechnologyCardProps {
  technology: ITechnology;
  isAdded: boolean;
  onAdd: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)] sm:p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center rounded-xl bg-slate-50 p-2.5 sm:h-14 sm:w-14">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-semibold text-sky-500 sm:px-3 sm:text-xs">
          {technology.badge}
        </span>
      </div>
      {/* Title + Description */}
      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          {technology.name}
        </h3>
        <p className="mt-2 min-h-[72px] text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
          {technology.description}
        </p>
      </div>
      {/* category + difficulty */}
      <div className="mt-4 pb-6 grid grid-cols-3 items-center text-center">
        <div className="flex justify-start">
          <span className="rounded-md bg-slate-100 px-2 py-2 text-[16px] font-medium text-slate-500 sm:px-2.5 sm:text-xs">
            {technology.category}
          </span>
        </div>
        <span className="rounded-md bg-slate-100 px-2 py-2 text-[16px] font-medium text-slate-500 sm:px-2.5 sm:text-xs">
          {technology.difficulty}
        </span>
        {/* Rating */}
        <div className="flex items-center justify-end gap-1.5">
          <span className="text-[16px] text-amber-400">★</span>
          <span className="text-[16px] font-semibold text-slate-600">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Add Button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-4 w-full rounded-lg py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
            : "bg-[#0b1220] text-white hover:bg-indigo-600"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
