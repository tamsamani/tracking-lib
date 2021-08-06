// Algortihm of loading
import core from "./modules/core";

// export the core function with window
export const track = core(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);
