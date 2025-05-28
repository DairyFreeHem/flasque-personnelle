from flask import Flask

from flasque import Flasque, FLASQUE_ENDPOINT

app = Flask(__name__)


app.register_blueprint(Flasque)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"