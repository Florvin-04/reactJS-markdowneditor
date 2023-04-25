import { useState } from "react";

import "./App.scss";

import Header from "./components/header";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

function App() {
  
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Header />
        <Editor />
      </main>
    </div>
  );
}

export default App;
