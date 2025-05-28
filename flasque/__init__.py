from flask import Blueprint


FLASQUE_ENDPOINT = 'flasque'
FLASQUE_PREFIX = '/flasque'
Flasque = Blueprint(FLASQUE_ENDPOINT,
                    __name__,
                    url_prefix=FLASQUE_PREFIX,
                    template_folder="template",
                    static_folder="static")


from . import routes