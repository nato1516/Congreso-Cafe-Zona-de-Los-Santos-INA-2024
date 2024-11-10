// JAVASCRIPT DE LA AGENDA
document.getElementById('button__generalidades').onclick = function () {
    event.preventDefault()
    Swal.fire({
        showCloseButton: true, // Muestra la X para cerrar
        html: '<h3>Fechas:</h3><h4 class="fw-normal">Martes 12 de Noviembre al</h4><h4 class="fw-normal">Jueves 14 de Noviembre</h4><br><br><h3>Lugar:</h3><h4 class="fw-normal">Gimnasio del INA CPESS Los Santos, Abejonal de León Cortes</h4><br><br><h3>Participantes:</h3><h4 class="fw-normal">200 Participantes, cupo limitado.</h4><h4 class="fw-normal">Personas agricultoras de café y representantes del sector productivo de todo el país</h4>',
        showConfirmButton: false // Oculta el botón de "OK"
    });
};
document.getElementById('Nov12').onclick = function () {
    event.preventDefault()
    Swal.fire({
        html: '<h3>Fechas:</h3><h4 class="fw-normal">Martes 12 de Noviembre al</h4><h4 class="fw-normal">Jueves 14 de Noviembre</h4><br><br><h3>Lugar:</h3><h4 class="fw-normal">Gimnasio del INA CPESS Los Santos, Abejonal de León Cortes</h4><br><br><h3>Participantes:</h3><h4 class="fw-normal">200 Participantes, cupo limitado.</h4><h4 class="fw-normal">Personas agricultoras de café y representantes del sector productivo de todo el país</h4>',
        showCloseButton: true, // Muestra la X para cerrar
        showConfirmButton: false // Oculta el botón de "OK"
    });
};
document.getElementById('Nov13').onclick = function () {
    event.preventDefault()
    Swal.fire({
        html: '<h3>Fechas:</h3><h4 class="fw-normal">Martes 12 de Noviembre al</h4><h4 class="fw-normal">Jueves 14 de Noviembre</h4><br><br><h3>Lugar:</h3><h4 class="fw-normal">Gimnasio del INA CPESS Los Santos, Abejonal de León Cortes</h4><br><br><h3>Participantes:</h3><h4 class="fw-normal">200 Participantes, cupo limitado.</h4><h4 class="fw-normal">Personas agricultoras de café y representantes del sector productivo de todo el país</h4>',
        showCloseButton: true, // Muestra la X para cerrar
        showConfirmButton: false // Oculta el botón de "OK"
    });
};
document.getElementById('Nov14').onclick = function () {
    event.preventDefault()
    Swal.fire({
        html: '<h3>Fechas:</h3><h4 class="fw-normal">Martes 12 de Noviembre al</h4><h4 class="fw-normal">Jueves 14 de Noviembre</h4><br><br><h3>Lugar:</h3><h4 class="fw-normal">Gimnasio del INA CPESS Los Santos, Abejonal de León Cortes</h4><br><br><h3>Participantes:</h3><h4 class="fw-normal">200 Participantes, cupo limitado.</h4><h4 class="fw-normal">Personas agricultoras de café y representantes del sector productivo de todo el país</h4>',
        showCloseButton: true, // Muestra la X para cerrar
        showConfirmButton: false // Oculta el botón de "OK"
    });
};
//JAVASCRIPT DE LAS METRICAS
let avisador = false; //Variable para controlar la animación
window.addEventListener('scroll', function () {
    //necesito una constante que me guarde el circulo que va a rellenar o lo que va a cambiar
    const circuloRelleno = document.querySelector('.cfront');
    const circuloRelleno2 = document.querySelector('.cfront2');
    const circuloRelleno3 = document.querySelector('.cfront3');
    //necesito una constante que me guarde el texto que va a aumentar según el porcentaje que haya
    const porcentajeBase = document.getElementById('porcentaje');
    const porcentajeBase2 = document.getElementById('porcentaje2');
    const porcentajeBase3 = document.getElementById('porcentaje3');
    //ahora lo que hago es que haga el cambio SI en el eje Y esta por arriba de lo que se pide y que además el avisador sea falso (lo que significa que la animación no se ha hecho)
    if (scrollY > 4650 && !avisador) {
        // ahora necesito decirle los cambios que va a hacer
        //Que se rellene hasta donde son los datos, se coloca por ejemplo si es completo 50 ya que es la mitad del circulo
        circuloRelleno.style.strokeDasharray = "10 100";
        circuloRelleno2.style.strokeDasharray = "20 100";
        circuloRelleno3.style.strokeDasharray = "30 100 ";
        // Inicializar el porcentaje cambiado, ya que es de 0 hasta donde se quiere
        var porcentajeCambiado = 0;
        var porcentajeCambiado2 = 0;
        var porcentajeCambiado3 = 0;
        //Ahora voy a usar un ciclo porque necesito que me aumente hasta que sea la misma cantidad del strokeDasharray
        //Uso interval porque es mas efectivo para animaciones como estas que se veran
        const interval = this.setInterval(() => {
            if (porcentajeCambiado < 10) {
                //que vaya aumentando de uno en uno
                porcentajeCambiado++;
                //Ahora necesito que se actualice el texto en el html con el cambio que ira realizando, dentro del ciclo para que se vaya viendo la animación
                porcentajeBase.textContent = porcentajeCambiado + "%";
            } else {
                this.clearInterval // Para que se detenga el intervalo o ciclo si llega a 30
                avisador = true; // Marcar que la animación ya fue hecha
            }
            if (porcentajeCambiado2 < 20) {
                porcentajeCambiado2++;
                porcentajeBase2.textContent = porcentajeCambiado2 + "%";
            }
            if (porcentajeCambiado3 < 30) {
                porcentajeCambiado3++;
                porcentajeBase3.textContent = porcentajeCambiado3 + "%";
            }
        }, 45); // Ahora de acuerdo con la estructura de interval se ajusta el tiempo en el que se ira viendo los cambios
    }
});
//JAVASCRIPT PARA LOS STANDS
function showHide(button) {
    const cardBody = button.closest('.card-body');
    const showButton = cardBody.querySelector('.plus');
    const hideButton = cardBody.querySelector('.hide');
    const details = cardBody.querySelector('.details');
    // Si se hizo clic en el botón de mostrar ("+")
    if (button.classList.contains('plus')) {
        // Mostrar los detalles
        details.classList.add('show');
        // Cambiar la visibilidad de los botones
        showButton.style.display = 'none';
        hideButton.style.display = 'block';
    }
    // Si se hizo clic en el botón de ocultar ("-")
    else if (button.classList.contains('hide')) {
        // Ocultar los detalles
        details.classList.remove('show');
        // Cambiar la visibilidad de los botones
        showButton.style.display = 'block';
        hideButton.style.display = 'none';
    }
    // Ocultar todos los demás detalles en otras tarjetas
    const allCardBodies = document.querySelectorAll('.card-body');
    allCardBodies.forEach((card) => {
        if (card !== cardBody) {
            const otherShowButton = card.querySelector('.plus');
            const otherHideButton = card.querySelector('.hide');
            const otherDetails = card.querySelector('.details');
            // Si hay detalles visibles en otras tarjetas, ocultarlos
            if (otherDetails.classList.contains('show')) {
                otherDetails.classList.remove('show');
                otherShowButton.style.display = 'block';
                otherHideButton.style.display = 'none';
            }
        }
    });
}
