import extractScriptParamters from "./helpers/extractScriptParameters";
import pkg from "./package";

console.log("Tousfacteurs: ", pkg.name, "v" + pkg.version);
// check if code run on browsers
if (typeof window !== "undefined") {
  console.log("Tousfacteurs is running in a browser with version", pkg.version);

  const { apiKey } = extractScriptParamters();

  // default settings
  const defaultSettings = {
    versions: [pkg.version],
    apiKey,
  };

  console.log("Tousfacteurs default settings: ", defaultSettings);

  // import installation scripts
  import("./install").then((install) => {
    // install tousfacteurs
    install.default(defaultSettings);
  });
} else {
  // warn the current system is not supported
  console.log("The current system is not supported.");
}
