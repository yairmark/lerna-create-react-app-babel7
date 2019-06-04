import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FOO, BAR } from "@yourproject/common/src/const";
import Heading from "@yourproject/common/src/Heading";

function App() {
  return <Heading title={`Hello, World!!!! ${FOO} - ${BAR}`} />;
}

export default App;
