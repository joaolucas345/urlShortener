import redis from 'redis'

const redisClient = redis.createClient()

const init = async () => {
    await redisClient.set("keyIndex" , "a")
}

init()

module.exports = redisClient