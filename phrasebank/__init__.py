from flask import Blueprint
from globals import ROOT_PATH



PHRASEBANK_ENDPOINT = 'phrasebank'
PERSONAL_PREFIX = '/phrasebank'
phrasebank = Blueprint(PHRASEBANK_ENDPOINT,__name__,url_prefix=PERSONAL_PREFIX)


from . import routes