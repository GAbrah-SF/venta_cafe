from flask import render_template
from titulos import title4, titulo4

def ver_productos():
    return render_template("productos.html", title4=title4, titulo4=titulo4)