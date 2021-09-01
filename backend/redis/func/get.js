import redis from '../redis'

module.exports = (key) => {
    return new Promise((resolver, reject) => {
        redis.get(key , (err , result) => {
            if(err){
                reject(err)
            }else{
                resolver(result)
            }
        }) 
    })
}