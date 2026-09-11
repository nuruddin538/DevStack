import Nav from "./components/Nav";

const devstack = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return <Nav></Nav>;
}

export default App;
