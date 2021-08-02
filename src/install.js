import { updateMainApp } from "./modules/customAPI";

// array of type {name: "", priority: 0} of supported platforms
const supportedPlatforms = [
	// custom for undetected platforms
	{ name: "__custom__", priority: -9999 },

	// others
	{ name: "woocommerce", priority: 2 },
	{ name: "wordpress", priority: 1 },
	{ name: "joomla", priority: 0 },
	{ name: "drupal", priority: 0 },
	{ name: "magento", priority: 0 },
	{ name: "opencart", priority: 0 },
	{ name: "prestashop", priority: 0 },
	{ name: "shopify", priority: 3 },
	{ name: "oscommerce", priority: 0 },
	{ name: "moodle", priority: 0 },
];

// define High Priority Platform
/**
 * @param {typeof supportedPlatforms} supportedGenerators - array of platforms
 */
function getHighPriorityPlatform(supportedGenerators) {
	let highPriorityPlatform = null;
	supportedGenerators.forEach(function (generator) {
		if (generator.priority > highPriorityPlatform.priority) {
			highPriorityPlatform = generator;
		}
	});

	return highPriorityPlatform;
}

// function for detect the generator CMS on page
function detectSupportedPlatform() {
	// way n° 1: detect the ways for know whats the platform generate this website
	// via meta name generators
	const generators = Array.from(document.querySelectorAll("meta[name=generator]"));

	const supportedGenerators = supportedPlatforms.filter(function ({ name }) {
		return generators.some(function (generator) {
			return generator.getAttribute("content").toLowerCase().includes(name);
		});
	});

	// if the generator is supported more than one
	if (supportedGenerators.length > 1) {
		return getHighPriorityPlatform(supportedGenerators);
	} else if (supportedGenerators.length === 1) {
		return supportedGenerators[0];
	}

	// way n° 2: detect the ways for know whats the platform generate this website
	// via head meta tags that not contains generator
	const headGenerators = Array.from(document.querySelectorAll("head meta"));
	const supportedHeadGenerators = supportedPlatforms.filter(function ({ name }) {
		return headGenerators.some(function (generator) {
			return generator.getAttribute("content").toLowerCase().includes(name);
		});
	});

	// if the generator is supported more than one
	if (supportedHeadGenerators.length > 1) {
		return getHighPriorityPlatform(supportedHeadGenerators);
	} else if (supportedHeadGenerators.length === 1) {
		return supportedHeadGenerators[0];
	}

	// way n° 3: detect the ways for know whats the platform generate this website
	// via scripts loaded on page
	const scripts = Array.from(document.querySelectorAll("script"));
	const supportedScripts = supportedPlatforms.filter(function ({ name }) {
		return scripts.some(function (script) {
			return script.getAttribute("src").toLowerCase().includes(name);
		});
	});

	// if the generator is supported more than one
	if (supportedScripts.length > 1) {
		return getHighPriorityPlatform(supportedScripts);
	} else if (supportedScripts.length === 1) {
		return supportedScripts[0];
	}

	// if still not found suported generator, return custom generator
	return supportedPlatforms[0];
}

// function for fetch track core data
async function getTrackCore(platform) {
	// get main app data
	const mainApp = await updateMainApp();

	return {
		platform: platform,
		declareReferedCustomer(collectedData) {
			console.log("declareReferedCustomer", collectedData, mainApp);
			return "Customer";
		},
	};
}

export default async function install({ apiKey, shouldTrack, callback, versions, page, ...otherOptions }) {
	// log install sucess
	console.log("install success");

	// 1. detect CMS used (Wordpress, Drupal, Joomla, etc)
	const detectedCMS = detectSupportedPlatform();

	const core = await getTrackCore(detectedCMS);

	// 2. declare and get customer data
	const customer = core.declareReferedCustomer({
		version: versions[0],
		platform: detectedCMS.name,
		shouldTrack,
		apiKey,
		host: window.location.host,
		path: window.location.pathname,
	});

	console.log(customer);
}
