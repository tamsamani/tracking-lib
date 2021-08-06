/**
 * Tousfacteurs Tracking Plugin &copyright;
 *
 */

import { watchFunction } from "../modules/core";

function googleTrackPlugin({ source, originFunction, args, ...options }) {
	const ctx = options.context || window;
	console.log("installing googleTrackPlugin ...", source);

	// install the plugin
	const callHistory = [];

	// track google analytics events
	// watchFunction({
	// 	qa
	// });

	// return the callback function
	return function (callOptions) {
		// here the call options of plugin
		console.log("googleTrackPlugin called with options", callOptions);
		callHistory.push(callOptions);
	};
}

export default googleTrackPlugin;
