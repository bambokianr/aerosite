from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import render_template, request, redirect, url_for

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:303630@localhost/AeroDesign'
app.debug = True
db = SQLAlchemy(app)

#class User(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    username = db.Column(db.String(80), unique=True)
#    email = db.Column(db.String(120), unique=True)
#
#    def __init__(self, username, email):
#        self.username = username
#        self.email = email
#
#    def __repr__(self):
#        return '<User %r>' % self.username

# Define models
class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    membername = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean())
    logged = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())

    def __init__(self, membername, email, password):
        self.membername = membername
        self.email = email
        self.password = password
        self.logged = False
    def __repr__(self):
        return '<Name %r>' % self.membername

class Component(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    price = db.Column(db.String(120), unique=True)
    sell_by = db.Column(db.String(300), unique=True)

    def __init__(self, name, price, sell_by):
        self.name = name
        self.price = price
        self.sell_by = sell_by
    def __repr__(self):
        return '<Name %r>' % self.name

## Create a user to test with
#@app.before_first_request
#def create_user():
#    db.create_all()
#    user_datastore.create_user(email='aero@aero.com', password='boraaero')
#    db.session.commit()

@app.route('/')
def index():
    return "Hello"

@app.route('/add_member')
def add_member():
    myMember = Member.query.all()
    return render_template('add_member.html', myMember=myMember)

@app.route('/post_member', methods=['POST'])
def post_member():
    member = Member(request.form['membername'], request.form['email'], request.form['password'])
    db.session.add(member)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/component_list')
def component_list():
    component = Component.query.all()
    return render_template('show_component.html', component=component)

@app.route('/profile/<email>')
def profile(email):
    user = User.query.filter_by(email=email).first()
    return render_template('profile.html', user=user)

@app.route('/post_user', methods=['POST'])
def post_user():
    user = User(request.form['username'], request.form['email'])
    db.session.add(user)
    db.session.commit()
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run()