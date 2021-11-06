import React from "react";
import ItemsList from "./components/Items/ItemsList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemsList />
      </main>
    </>
  );
}

export default App;
