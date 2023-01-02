
var caracteres = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~{0-9}{A-Z}]/;
            
var resultado = "";

function encriptar(texto){

    var texto = document.getElementById("textoIngresado").value;

    if(texto === ""){

        alerta("No hay mensaje.");
        }else{

            if(caracteres.test(texto)){

                alerta("Caracter no valido.")
                }else{


                    resultado = texto.replaceAll("e", "enter")
                                    .replaceAll("i", "imes")
                                    .replaceAll("a", "ai")
                                    .replaceAll("o", "ober")
                                    .replaceAll("u", "ufat");
                                
                    formulario.reset();

                    document.getElementById("textoFinal").innerHTML=resultado;
                            
                }   
        }
}
                
function desencriptar(texto){


    var texto = document.getElementById("textoIngresado").value;

    if(texto === ""){  



        alerta("No hay mensaje.");        
        }else{


            if(caracteres.test(texto)){  


                            
                alerta("Caracter no valido.");
                }else{


                    resultado = texto.replaceAll("enter", "e")
                                    .replaceAll("imes", "i")
                                    .replaceAll("ai", "a")
                                    .replaceAll("ober", "o")
                                    .replaceAll("ufat", "u");
                                
                    formulario.reset();
                    document.getElementById("textoFinal").innerHTML=resultado;

                }
        }                 
}

function copiar(){


    var textarea = document.getElementById("textoFinal");
    var valor = textarea.value;
                
    navigator.clipboard.writeText(valor);

    if(valor !== ""){

        alerta("Copiado.");

        }else{

            alerta("No hay mensaje.");

        }
       
}
                                                                              
function borrar(){

    document.getElementById("textoIngresado").value = "";
    document.getElementById("textoFinal").innerHTML = "";
}

function alerta(mensaje){


    swal({
                        
        title:mensaje,
        button: false,
        timer: 1100
                        
    });

}