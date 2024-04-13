from flask import request, abort
from flask_restful import Resource

bots = [
    {
        "id": 1,
        "name": "Claudette",
                "tagline": "Claudette uses the API of claude.ai to help",
                "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "location": "Boston, MA"
    },
    {
        "id": 2,
        "name": "Chatty",
                "location": "Miami, FL",
                "tagline": "Chaty use the API of ChatGPT to help.",
                "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "company": {
                    "name": "Veneer Solutions",
                    "description": "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
                    "contactEmail": "contact@loremipsum.com",
                    "contactPhone": "555-555-5555"
                }
    },
    {
        "id": 3,
        "name": "Bill",
                "tagline": "Bill is just a standard human masquerading as a bot. He's a little tempermental at times",
                "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "location": "Boston, MA"
    },
    {
        "id": 4,
        "name": "Henry",
                "tagline": "Henry is an extra bot not normally shown",
                "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "location": "Boston, MA"
    }
]

# By convention, the classes are named list for multi get/create and Resounce for single operations
# By convention, the functions are named the same as the REST verbs
class BotList(Resource):
    def get(self):
        return bots


class BotResource(Resource):
    def get(self, bot_id):
        # filter returns a function iterator object so next() is used to get the next value of the iterator, a dict in this case
        # The second param in the next() function is a default value so that a stop iteration isn't hit
        bot = next(filter(lambda bot: bot.get("id") == bot_id, bots), None)

        if not bot:
            abort(404)

        return bot
    
    # for a put REST command, the dict with the data you'd like to change has to be in the body of the request
    def put(self, bot_id):
        data = request.json

        bot = None 
        # iterate the bot list and track the index
        for index, b in enumerate(bots):
            if b.get("id") == bot_id:
                # create a new dictionary with the original data of the bot and the new data
                bots[index] = {**b, **data}
                bot = bots[index]
        # if no bot is found to update, throw a 404
        if not bot:
            abort(404)

        return {"message": "bot updated", "bot": bot}
    
    def delete(self, bot_id):
        bot = None 

        for index, b in enumerate(bots):
            if b.get("id") == bot_id:
                bot = b 
                bots.pop(index)

        if not bot:
            abort(404)

        return {"message": "bot deleted", "bot": bot}
