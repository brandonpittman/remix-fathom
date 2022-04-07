import { useRef, useEffect, useCallback } from "react";
import * as Fathom from "fathom-client";
import { useLocation } from "react-router-dom";
export function useFathom(id: string, initialOpts: Fathom.LoadOptions = {}) {
  let fathomLoaded = useRef(false);
  let location = useLocation();

  const { current: opts } = useRef(initialOpts);

  useEffect(
    function setupFathom() {
      if (!fathomLoaded.current) {
        Fathom.load(id, opts);
        fathomLoaded.current = true;
      } else {
        Fathom.trackPageview();
      }
    },
    [id, location, opts]
  );
}

export function useGoal(code: string, cents: number) {
  return useCallback(() => Fathom.trackGoal(code, cents), [code, cents]);
}
