import { URL_API_KEY, URL_TRACK_KEY } from "../constants";

export default function extractParamters() {
  // curent script source
  const scriptSource = document.currentScript.src;
  // get paramters from current script
  const params = scriptSource.split("?")[1];
  // convert url search parameters to object
  const paramsObj = new URLSearchParams(params);

  // get apiKey from paramsObj
  const apiKey = paramsObj.get(URL_API_KEY);

  // get track ids from paramsObj
  const track = !/^(false|0|none)$/i.test(paramsObj.get(URL_TRACK_KEY));

  // get callback name function from paramsObj
  const callbackName = paramsObj.get("callback");

  // get callback function from root scope
  const callback = window[callbackName] || null;

  // NOTE: callback should return as a option for know traking pages

  // extract current page url parameters
  const pageUrl = new URL(window.location.href);
  // get page url parameters
  const pageParams = pageUrl.searchParams;
  // convert page url parameters as Record<key, value>
  const pageParamsObj = Array.from(pageParams.entries()).reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {}
  );

  // return object with apiKey, track, callback
  return {
    page: pageParamsObj,
    apiKey,
    track,
    callback,
  };
}
