import { useEffect } from "react";
export default function useClickOutside2(ref, ref2, onClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!ref2.current.contains(event.target)) {
          //  console.log(ref, ref2);
          onClickOutside();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
