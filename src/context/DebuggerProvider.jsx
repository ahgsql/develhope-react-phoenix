import { string } from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

const DebuggerContext = createContext();
// Custom hook to access the WishlistContext
export function useDebugger() {
  return useContext(DebuggerContext);
}
export function DebuggerProvider({ children }) {
  const [debugMsg, setDebugMsg] = useState("");
  const createDebugMessage = (msg) => {
    let html = "";
    if (typeof msg != "string") {
      msg.forEach((log) => {
        html +=
          "<div class='debugmsg'> <span class='infotype " +
          log.type +
          "'>" +
          log.title +
          "</span><span class='value " +
          log.type +
          "'>" +
          log.value +
          "</span> </div> ";
      });
    }
    addDebugMessage(html);
  };
  const resetDebugMessage = () => {
    setDebugMsg("");
  };
  const addDebugMessage = (msg) => {
    setDebugMsg((prev) => prev + msg);
  };
  return (
    <DebuggerContext.Provider
      value={{
        debugMsg,
        setDebugMsg,
        createDebugMessage,
        resetDebugMessage,
      }}
    >
      {children}
    </DebuggerContext.Provider>
  );
}
