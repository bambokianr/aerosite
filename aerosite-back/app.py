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
    confirmed_at = db.Column(db.DateTime())

    def __init__(self, membername, email, password):
        self.membername = membername
        self.email = email
        self.password = password
        self.logged = False
    def __repr__(self):
        return '<Name %r>' % self.membername

class ExMember(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exmembername = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(255), unique=True)
    turma = db.Column(db.String(10), unique=True)
    area = db.Column(db.String(255))
    active = db.Column(db.Boolean())

    def __init__(self, exmembername, email, turma, area):
        self.exmembername = exmembername
        self.email = email
        self.turma = turma
        self.area = area
    def __repr__(self):
        return '<Name %r>' % self.membername

class Component(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300), unique=True)
    quant = db.Column(db.Integer())
    price_unit = db.Column(db.Float())
    total = db.Column(db.Float())

    def __init__(self, name, quant, price_unit, total):
        self.name = name
        self.quant = quant
        self.price_unit = price_unit
        self.total = total
    def __repr__(self):
        return '<Name %r>' % self.name

## Realizar uma vez para criar a database
#@app.before_first_request
#def create_tables():
#    db.create_all()

@app.route('/')
def index():
    return "Hello"

@app.route('/add_member1515')
def add_member():
    myMember = Member.query.all()
    return render_template('add_member.html', myMember=myMember)

@app.route('/post_member', methods=['POST'])
def post_member():
    member = Member(request.form['membername'], request.form['email'], request.form['password'])
    db.session.add(member)
    db.session.commit()
    return redirect(url_for('add_member'))

@app.route('/add_exmember1515')
def add_exmember():
    myExMember = ExMember.query.all()
    return render_template('add_exmember.html', myExMember=myExMember)

@app.route('/post_exmember', methods=['POST'])
def post_exmember():
    exmember = ExMember(request.form['exmembername'], request.form['email'], request.form['turma'], request.form['area'])
    db.session.add(exmember)
    db.session.commit()
    return redirect(url_for('add_exmember'))

@app.route('/add_component1515')
def add_component():
    myComponent = Component.query.all()
    return render_template('add_component.html', myComponent=myComponent)

@app.route('/post_component', methods=['POST'])
def post_component():
    component = Component(request.form['name'], request.form['quant'], request.form['price_unit'], request.form['total'])
    db.session.add(component)
    db.session.commit()
    return redirect(url_for('add_component'))

@app.route('/profile/<membername>')
def profile(membername):
    member = Member.query.filter_by(membername=membername).first()
    return render_template('profile.html', member=member)

if __name__ == "__main__":
    app.run()