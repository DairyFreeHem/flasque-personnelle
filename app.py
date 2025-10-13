import pathlib
from flask import Flask
from personal import Personal


def create_app(config_filename):
    app = Flask(__name__, template_folder=None)
    if config_filename is not None and Path(config_filename).exists():
        app.config.from_pyfile(config_filename)

    app.register_blueprint(Personal)


    # @app.route("/")
    # def hello_world():
    #     return "<p>Hello, World!</p>"

    return app


