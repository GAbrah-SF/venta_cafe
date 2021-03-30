let formCliente, formProducto, formdeVentas

$(document).ready(function (){
    try{
        formCliente = $("#formCliente")
        formCliente[0].reset()
    } catch {}

    try{
        formProducto = $("#formProducto")
        formProducto[0].reset()
    } catch {}

    try{
        formdeVentas = $("#formdeVentas")
        formdeVentas[0].reset()
    } catch {}

    $("#limpiar1").on("click", function (){
        $(".inputs1").val("")
    })
    $("#limpiar2").on("click", function (){
        $(".inputs2").val("")
    })
    $("#limpiar3").on("click", function (){
        $(".inputs3").val("")
    })


    formCliente.submit(function (e){
        e.preventDefault()
        Swal.fire({
            icon: "question",
            background: "#000",
            title: "¿Guardar Cliente?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
        })

    })

    formProducto.submit(function (e){
        e.preventDefault()
        Swal.fire({
            icon: "question",
            background: "#000",
            title: "¿Guardar Producto?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
        })

    })

    formdeVentas.submit(function (e){
        e.preventDefault()
        Swal.fire({
            icon: "question",
            background: "#000",
            title: "¿Registrar Venta?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
        })

    })

})
