import redis from 'redis'

export const redisClient = redis.createClient({
  host: process.env.REDIS_HOST_NAME,
  port: process.env.REDIS_DEV_PORT,
})

redisClient.on('connect', () =>
  console.log(
    `${process.env.APP_NAME} connected to ${process.env.REDIS_HOST_NAME}:${process.env.REDIS_DEV_PORT}`,
  ),
)
redisClient.on('error', err => console.log(`${err}`))

export const redisWrapper = async (key, cb) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, async (err, cachedData) => {
      if (err) {
        return reject(err)
      }
      if (cachedData) {
        console.log('hit cache')
        try {
          return resolve(JSON.parse(cachedData))
        } catch (error) {
          return resolve(cachedData)
        }
      }
      const response = await cb()
      const data = await response.json()
      redisClient.setex(key, 3600, JSON.stringify(data))
      console.log('not hitting cache')
      return resolve(data)
    })
  })
}
