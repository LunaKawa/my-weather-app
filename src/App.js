import React from "react";
import "./App.css";


import Header from "./Header";
import DisplayConsole from "./DisplayConsole";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <Header />
              <DisplayConsole />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
