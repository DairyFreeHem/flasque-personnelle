from flask import render_template

from errors import Errors


@Errors.app_errorhandler(404)
def not_found_error(error):
    return render_template("errors/404.html"), 404


@Errors.app_errorhandler(500)
def internal_server_error(error):
    return render_template("errors/500.html"), 500