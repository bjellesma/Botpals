from flask import Flask
from routes.api.bots import bot_routes
app = Flask(__name__)
app.register_blueprint(bot_routes)

if __name__ == '__main__':
    app.run()