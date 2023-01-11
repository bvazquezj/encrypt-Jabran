var inp = document.querySelector("#input");
var res = document.querySelector("#resultado");
var btn_enc = document.querySelector("#encript");
var btn_denc = document.querySelector("#desencript");
var btn_copy = document.querySelector("#Copiar");
var txta_res = document.getElementById("resultado");
var res_des = document.querySelector("#resultado").style.display = "none";
var btn_copy_des = document.querySelector("#Copiar").style.display = "none";
var oc_mun;

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
    if (string == "") {
        desactivar();
    }else{
        activar();
    }
    for (let i = 0; i < string.length; i++) {
        switch (string.charAt(i)) {
            case 'a':
                aux = "ai";
                break;
            case 'e':
                aux = "enter";
                break;
            case 'i':
                aux = "imes";
                break;
            case 'o':
                aux = "ober";
                break;
            case 'u':
                aux = "ufat";
                break;
            default:
                aux = string.charAt(i);    
                break;
        }
        new_word = new_word + aux;
    }

    res.value = new_word;
}

function desencriptar() {
    var new_word = ""; 
    var aux;
    var string = inp.value;
    if (string == "") {
        desactivar();
    }else{
        activar();
    }
    for (let i = 0; i < string.length; i++) {
        switch (string.charAt(i)) {
            case 'a':
                aux = i + 1;
                break;
            case 'e':
                aux = i + 4;
                break;
            case 'i':
                aux = i + 3;
                break;
            case 'o':
                aux = i + 3;
                break;
            case 'u':
                aux = i + 3;
                break;
            default:
                aux = i;    
                break;
        }
        new_word = new_word + string.charAt(i);
        i = aux;
    } 
    res.value = new_word;
}

function copi() {
    navigator.clipboard.writeText(res.value);
}

btn_enc.onclick = encriptar;
btn_denc.onclick = desencriptar;
btn_copy.onclick = copi;


