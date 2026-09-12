import { Trash2, X } from "lucide-react";
import type { ITechnology } from "../../types/technology";

interface CardStackProps {
  selectedTechnologies: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}
const CardStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: CardStackProps) => {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)] sm:p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              Your Stack
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              {selectedTechnologies.length}{" "}
              {selectedTechnologies.length === 1
                ? "Technology"
                : "Technologies"}{" "}
              Selected
            </p>
          </div>
        </div>
        <div className="my-4 border-t border-slate-100">
          {/* Empty State */}
          {selectedTechnologies.length === 0 ? (
            <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center">
              <div className="mb-3 text-3xl">🧰</div>
              <p className="text-sm font-semibold text-slate-600">
                Your stack is empty
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Add technologies to build your ideal development stack.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {/* Selected Items */}
              {selectedTechnologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-2.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-slate-800 sm:text-sm">
                      {technology.name}
                    </p>
                    <p className="text-[10px] text-slate-400 sm:text-xs">
                      {technology.category}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(technology.id)}
                    className="text-slate-300 transition hover:text-red-500"
                    aria-lebel={`Remove ${technology.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {/* Remove All */}
              <button
                type="button"
                onClick={onRemoveAll}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-rose-200 py-2.5 text-xs font-semibold text-rose-500 transition hover:bg-rose-50 sm:text-sm"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardStack;
