


	

//////////////////////////////////////Primera letra  en mayus
function mayus(l,orange){
	
var l;
 codigo =/[\D\s]/;
        letra = (document.all) ? l.keyCode : l.which;
        if (letra==8) return true;
        
       
        first = String.fromCharCode(letra);


if (!codigo.test(first)) return false;
        word = orange.value;
        
        if (word.length==0 || word.substr(word.length-1,1)==" ") {
            orange.value = word+first.toUpperCase();
            return false;
        } 



}
/////////////////////////////////////////////paswarddddddd

function ComContra(){
 var contra1 = document.getElementById("contra1").value;
 var contra2 = document.getElementById("contra2").value;
var l=contra1.length;

if (contra1 != contra2||l<8) {

var teleee = document.getElementById("pp");
pp.style.display = "";
  return false;
}else{
pp.style.display = "none";
return true;
}
 
}


   
/////////////////////////////////////////////////////////obligatorio




/////////////////telefono
function telef(){
valor = document.getElementById("tele").value;
if( !(/^\d{9}$/.test(valor)) ) {

var teleee = document.getElementById("pt");
pt.style.display = "";
  return false;
}else{
pt.style.display = "none";

}

}
/////////////////////////////////correo
function correoo(){

valor = document.getElementById("correo").value;
if( !(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(valor)) ) {
var teleee = document.getElementById("pc");
pc.style.display = "";
  return false;
}else{
pc.style.display = "none";
return true;
}
}
/////////////////////////////////fecha
function tempo(){
var año = document.getElementById("año").value;
var dia = document.getElementById("dia").value;
 

 
if( dia<1||dia>31||año<1900||año>2018||isNaN(dia) == true||isNaN(año) == true ){

var mexico = document.getElementById("pdate");
pdate.style.display = "";
  return false;
}else{
pdate.style.display = "none";

}



}

/////////////////////////////////expresionesRegulares
function checkmail(){
valor = document.getElementById("correo").value;
if( !(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(valor)) ) {

var aux = document.getElementById("cmail");
cmail.style.display = "";
  return false;
}else{
cmail.style.display = "none";

}


}
function check(){

var formulario = document.getElementById('formu');
var nombre = formulario.nombre.value;
var correo = formulario.correo.value;
var tlfn = parseInt(formulario.tele.value);

var datos=false;


	if(expresionesReguleras(nombre, correo, tlfn)){
		datos=true;
    }else{
		alert("Los valores introducidos no son validos");
	}
}


function expresionesReguleras(nombre, correo, tlfn){

	var reguname = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    var regumail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var regutele = /^[9|6|7][0-9]{8}$/
;
   
	
    if(!reguname.test(nombre)){
        return false;    
		
    }
	
	 if(!regumail.test(correo)){
        return false;
    }
	
	if(!reguteke.test(tlfn)){
        return false;
    }

    return true;
}

/////////////////////////////////expresionesRegilares














