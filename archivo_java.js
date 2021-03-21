// javascript documento

function sendMail() {
    var servicios = document.getElementsByClassName("servicio");
    var serviciosdatos = "";
    
 
    for (var i = 0; i < servicios.length; i++) {
        if (servicios[i].checked) {
            serviciosdatos += servicios[i].value + ", "
        }
    }


    var tipoPCradio = document.getElementsByClassName("tipo");
    var tipodatos = tipoPCradio[0].checked ? tipoPCradio[0].value : tipoPCradio[1].value;


    var tempParams = {
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        from_localidad: document.getElementById("from_localidad").value,
        from_tel: document.getElementById("from_tel").value,
        from_edad: document.getElementById("from_edad").value,
        from_servicio: serviciosdatos,
        from_pc: tipodatos,
        from_text: document.getElementById("from_text").value,
    };

    emailjs.send('service_28zg6gp', 'template_s1br0kj', tempParams)
    .then(function(res){
        console.log("succes", res.status);
        alert("Solicitud enviada");
        window.history.back();
    })
}

function guardarEquipos() {
    var equipos = document.getElementsByClassName("equiposRadio");
    var seleccion = equipos[0].checked ? equipos[0].value : equipos[1].checked ? equipos[1].value : equipos[2].value;
    window.localStorage.setItem("equipoSeleccionado", seleccion);
}


function sendMailCompra() {
    var equipos = document.getElementsByClassName("equipoRadio");
    var seleccionEquipo = equipos[0].checked ? equipos[0].value : equipos[1].checked ? equipos[1].value : equipos[2].value;

    var pagoRadio= document.getElementsByClassName("pagoRadio");
    var tipoPago = pagoRadio[0].checked ? pagoRadio[0].value : pagoRadio[1].value;


    var tempParams = {
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        from_localidad: document.getElementById("from_localidad").value,
        from_tel: document.getElementById("from_tel").value,
        from_edad: document.getElementById("from_edad").value,
        from_equipo: seleccionEquipo,
        from_pago: tipoPago,
        from_text: document.getElementById("from_text").value,
    };

    console.log(tempParams)
    emailjs.send('service_28zg6gp', 'template_eruut2e', tempParams)
    .then(function (res) {
        console.log("succes", res.status);
        alert("Pedido enviado");
        window.history.back();
    })
}

