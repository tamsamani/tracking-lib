const package = require("./package.json");

console.log("Tousfactor: ", package.name, "v" + package.version);
// check if code run on browsers
if (typeof window !== "undefined") {
} else {
  // warn the current system is not supported
  console.log("The current system is not supported.");
}
