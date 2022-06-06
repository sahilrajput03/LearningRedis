const redis = require("redis");
const client = require("./redisclient").client;

client.del("key");
