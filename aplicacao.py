from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/ola') #teste 
def ola():
    return '<h1> Hello World!</h1>'


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contatos')
def contatos():
    return render_template('contatos.html')

app.run(debug=True)
