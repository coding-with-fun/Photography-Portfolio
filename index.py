import io
import json
import os

from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)


@app.route('/')
def index():
    data = get_static_json("static/portfolio.json")["photos"]["home"]
    return render_template('index.html', data=data)


@app.route('/portfolio')
def portfolio():
    data = get_static_json("static/portfolio.json")["photos"]
    return render_template('portfolio.html', data=data)


def get_static_file(path):
    site_root = os.path.realpath(os.path.dirname(__file__))
    return os.path.join(site_root, path)

def get_static_json(path):
    return json.load(open(get_static_file(path)))

if __name__ == "__main__":
    print("running py app")
    app.run(debug=True)
