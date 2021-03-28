from flask import render_template
from titulos import title3, titulo3

def ver_clientes():
    return render_template("clientes.html", title3=title3, titulo3=titulo3)