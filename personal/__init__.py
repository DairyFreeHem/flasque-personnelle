from flask import Blueprint
from globals import ROOT_PATH



PERSONAL_ENDPOINT = 'personal'
PERSONAL_PREFIX = '/'
Personal = Blueprint(PERSONAL_ENDPOINT,
                    __name__,
                    url_prefix=PERSONAL_PREFIX,
                    template_folder="templates",
                    static_url_path=str(ROOT_PATH),
                    static_folder="static")


from . import routes