import { useRef, useEffect } from "react";
import * as Fathom from "fathom-client";
import { useLocation } from "react-router-dom";
export function useFathom(id, initialOpts) {
    var fathomLoaded = useRef(false);
    var location = useLocation();
    var ref = useRef(initialOpts), opts = ref.current;
    useEffect(function setupFathom() {
        if (!fathomLoaded.current) {
            Fathom.load(id, opts);
            fathomLoaded.current = true;
        } else {
            Fathom.trackPageview();
        }
    }, [
        id,
        location,
        opts
    ]);
}
export function useGoal(code, cents) {
    return function() {
        return Fathom.trackGoal(code, cents);
    };
}
