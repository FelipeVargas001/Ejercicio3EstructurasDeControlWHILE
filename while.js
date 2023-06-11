let numero1=prompt("Por favor ingrese un número positivo: ");
console.log("Aca empieza el primer ejercicio");
if (!isNaN(numero1)){
    let i=0;
    while(i<numero1){
        i++;
        if(i%5===0){
            console.log(i);
        }    

    } } else {
alert("Valor no valido, solo puedes ingresar números.");
        }

console.log("Aca empieza el segundo ejercicio");
let numero2a=prompt("Por favor ingrese un número entre 1 y 50: ");
let numero2b=prompt("Por favor ingrese otro número entre 1 y 50: ");
if (!isNaN(numero2a) && !isNaN(numero2b) && numero2a>0 && numero2a<=50 && numero2b>0 && numero2b<=50){
    let i=0;
    while(i<50){
        i++;
        if(i==numero2a){
            console.log("¡Lotería!");
         } else if(i==numero2b){
            console.log("¡Lotería!");
        } else{
console.log(i);    
} 
    } } else {
alert("Valor no valido, diferente a número o fuera del rango.");
        }
arrayPunto3=[];  
while(true){
    let numero3= parseInt(prompt(`Por favor ingrese números, si desea finalizar ingrese el 0: `));
    if(!isNaN(numero3) && numero3!==0){
        arrayPunto3.push(numero3);
       } else if (numero3===0){break
    }
} 
arrayALista=arrayPunto3.toString();
document.getElementById("resultado3").innerText="La lista de los números ingresados es:" +arrayALista;

listaPunto4="";  
while(true){
    let letrasPunto4= prompt(`Por favor letras o palabras, si desea finalizar no ingrese nada: `);
    if(isNaN(letrasPunto4) && letrasPunto4!==""){
        listaPunto4=listaPunto4+letrasPunto4;
       } else if (letrasPunto4===""){break
    }
} 
document.getElementById("resultado4").innerText="La concatenación de la palabras ingresadas es: "+listaPunto4;

while (true){
    let diaDeLaSemana = prompt("Por favor un día de la semana: ");
let dia = diaDeLaSemana.toLowerCase();
if (dia === "lunes") {
    alert("¿lunes? ni modo a empezar la semana con toda.");
} else if (dia === "martes") {
    alert("Es martes, tu puedes vas avanzando.");
}
else if (dia === "miercoles") {
    alert("Wow miercoles, vas por la mitad.");
}
else if (dia === "jueves") {
    alert("Jueves, va volando la semana.");
} else if (dia === "viernes") {
    alert("Es viernes, ¡Animo! ya casi lo logras.");
} else if (dia === "sabado") {
    alert("Que bonitos son los fines de semana de flojera.");
} else if (dia === "domingo") {
    alert("Ve a descansar")
    break
}}