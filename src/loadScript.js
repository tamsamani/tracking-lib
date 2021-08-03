import { version } from "./package";

(function (root, branch, version) {
	// struct the script
	const scriptSource = `https://raw.githack.com/tamsamani/tracking-lib/${branch}/dist/${version}/index.js`;

	// load the script
	const script = document.createElement("script");
	script.src = scriptSource;
	script.async = true;
	script.defer = true;
	script.type = "text/javascript";
	script.onload = function () {
		console.log("tracking-lib loaded");
	};
	document.head.appendChild(script);
})(window, "dev", version);
