// Obtener coordenadas y mostrar datos del clima al cargar la página
window.addEventListener('load', (event) => {
    let temperaturaValor       = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')
    let ubicacion              = document.getElementById('ubicacion')
    let iconoClima             = document.getElementById('icono-clima')

    iconoClima.src = 'img/sinubicacion.png'
    if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition( mostrarClima )
    } else {
        alert('No se puede obtener ubicación para mostrar el clima.')
    }

    function mostrarClima( posicion ) {
        const lat = posicion.coords.latitude
        const lon = posicion.coords.longitude
        const API_KEY = '877f95851a64cbb8fb94de66e882dbf2'
        const URL = `https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`

        fetch( URL )
            .then( response => { return response.json() } )
            .then( data => {
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} ° C`
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                iconoClima.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            })
            .catch( error => {
                alert( 'Error al obtener datos del clima: ' + error )
            })
    }
    
})

