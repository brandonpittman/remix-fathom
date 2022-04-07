import * as Fathom from "fathom-client";
export declare function useFathom(id: string, initialOpts: Fathom.LoadOptions): void;
export declare function useGoal(code: string, cents: number): () => void;
