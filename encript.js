let inp = document.querySelector("#input");
let res = document.querySelector("#resultado");
let btn_enc = document.querySelector("#encript");
let btn_denc = document.querySelector("#desencript");
let btn_copy = document.querySelector("#Copiar");
let txta_res = document.getElementById("resultado");
let res_des = document.querySelector("#resultado").style.display = "none";
let btn_copy_des = document.querySelector("#Copiar").style.display = "none";
let oc_mun;
const query = "qwertyuiopasdfghjklñzxcvbnm ";
const expreg = /^[A-Z\s]+$/i;

function activar() {
    oc_mun = document.querySelector("#box-muñ").style.display = "none";
    res_des = document.querySelector("#resultado").style.display = "block"
    btn_copy_des = document.querySelector("#Copiar").style.display = "inline-flex";
}

function desactivar() {
    oc_mun = document.querySelector("#box-muñ").style.display = "block";
    res_des = document.querySelector("#resultado").style.display = "none"
    btn_copy_des = document.querySelector("#Copiar").style.display = "none";
}

function encriptar() {    
    var new_word = ""; 
    var aux;
    var string = inp.value;
    if (!expreg.test(string)) {
        alert("recuerda no usar mayúsculas ni acentos");
        string = "";
    }if (string == "") {
        desactivar();
    }else{
        activar();
    }
    for (let i = 0; i < string.length; i++) {
        for(let j =0; j < query.length; j++){
            if (string.charAt(i) == query.charAt(j)) {
                if (j>=query.length-3) {
                    if (j == query.length - 1) {
                        aux = query.charAt(query.length-1);
                    }else{
                        aux = query.charAt(j-25);
                    }
                }else{
                    aux = query.charAt(j+2); 
                }
                new_word = new_word + aux;
            }
        }
    }

    res.value = new_word;
}

function desencriptar() {
    var new_word = ""; 
    var aux;
    var string = inp.value;
    if (!expreg.test(string)) {
        alert("recuerda no usar mayúsculas ni acentos");
        string = "";
    }if (string == "") {
        desactivar();
    }else{
        activar();
    }
    for (let i = 0; i < string.length; i++) {
        for(let j =0; j < query.length; j++){
            if (string.charAt(i) == query.charAt(j)) {
                console.log(string.charAt(i) + query.charAt(j))
                if(j>=2){
                    if(j == query.length-1){
                        aux = query.charAt(query.length-1);
                    }else{
                        aux = query.charAt(j-2);
                    }
                }else{
                    aux = query.charAt(j + 25);
                }
                new_word = new_word + aux;
            }
        }
    }
    res.value = new_word;
}

function copi() {
    navigator.clipboard.writeText(res.value);
}

btn_enc.onclick = encriptar;
btn_denc.onclick = desencriptar;
btn_copy.onclick = copi;