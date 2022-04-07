"use strict";
exports.__esModule = true;
exports.useGoal = exports.useFathom = void 0;
var react_1 = require("react");
var Fathom = require("fathom-client");
var react_router_dom_1 = require("react-router-dom");
function useFathom(id, initialOpts) {
    var fathomLoaded = react_1.useRef(false);
    var location = react_router_dom_1.useLocation();
    var opts = react_1.useRef(initialOpts).current;
    react_1.useEffect(function setupFathom() {
        if (!fathomLoaded.current) {
            Fathom.load(id, opts);
            fathomLoaded.current = true;
        }
        else {
            Fathom.trackPageview();
        }
    }, [id, location, opts]);
}
exports.useFathom = useFathom;
function useGoal(code, cents) {
    return function () { return Fathom.trackGoal(code, cents); };
}
exports.useGoal = useGoal;
