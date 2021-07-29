import { URL_API_KEY } from "../constants";

export default function extractScriptParamters() {
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
