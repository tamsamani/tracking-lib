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
		console.log("We are using Google Analytics");

		// redefine the ga function
		root.ga = function (...args) {
			return track({
				source: "ga",
				originFunction: root.ga,
				args,
			});
		};
	}

	// check if facebook events are enabled
	if (root.fbq) {
		// redefine the Track function

		console.log("We are using Facebook Event");

		// redefine the fbq function
		root.fbq = function (...args) {
			return track({
				source: "fbq",
				originFunction: root.fbq,
				args,
			});
		};
	} else {
		console.log("No analytics library found.");
	}

	return track;
}

// export the core function with window
export const track = core(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);
