import pkg from "./package";

console.log("Tousfactor: ", pkg.name, "v" + pkg.version);
// check if code run on browsers
if (typeof window !== "undefined") {
  console.log("Tousfactor is running in a browser");
} else {
  // warn the current system is not supported
  console.log("The current system is not supported.");
}
