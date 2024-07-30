from flask import Flask, render_template
from flask import request
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', title='Página Dinámica', message='¡Hola, bienvenido a mi página dinámica!')





@app.route('/submit', methods=['POST'])
def submit():
    user_input = request.form['user_input']
    return render_template('index.html', title='Página Dinámica', message=f' Hola {user_input}!')

if __name__ == '__main__':
    app.run(debug=True)