/*################################################################################
# Buenos Aires Ciudad, Codo a Codo
# Curso           : Python FullStack
# Comisión        : 23520
# Trabajo Práctico: Venta de Snacks
################################################################################
# Grupo      : 16
# Integrantes:
#   ...
#   ...
#   ...
#   Fernando Marchioli
################################################################################*/

/*################################################################################
#                        Constantes y Variables globales
################################################################################*/
const formulario = document.getElementById('idFormulario')
const nombre     = document.getElementById('idNombre'    )
const email      = document.getElementById('idEmail'     )
const telefono   = document.getElementById('idTelefono'  )
const motivo     = document.getElementById('idMotivo'    )
const mensaje    = document.getElementById('idMensaje'   )

var resulValidacion

// Agregar manejador evento Submit al formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if( !validarCampos() )
        alert('Error de validación')
    else
        alert('Campos correctos')
        
})

/*################################################################################
#                                  Funciones
################################################################################*/

/*#-------------------------------------------------------------------------------
# Función    : validarCampos
# Descripción:
# Entrada    : 
# Salida     :
#-------------------------------------------------------------------------------*/
function validarCampos() {
    const patternEmail     = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const patternTelefono  = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
    const mensajeError     = document.getElementById('mensajeError')
    mensajeError.innerHTML = ''
    resulValidacion        = true
    
    // Validar campos requeridos
    mensajeError.innerHTML += campoRequerido( nombre   )
    mensajeError.innerHTML += campoRequerido( email    )
    mensajeError.innerHTML += campoRequerido( telefono )
    mensajeError.innerHTML += campoRequerido( motivo   )
    mensajeError.innerHTML += campoRequerido( mensaje  )

     // Validar longitudes campos
     mensajeError.innerHTML += longitudCampo( nombre  , 1, 20  )
     mensajeError.innerHTML += longitudCampo( motivo  , 1, 20  )
     mensajeError.innerHTML += longitudCampo( mensaje , 1, 200 )

    // Validar formato email
    if ( !patternEmail.test(email.value.trim()) ) {
        mensajeError.innerHTML += '<p>Email no valido</p>'
        resulValidacion = false
    }
    
     // Validar teléfono
     if ( !patternTelefono.test(telefono.value.trim()) ) {
        mensajeError.innerHTML += '<p>Teléfono no valido</p>'
        resulValidacion = false
    }
    
   return(resulValidacion)
}

/*#-------------------------------------------------------------------------------
# Función    : campoRequerido
# Descripción:
# Entrada    : 
# Salida     :
#-------------------------------------------------------------------------------*/
function campoRequerido( campo ) {
    let mensaje = ''
    if(!campo.value.trim()) {
        resulValidacion = false
        nombreCampo     = campo.previousElementSibling.innerText
        mensaje = `<p>Campo '${nombreCampo}' requerido.</p>`
    }
    return mensaje
}

/*#-------------------------------------------------------------------------------
# Función    : longitudCampo
# Descripción:
# Entrada    : 
# Salida     :
#-------------------------------------------------------------------------------*/
function longitudCampo( campo, min, max ) {
    let mensaje = ''
    if ( !(campo.value.length >= min && campo.value.length <= max) ) {
        resulValidacion = false
        nombreCampo     = campo.previousElementSibling.innerText
        mensaje = `<p>Longitud de '${nombreCampo}' no válida. Debe ser de ${min} a ${max} carácteres.</p>`
    }
    return mensaje
}