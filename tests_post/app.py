from flask import Flask, render_template
from telethon import TelegramClient
import threading
import asyncio
import logging

# Настройка логирования
logging.basicConfig(level=logging.DEBUG)

# Конфигурация Telegram API для пользователя (не для бота)
api_id = '23473086'  # Получить на https://my.telegram.org
api_hash = '32c0ec99cc2115b1bb33c9923dc3d689'  # Получить на https://my.telegram.org
phone_number = '+79267364580'  # Ваш номер телефона в формате +79123456789
channel = 'plus7production'  # Название канала

# Создание приложения Flask
app = Flask(__name__)

# Инициализация TelegramClient через учетную запись пользователя
client = TelegramClient('user_session', api_id, api_hash)

# Функция для получения постов (асинхронная)
async def get_posts():
    try:
        logging.info("Авторизация пользователя...")
        await client.start(phone_number)  # Асинхронная авторизация
        logging.info("Пользователь успешно авторизован.")

        logging.info(f"Попытка получить сообщения из канала: {channel}")
        messages = await client.get_messages(channel, limit=10)

        if not messages:
            logging.warning("Нет сообщений в канале.")

        posts = []
        for message in messages[:4]:  # Берем последние 4 поста
            logging.info(f"Сообщение: {message.id} | {message.text}")
            post = {
                'text': message.text or message.caption or 'Медиа-контент',
                'date': message.date,
                'url': f'https://t.me/{channel}/{message.id}',
                'media': []
            }

            # Добавление медиа-контента
            if message.photo:
                post['media'].append(await message.download_media())
                logging.info("Добавлено фото.")
            if message.video:
                post['media'].append(await message.download_media())
                logging.info("Добавлено видео.")

            posts.append(post)

        if not posts:
            logging.warning("Нет постов для отображения.")

        return posts

    except Exception as e:
        logging.error(f"Произошла ошибка при получении постов: {e}")
        return []

# Запуск асинхронной функции в потоке
def run_sync_func(func):
    loop = asyncio.new_event_loop()  # Создаем новый цикл событий
    asyncio.set_event_loop(loop)  # Устанавливаем его как текущий
    result = loop.run_until_complete(func())  # Запуск асинхронной функции
    return result

@app.route('/')
def index():
    # Запускаем асинхронную функцию в отдельном потоке
    thread = threading.Thread(target=run_sync_func, args=(get_posts,))
    thread.start()

    # Просто заглушка на момент запуска функции
    return render_template('index.html', posts=[])

if __name__ == '__main__':
    app.run(debug=True)
