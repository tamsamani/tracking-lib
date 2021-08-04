/**
 * Tousfacteurs Tracking Plugin &copyright;
 *
 */

function googleTrackPlugin(core, { source, originFunction, args, ...options }) {
	console.log("installing googleTrackPlugin ...", source);

	// install the plugin

	// return the callback function
	return function (callOptions) {
		// here the call options of plugin
		console.log("googleTrackPlugin called with options", callOptions);
	};
}

export default googleTrackPlugin;
