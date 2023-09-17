import React from "react";
import "./debugger.css";
import { useDebugger } from "../../context/DebuggerProvider";
export default function Debugger() {
  const { debugMsg, setDebugMsg } = useDebugger();
  return (
    <div className="debugger">
      Debugger
      <h1>{debugMsg}</h1>
    </div>
  );
}
