import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import type { ITechnology } from "./types/technology";
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
function Loading() {
  return (
    <div className="flex min-h-[300px] items-center justify-center bg-[#f8fafc]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-violet-600"></div>
        <p className="text-sm font-medium text-slate-500">
          Loading technologies...
        </p>
      </div>
    </div>
  );
}

function App() {
  // console.log(technologiesFetch);
  const [technologiesPromise] = useState(() => technologiesFetch());
  return (
    <>
      <Nav></Nav>
      <Banner />
      <Suspense fallback={<Loading />}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
