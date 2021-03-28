from flask import render_template
from titulos import title5, titulo5

def ver_ventas():
    return render_template("ventas.html", title5=title5, titulo5=titulo5)