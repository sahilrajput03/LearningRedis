const {expect} = require('expect')
const {commandOptions} = require('redis')
let log = console.log

connectToDb(async () => {
	await require('../redisClient4.js')
})

closeDb(async () => {})

beforeAll(async () => {
	// clear redis db here
	// src: https://stackoverflow.com/a/5756201/10012446
	// 	FLUSHDB - clears currently active database
	// FLUSHALL - clears all the existing databases
	await client.flushAll()
})

test('save a key-value', async () => {
	// src: https://github.com/redis/node-redis#usage
	await client.set('key', 'value')
	const key = await client.get('key')

	expect(key).toBe('value')
})

test('delete key', async () => {
	await client.del('key')
	const key = await client.get('key')
	expect(key).toBeNull()
})

test('array of strings using client.lrange', async () => {
	// Using Lrange: https://www.tabnine.com/code/javascript/functions/redis/RedisClient/lrange
	let mywords = ['one', 'two', 'three', 'four', 'five']
	await client.lPush('key1', mywords) // To push array of strings.

	let startIdx = 0,
		endIdx = -1

	let res = await client.lRange('key1', startIdx, endIdx)
	expect(res).toEqual(expect.arrayContaining(mywords))
})

test('last element from lrange using pop function', async () => {
	const expected = {element: 'five', key: 'key1'}

	const blPopPromise = client.blPop(commandOptions({isolated: true}), 'key1', 0)
	let res = await blPopPromise
	expect(res).toMatchObject(expected)
})
