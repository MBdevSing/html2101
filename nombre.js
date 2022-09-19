/* function validar_formulario(){
    var nombre=document.getElementById("formRegistro").value;
    console.log(nombre);
}  */  

const nombre = document.getElementById("nombre")
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const password = document.getElementById("password")
const formRegistro = document.getElementById("formRegistro")
const parrafo = document.getElementById("warnings")

formRegistro.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(usuario.value.length <8){
        warnings += 'El usuario no es valido <br>'
        entrar = true   
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(password.value.length <8){
        warnings += 'La contraseña no es valido <br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }

})