import DomAccessHelper from "./dom-access-helper.js";
import HttpClient from "./http-client.js";
import MigratePluginManager from "./plugin-manager.js";
import QueryString from "./query-string.js";

export default {
	plugins: {
		"heyframe-frontend": {
			rules: {
				"migrate-plugin-manager": MigratePluginManager,
				"no-dom-access-helper": DomAccessHelper,
				"no-http-client": HttpClient,
				"no-query-string": QueryString,
			},
		},
	},
	rules: {
		"heyframe-frontend/migrate-plugin-manager": "error",
		"heyframe-frontend/no-dom-access-helper": "warn",
		"heyframe-frontend/no-http-client": "warn",
		"heyframe-frontend/no-query-string": "warn",
	},
};
