from . import Flasque



@Flasque.route('/')
def opener():
    return "Hello"