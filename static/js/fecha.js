let fecha, hoy, dia, mes, year, name_dias, name_mes

$(document).ready(function (){
    fecha = new Date()
    hoy = fecha.getDay()
    dia = fecha.getDate()
    mes = fecha.getMonth()
    year = fecha.getFullYear()

    name_dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
    name_mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

    $("#fecha1, #fecha2, #fecha3").val(name_dias[hoy] + ", "+ dia + " de " + name_mes[mes] + " de " + year)

})
