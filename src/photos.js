import { redisWrapper } from './index.js'

export const Photos = async (req, res) => {
  const data = await redisWrapper('photos', async () => {
    return await fetch('https://jsonplaceholder.typicode.com/photos')
  })
  res.send(data)
}
