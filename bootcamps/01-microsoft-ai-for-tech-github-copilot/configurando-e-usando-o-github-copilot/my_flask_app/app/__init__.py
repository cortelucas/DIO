from flask import Flask


def create_app():
    app = Flask(__name__, template_folder="../templates")

    from . import routes

    app.register_blueprint(routes.bp)

    return app
