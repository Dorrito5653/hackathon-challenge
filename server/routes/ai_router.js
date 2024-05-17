require('dotenv').config()
const express = require('express')
const {OpenAI} = require('openai')
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

async function generateRecommendations(prompt) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt}],
    model: 'gpt-3.5-turbo',
    max_tokens: 2048
  })
  // console.log(chatCompletion.choices[0].message.content)
  return chatCompletion.choices
}

// generateRecommendations('Give me one recipep I can make using any of the following items [eggs, flour, sugar, milk] along with step by step instructions.')

const router = express.Router()

router.post('/recommendations', async function (req, res) {
    try {
      const recommendations = await generateRecommendations(`Give me one recipe I can make using any of the following items ${req.body.items} along with step by step instructions.`)
      res.status(200).send(recommendations)  
    } catch (error) {
      console.log(error)
      res.status(500).send('Sorry, there was an error while generating the recommendation')
    }
    
})

// router.get('/instructions', async function (req, res) {
//   try {
//     const instructions = await generateRecommendations(`Give me instructions on how to make ${req.body.recipe} with ${req.body.items}`)
//     res.status(200).send(instructions[0].message.content)
//   } catch (error) {
//     console.log(error)
//     res.status(500).send('Sorry, there was an error while generating recipe instructions')
//   }
// })

module.exports = router