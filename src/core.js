// Algortihm of loading

function core(root) {
	console.log("initializing...");

	// our Track function
	const track = function ({ source, originFunction, args }) {
		console.log("We tracked:", source, args);

		return originFunction(...args);
	};

	// check if google analytics is enabled
	if (root.ga) {
		console.log("We are detect Google Analytics");

		// import google plugin
		const googleTrackPlugin = import("./plugins/googleTrackPlugin");

		core.installPlugin(googleTrackPlugin, {
			source: "ga",
			context: root,
		});
	}

	// check if facebook events are enabled
	if (root.fbq) {
		// redefine the Track function

		console.log("We are detect Facebook Events");

		// redefine the fbq function
		const tempFbq = root.fbq;
		root.fbq = function (...args) {
			return track({
				source: "fbq",
				originFunction: tempFbq,
				args,
			});
		};
	}

	return track;
}

// core install plugin
core.installPlugin = async function (pluginPromise, options) {
	const plugin = (await pluginPromise).defaults;

	// install plugin
	core.plugins[options.source] = plugin(core, options);
};

core.trackFunction = function (options) {
	const ctx = options.context || window;

	const tempFunction = ctx[options.options].__origin || ctx[options.source];

	if (typeof tempFunction === "function" && tempFunction.__tracker !== core.trackFunction) {
		ctx[options.source] = function (...args) {
			return core.trackCall({
				...options,
				originFunction: ctx[options.source].__origin,
				args,
			});
		};
		ctx[options.source].__tracker = core.trackFunction;
		ctx[options.source].__origin = tempFunction;
	} else {
		console.log("We can't track this function", options);
	}
};

core.trackCall = function (options) {
	console.log("We Heve tracked:", options);

	core.plugins?.[options.source]?.(options);

	return options.originFunction(...options.args);
};

// export the core function with window
export const track = core(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);
