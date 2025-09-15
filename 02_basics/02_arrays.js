
const fruits = ["Apple","Banana","WaterMelon","Pineapple"]

const shakes = ["AppleShake","BananaShake","WatermelonShake","PineappleShake"]
fruits.push(shakes)
console.log(fruits)


const fruits_shakes = fruits.concat(shakes)
console.log(fruits_shakes)

const news = [...fruits_shakes,...fruits_shakes]
console.log(news)