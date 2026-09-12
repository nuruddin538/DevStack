import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import type { ITechnology } from "./types/technology";
import Technologies from "./components/technologies/Technologies";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // console.log(technologiesFetch);
  const [technologiesPromise] = useState(() => technologiesFetch());
  return (
    <>
      <Nav></Nav>
      <Banner />
      <Suspense fallback={<h2>Loading.......</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
