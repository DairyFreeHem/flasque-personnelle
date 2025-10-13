import pathlib
from flask import Flask



def create_app(config_filename):
    app = Flask(__name__,template_folder="templates")

    if config_filename is not None and Path(config_filename).exists():
        app.config.from_pyfile(config_filename)

    from personal import Personal
    app.register_blueprint(Personal)
    
    from errors import Errors
    app.register_blueprint(Errors)


    return app


