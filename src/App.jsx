import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
