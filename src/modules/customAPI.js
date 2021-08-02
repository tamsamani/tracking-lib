// we will use jsonblob.com api to send data to server
import { version } from "../package";
import { compare as compareVersion } from "semver";

const MAINBLOOBID = "7477a122-f057-11eb-a0b0-7fdc1980dd8d";

const mainApp = {
	version: version,
	versions: {
		[version]: MAINBLOOBID,
	},
	data: {},
};

async function useAPI(key, method, data) {
	const body = /get|delete/i.test(method) ? undefined : data;

	try {
		const response = await fetch(`https://jsonblob.com/api/${key}`, {
			method: method,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body,
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.warn("API:", error);
		return { error };
	}
}

export async function updateMainApp(mainApp) {
	try {
		// get mainApp data
		const result = await useAPI(MAINBLOOBID);

		// asign data to mainApp
		Object.assign(mainApp.versions, result.versions);
		Object.assign(mainApp.data, result.data);

		// compare version
		const shouldUpdate = compareVersion(version, result.version) > 0;

		// if should update
		if (shouldUpdate) {
			// update mainApp
			saveMainApp(mainApp);
		}

		console.log("API: MainApp updated");

		return mainApp;
	} catch (error) {
		console.warn("updateMainApp", error);
	}
}

export async function saveMainApp(mainApp) {
	try {
		// get mainApp data
		const result = await useAPI(MAINBLOOBID, "put", mainApp);
		if (result.error) throw result.error;
		return mainApp;
	} catch (error) {
		console.warn("saveMainApp", error);
	}
}
