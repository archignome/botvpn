# VPN Sales Telegram Bot

A professional Telegram bot for selling VPN configurations with automated order management.

## Features

- 🔐 Multiple VPN configuration options
- 💳 Simple order management system
- 📨 Admin notifications for new orders
- 📊 Order tracking and management
- 🚀 Ready for deployment on various platforms

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   BOT_TOKEN=your_telegram_bot_token_here
   ADMIN_ID=your_telegram_user_id_here
   PORT=3000
   ```

   To get these values:
   - BOT_TOKEN: Create a new bot with [@BotFather](https://t.me/botfather) on Telegram
   - ADMIN_ID: Get your Telegram user ID from [@userinfobot](https://t.me/userinfobot)

4. Start the bot:
   ```bash
   npm start
   ```

## Deployment

This bot is ready to be deployed on various platforms:

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set environment variables in Vercel dashboard

### Railway
1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically

## Usage

Available bot commands:
- `/start` - Start the bot and see VPN configurations
- `/plans` - View available VPN plans
- `/orders` - View your orders
- `/help` - Show help message

## Order Management

Orders are stored in `db.json`. Each order contains:
- Order ID
- User information
- Selected configuration
- Order status
- Timestamp

Admin receives notifications for new orders via Telegram. 