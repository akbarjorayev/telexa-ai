import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'

dotenv.config()

const botData = {
  bot: new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { webHook: true }),
  chat: {
    history: [],
  },
}

export default botData
