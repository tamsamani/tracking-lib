import { URL_API_KEY } from "./constants";
import pkg from "./package";

console.log("Tousfacteurs: ", pkg.name, "v" + pkg.version);
// check if code run on browsers
if (typeof window !== "undefined") {
  console.log("Tousfacteurs is running in a browser");

  function extractScriptParamters() {
    // curent script source
    const scriptSource = document.currentScript.src;
    // get paramters from current script
    const params = scriptSource.split("?")[1];
    // convert url search parameters to object
    const paramsObj = new URLSearchParams(params);

    // get apiKey from paramsObj
    const apiKey = paramsObj.get(URL_API_KEY);

    return {
      apiKey,
    };
  }

  const { apiKey } = extractScriptParamters();

  // default settings
  const defaultSettings = {
    versions: [pkg.version],
    apiKey,
  };

  console.log("Tousfacteurs default settings: ", defaultSettings);
} else {
  // warn the current system is not supported
  console.log("The current system is not supported.");
}
