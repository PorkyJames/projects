const OpenAI = require('openai')

require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const image = openai.images.generate({prompt: "A cute baby sea otter" })

console.log(image)