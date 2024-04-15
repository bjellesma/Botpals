from flask import Flask
from routes.api.bots import bot_routes
app = Flask(__name__)
app.register_blueprint(bot_routes)

if __name__ == '__main__':
    # debug allows hot reload
    app.run(host="0.0.0.0", port=5000, debug=True)