import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";
import { MuiMode } from "./components/mui/mui-mode";
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <hr />
        <Skills skills={["HTML", "CSS", "Javascript"]} />
        <hr />
        <Counter />
        <hr />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
