from flask import Blueprint, render_template

bp = Blueprint("main", __name__)


@bp.route("/")
def index():
    cars = [
        {"brand": "Ford", "model": "Fiesta", "year": 2018, "price": 15000},
        {"brand": "Ford", "model": "Focus", "year": 2018, "price": 20000},
        {"brand": "Ford", "model": "Mustang", "year": 2018, "price": 25000},
        {"brand": "Honda", "model": "Accord", "year": 2018, "price": 22000},
        {"brand": "Honda", "model": "Civic", "year": 2017, "price": 18000},
    ]
    return render_template("car_sales.html", cars=cars)
