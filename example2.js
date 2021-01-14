const redis = require("redis");
const client = require("./redisclient").client;
const {log} = console;

mywords = ["one", "two", "three", "four", "five"];

// client.del("key"); // Deleting key's value

// client.lpush("key", mywords); // To push array of strings.

(async () => {
	try {
		const response = await client.lrange_async("key", 0, -1);
		// Here, response is the list.
		log("#RESPONSE(lrange)#:", response);
	} catch (e) {
		log("#ERROR(lrange)#:", e);
	}
})();
