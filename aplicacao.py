from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/inicio')
def inicio():
    return render_template('index.html')


@app.route('/contatos')
def contatos():
    return render_template('contatos.html')

@app.route('/cursos')
def cursos():
    return render_template('cursos.html')

@app.route('/curso1')
def curso1():
    return render_template('curso1.html')


@app.route('/curso2')
def curso2():
    return render_template('curso2.html')


@app.route('/curso3')
def curso3():
    return render_template('curso3.html')


@app.route('/curso4')
def curso4():
    return render_template('curso4.html')


app.run(debug=True)
