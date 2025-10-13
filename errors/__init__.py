from flask import Blueprint
from globals import ROOT_PATH


ERRORS_ENDPOINT = 'errors'
Errors = Blueprint(ERRORS_ENDPOINT, __name__)


from errors import routes