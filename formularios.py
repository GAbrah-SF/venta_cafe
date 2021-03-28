from flask import render_template
from titulos import title2, titulo2

def ver_formularios():
    return render_template("formularios.html", title2=title2, titulo2=titulo2)