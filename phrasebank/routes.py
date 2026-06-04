from flask import render_template, current_app

from . import Personal


@Personal.route('/')
def opener():
    return "<h1>Hello</h1>"