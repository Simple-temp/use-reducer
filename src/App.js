import React from "react";
import ControlReducer from "./components/ControlReducer/ControlReducer";
import DoReduce from "./components/DoReduce/DoReduce";


function App() {
  return (
    <div className="App">
        <DoReduce></DoReduce>
        <ControlReducer></ControlReducer>
    </div>
  );
}

export default App;
