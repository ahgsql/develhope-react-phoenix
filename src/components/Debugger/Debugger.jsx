import React from "react";
import "./debugger.css";
import { useDebugger } from "../../context/DebuggerProvider";
import { useRef } from "react";
import { useState } from "react";
export default function Debugger() {
  const debuggerRef = useRef();
  const { debugMsg, setDebugMsg, resetDebugMessage } = useDebugger();
  const [isHide, setHide] = useState(false);
  const hideDebugger = () => {
    setHide(!isHide);
  };
  let divClass = "debugger ";
  if (isHide) divClass += "hidden ";
  return (
    <div
      className={divClass}
      ref={debuggerRef}
      onClick={() => {
        if (isHide) hideDebugger();
      }}
    >
      <span>Debugger to show various data</span>
      <div dangerouslySetInnerHTML={{ __html: debugMsg }}></div>
      <div>
        <button
          onClick={resetDebugMessage}
          style={{ marginRight: "10px", backgroundColor: "crimson" }}
        >
          Clean
        </button>
        <button onClick={hideDebugger}>Hide </button>
      </div>
    </div>
  );
}
