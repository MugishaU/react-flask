from flask import Flask, jsonify
from flask_cors import CORS

server = Flask(__name__)
CORS(server)

@server.route('/')
def home():
    return 'Flask server running!'




server.run(debug=True)