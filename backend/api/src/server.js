import express from 'express'
import countInRange from '../utils/countInRange'
import redisGet from '../../redis/func/get'
import redis from '../../redis/redis'

const app = express()

app.use(express.json())

app.get("/:key" , async (req,res) => {
    const ans = await redisGet(req.params.key)
    if(!ans)res.send("nothing")
    if(ans)res.send(`<script> window.location = "${ans}" </script>`)
})

app.post("/" , async (req,res) => {
    const { url } = req.body
    const keyIndex =  await redisGet("keyIndex")
    await redis.set(keyIndex , url)
    const newKeyIndex = countInRange(keyIndex)
    await redis.set("keyIndex" , newKeyIndex)
    res.send(keyIndex)
})

const PORT = 3001

app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`)
})
