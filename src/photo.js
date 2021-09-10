import { redisWrapper } from './index.js'

export const Photo = async (req, res) => {
  const data = await redisWrapper(
    `photo?albumId=${req.query.albumId}`,
    async () => {
      return await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${req.query.albumId}`,
      )
    },
  )
  res.send(data)
}
