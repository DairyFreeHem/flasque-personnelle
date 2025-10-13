from flask import Blueprint
from globals import ROOT_PATH



PERSONAL_ENDPOINT = 'personal'
PERSONAL_PREFIX = '/'
Personal = Blueprint(PERSONAL_ENDPOINT,__name__,url_prefix=PERSONAL_PREFIX)


from . import routes