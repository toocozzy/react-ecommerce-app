import React from "react";
import ItemsList from "./components/Items/ItemsList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemsList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
