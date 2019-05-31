from flask import Flask, render_template, request, redirect, session, flash

app = Flask(__name__)
app.secret_key = 'aerodesignita'
@app.route('/login')
def login_areamembros():
  return render_template('login_areamembros.html')

@app.route('/areamembros')
def areamembros():
  if 'user_logado' not in session or session['user_logado'] == None:
    return redirect('/login')
  return render_template('areamembros.html')

@app.route('/authenticate', methods=['POST',])
def send_bd_areamembros():
  email = request.form['email']
  senha = request.form['senha']
  # return render_template('areamembros.html', email=email, senha=senha)

  if "aaa" == senha:
    session['user_logado'] = email
    flash(email + ' logado com sucesso!')
    return redirect('/areamembros')
  else:
    flash('ERRO! Não logado.')
    return redirect('/login')

@app.route('/logout')
def logout_areamembros():
  session['user_logado'] = None
  # flash('Nenhum usuário logado!')
  return redirect('/login')

app.run(debug=True)
