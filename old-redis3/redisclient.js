const {promisify} = require("util");
const redis = require("redis");

const client = redis.createClient();

exports.client = client;
// Exported `client` as `named export`.

client.get_async = promisify(client.get.bind(client));

client.lrange_async = promisify(client.lrange.bind(client));
// to get the list in a key, with following params as range of list you want.

client.on("error", function (error) {
	console.error(error);
});
