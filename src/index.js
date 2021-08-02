import extractParamters from "./helpers/extractParameters";
import pkg from "./package";

console.log("Tousfacteurs: ", pkg.name, "v" + pkg.version);
// check if code run on browsers
if (typeof window !== "undefined") {
  console.log("Tousfacteurs is running in a browser with version", pkg.version);

  const { apiKey, track, callback, page, ...otherParams } = extractParamters();

  // default settings
  const defaultSettings = {
    versions: [pkg.version],
    apiKey,
    shouldTrack: track,
    callback,
    page,
    ...otherParams,
  };

  const shouldInstall = typeof callback === "function" || track || apiKey;

  if (shouldInstall) {
    // import installation scripts
    import("./install").then((install) => {
      // install tousfacteurs
      install.default(
        Object.assign(defaultSettings, callback?.(defaultSettings) || {})
      );
    });
  }
} else {
  // warn the current system is not supported
  console.log("The current system is not supported.");
}
