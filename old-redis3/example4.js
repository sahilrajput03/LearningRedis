const redis = require("redis");
const client = require("./redisclient").client;

client.set("keyname", "keyvalue");

(async () => {
	try {
		const response = await client.get_async("key");
		console.log("#RESPONSE#:", response);
	} catch (e) {
		console.log("#ERROR#:", e);
	}
})();
