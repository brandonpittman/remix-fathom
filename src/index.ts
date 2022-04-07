import { useRef, useEffect, useCallback } from "react";
import * as Fathom from "fathom-client";
import { useLocation } from "react-router-dom";

export function useFathom(id: string, opts: Fathom.LoadOptions = {}) {
  let fathomLoaded = useRef(false);
  let location = useLocation();

  const optsRef = useRef(opts);

  useEffect(
    function setupFathom() {
      if (!fathomLoaded.current) {
        Fathom.load(id, optsRef.current);
        fathomLoaded.current = true;
      } else {
        Fathom.trackPageview();
      }
    },
    [id, location]
  );
}

export function useGoal(code: string, cents: number) {
  return useCallback(() => Fathom.trackGoal(code, cents), [code, cents]);
}
