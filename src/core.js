// Algortihm of loading

function core(root) {
	console.log("initializing...");

	// our Track function
	const track = function (...args) {
		console.log("We tracked:", args);
	};

	// check if google analytics is enabled
	if (root.ga) {
		// redefine the Track function
		track.originFunction = root.ga;

		// redefine the ga function
		root.ga = function (...args) {
			track(...args);
			return track.originFunction(...args);
		};
	}

	// else check if facebook events are enabled
	else if (root.fbq) {
		// redefine the Track function
		track.originFunction = root.fbq;

		// redefine the fbq function
		root.fbq = function (...args) {
			track(...args);
			return track.originFunction(...args);
		};
	} else {
		console.log("No analytics library found.");
	}

	return track;
}

// export the core function with window
export const track = core(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);
