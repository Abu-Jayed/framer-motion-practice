import { useState } from "react";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout></MainLayout>
    </>
  );
}

export default App;
