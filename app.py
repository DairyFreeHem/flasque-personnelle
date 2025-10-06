from flask import Flask
from personal import Personal


app = Flask(__name__, template_folder=None)
app.register_blueprint(Personal)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"