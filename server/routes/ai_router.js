require('dotenv').config()
const express = require('express')
const {OpenAI} = require('openai')
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

async function generateRecommendation(prompt) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: `Give me one recipe I can make with ${prompt} along with step by step instructions`}],
    model: 'gpt-3.5-turbo',
    max_tokens: 2048
  })
  console.log(chatCompletion.choices[0].message.content)
}

generateRecommendation('eggs flour sugar milk')

const router = express.Router()

router.get('/recommendation', function (req, res) {
    res.send("Hello World")
})

module.exports = router