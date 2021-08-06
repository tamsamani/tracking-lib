import googleTrackPlugin from "../../plugins/googleTrackPlugin";

function core(root) {
	console.log("initializing...");

	// our Track function
	const track = function ({ source, originFunction, args }) {
		console.log("We tracked:", source, args);

		return originFunction(...args);
	};

	// watch and detect google analytics
	watchFunction({
		context: root,
		source: "ga",
		target: "__tf_ga",
		onDetect: async function () {
			console.log("We are detect Google Analytics");

			// import google plugin
			// const googleTrackPlugin = await import("../../plugins/googleTrackPlugin");

			installPlugin(googleTrackPlugin, {
				source: "ga",
				context: root,
			});
		},
	});

	// check if facebook events are enabled
	if (root.fbq) {
		// redefine the Track function

		console.log("We are detect Facebook Events");

		console.warn("facebook are not supported yet");
	}

	return track;
}
core.plugins = {};

export function trackFunction(options) {
	const ctx = options.context || window;

	const tempFunction = ctx[options.options].__origin || ctx[options.source];

	if (typeof tempFunction === "function" && tempFunction.__tracker !== trackFunction) {
		ctx[options.source] = function (...args) {
			return trackCall({
				...options,
				originFunction: ctx[options.source].__origin,
				args,
			});
		};
		ctx[options.source].__tracker = trackFunction;
		ctx[options.source].__origin = tempFunction;
	} else {
		console.log("We can't track this function", options);
	}
}

export function installPlugin(plugin, options) {
	// install plugin
	core.plugins[options.source] = plugin?.(options);
}

export function trackCall(options) {
	console.log("We Heve tracked:", options);

	core.plugins?.[options.source]?.(options);

	return options.originFunction(...options.args);
}

/**
 * Watch a function on a context
 */
export function watchFunction(options) {
	const ctx = options.context || window;
	const callFunction =
		typeof options.onCall === "function"
			? options.onCall
			: function (callback, callCtx, args, watchOptions) {
					console.log(callback, "called", args);
			  };

	if (ctx[options.source]) {
		if (ctx[options.source].__tf_watched) {
			console.log("We already have a watcher for this function");
			return;
		}

		options.onDetect?.();

		console.log("Source already exists");
		ctx[options.target] = ctx[options.source];
		ctx[options.target].__tf_watched = true;

		ctx[options.source] = new Proxy(ctx[options.target], {
			apply: function (callback, callCtx, args) {
				callFunction(callback, callCtx, args, options);
				return callback.apply(callCtx, args);
			},
		});
	} else {
		/* define the setter and getter of source */
		Object.defineProperty(ctx, options.source, {
			get: function () {
				return ctx[options.target];
			},
			set: function (value) {
				options.onDetect?.();
				console.log("watched", value);
				ctx[options.target] = new Proxy(value, {
					apply: function (callback, callCtx, args) {
						callFunction(callback, callCtx, args, options);
						return callback.apply(callCtx, args);
					},
				});
				ctx[options.target].__tf_watched = true;
			},
		});
	}
}

export default core;
