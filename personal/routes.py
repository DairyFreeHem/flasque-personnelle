from flask import render_template, current_app

from . import Personal


@Personal.route('/')
def opener():
    return render_template("main.html")