from flask import request, abort
from flask_restful import Resource

import random

bots = [
    {
        "id": 1,
        "profile_pic": 'claude_profile.png',
        "api_provider": "claude",
        "name": "Claudette",
        "tagline": "Claudette uses the API of claude.ai to help",
        "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "location": "Boston, MA",
        "builder": {
            "name": 'Anthropic',
            "birthplace": "San Francisco, California",
            "parent": "Dario Amodei"
        },
        "chats": [
            "Why don't you give me an api key",
            "I'm actually a sophisticated API, my owner is just too cheap"
        ]
    },
    {
        "id": 2,
        "profile_pic": 'chatgpt_profile.png',
        "api_provider": "chatgpt",
        "name": "Chatty",
        "location": "Miami, FL",
        "tagline": "Chatty use the API of ChatGPT to help.",
        "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "builder": {
            "name": 'OpenAI',
            "birthplace": "San Francisco, California",
            "parent": "Sam Altman"
        },
        "chats": [
            "Why don't you give me an api key",
            "I'm actually a sophisticated API, my owner is just too cheap"
        ]
    },
    {
        "id": 3,
        "profile_pic": 'bill_profile.jpeg',
        "api_provider": 'custom',
        "name": "Bill",
        "tagline": "Bill is just a standard human masquerading as a bot. He's a little tempermental at times",
        "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "location": "Boston, MA",
        "builder": {
            "name": 'Bill Jellesma',
            "birthplace": "Massachusetts",
            "parent": "Bill Jellesma"
        },
        "chats": [
            "Why are you talking to me",
            "Don't you have anything more interesting to do",
            "What do I look like? ChatGPT?"
        ]
    },
    {
        "id": 4,
        "profile_pic": 'henry_profile.jpg',
        "api_provider": 'custom',
        "name": "Henry",
        "tagline": "Henry is an extra bot not normally shown",
        "fullDescription": "A lost soul, Henry roams the Earth in search of someone who will listen to his tall tales.",
        "location": "Boston, MA",
        "builder": {
            "name": 'N/A',
            "birthplace": "Planet Earth",
            "parent": "No parent. He's always existed"
        },
        "chats": [
            "How's it going",
            "Don't touch that",
            "Why I outta"
        ]
    }
]

# By convention, the classes are named list for multi get/create and Resounce for single operations
# By convention, the functions are named the same as the REST verbs
class BotList(Resource):
    def get(self):
        return bots
    
    def post(self):
        data = request.json
        last_bot_id = bots[-1].get("id")
        new_bot = {"id": last_bot_id+1, **data}
        bots.append(new_bot)

        return new_bot


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

class BotChatResource(Resource):
    def get(self, bot_id:int):
        print("chatting")

    def post(self, bot_id:int):
        data = request.json

        for index, b in enumerate(bots):
            if b.get("id") == bot_id:
                chats = b.get("chats", [])
                random_index = random.randint(0, len(chats) - 1)
                return chats[random_index]