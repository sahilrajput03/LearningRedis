const redis = require("redis");
const client = require("./redisclient").client;

client.set("key", "keyvalue", redis.print);

client.get("key", redis.print);
