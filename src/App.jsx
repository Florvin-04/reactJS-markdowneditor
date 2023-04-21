import { useState } from "react";

import "./App.scss";

import Header from "./components/header";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Editor />
      </main>
    </div>
  );
}

export default App;
