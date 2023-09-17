import { createContext, useContext, useState, useEffect } from "react";

const DebuggerContext = createContext();
// Custom hook to access the WishlistContext
export function useDebugger() {
  return useContext(DebuggerContext);
}
export function DebuggerProvider({ children }) {
  const [debugMsg, setDebugMsg] = useState("");

  return (
    <DebuggerContext.Provider
      value={{
        debugMsg,
        setDebugMsg,
      }}
    >
      {children}
    </DebuggerContext.Provider>
  );
}
