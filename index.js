var iva_residencial = document.getElementById("iva_residencial");
var iva_industrial = document.getElementById("iva_industrial");
var zona = document.getElementById("zona");
var p = document.getElementById("p");
var container = document.getElementById("container");
var calcular = document.getElementById("calcular");
var resultado = 0;

const costoServicio = 102;
const constIva = 1;
const ivaIndustrial = 0.27;
const ivaResidencial = 0.21;
const distritoCentro = 5.80;
const distritoSur = 5.40;
const distritoOeste = 5.35;
const distritoNorte = 5.60;

function funciones(){
    var x = validacionDeCampos();
    if(x == true){
        calcularPrecio();
    }
    
}


function validacionDeCampos(){
    if(iva_industrial.checked == false && iva_residencial.checked == false){
    return p.innerText = "Error: Seleccione tipo de iva";
    }

    if(zona.selectedIndex == 0){
    return p.innerText = "Error: Seleccione una zona";
    }

    if(kws.value <= 0){
    return p.innerText = "Error: Ingrese kws mayor a 0";
    }

    return true;

}

function calcularPrecio(){
    //let zona2 = seleccionar.value;
    if(iva_industrial.checked == true && zona.value === "Centro"){
        resultado = costoServicio + (distritoCentro * kws.value) * (constIva + ivaIndustrial);
        return p.innerText = resultado;
    }

    if (iva_industrial.checked == true && zona.value === "Sur"){
        resultado = costoServicio + (distritoSur * kws.value) * (constIva + ivaIndustrial); 
        return p.innerText = resultado;
    }
    
    if (iva_industrial.checked == true && zona.value === "Oeste"){
        resultado = costoServicio + (distritoOeste * kws.value) * (constIva + ivaIndustrial); 
        return p.innerText = resultado;
    }
    
    if (iva_industrial.checked == true && zona.value === "Norte"){
        resultado = costoServicio + (distritoNorte * kws.value) * (constIva + ivaIndustrial); 
        return p.innerText = resultado;
    }
    
    
    if (iva_residencial.checked == true && zona.value === "Centro"){
        resultado = costoServicio + (distritoCentro * kws.value) * (constIva + ivaResidencial); 
        return p.innerText = resultado;
    }

    if (iva_residencial.checked == true && zona.value === "Sur"){
        resultado = costoServicio + (distritoSur * kws.value) * (constIva + ivaResidencial); 
        return p.innerText = resultado;
    }
    
    if (iva_residencial.checked == true && zona.value === "Oeste"){
        resultado = costoServicio + (distritoOeste * kws.value) * (constIva + ivaResidencial); 
        return p.innerText = resultado;
    }
    
    if (iva_residencial.checked == true && zona.value === "Norte"){
        resultado = costoServicio + (distritoNorte * kws.value) * (constIva + ivaResidencial); 
        return p.innerText = resultado;
    }
}