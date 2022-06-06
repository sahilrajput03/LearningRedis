# README

Src: https://github.com/redis/node-redis

Refer gist @ https://gist.github.com/sahilrajput03/c2fda8698f8a22dea61f772e7d54eff9

#### Wanna get a list, the last parameter is the callback where you get the list. The signature of callback is

```js
await client.lrange('key', 0, -1, redis.print)
// redis.print is a function that just prints the response. redis.print gets executed in a callback, so it won't be good for synchronous. :(

client.lpush('key', mywords, redis.print)
// returns totol no. of recors in the callback.(tested via redis.print)

client.lpush('key', mywords, redis.print) // prints the total no. of records after saving mywords array to the list though.
```
