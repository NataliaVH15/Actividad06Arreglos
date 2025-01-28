let gunter = { nombre: "Gunter", origen: "Hora de Aventura", puedeVolar: false, decirHola() { console.log("¡CUAC!"); } };
let ramon = { nombre: "Ramón", origen: "Happy Feet", puedeVolar: true, decirHola() { console.log("Encantado de conocerte."); } };
let fred = { nombre: "Fred", origen: "Patos al Agua", puedeVolar: false, decirHola() { console.log("¡Hola!"); } };

//a. arreglo
let pinguinos = [gunter,ramon,fred];

//b. imprimir los nombres
console.log("\tNombres de los pingüinos");
pinguinos.forEach(p => console.log(p.nombre));

//c. longuitud del arreglo
console.log("\tlonguitud del arreglo");
console.log(`Longuitud de arreglo: ${pinguinos.length}`);

//d. resplazar al tercer pinguino
pinguinos[2] = {nombre: "Skipper", origen: "Madagasrcar", puedeVolar: true, decirHola(){console.log("Listos para la acción!!");}};

//e. pinguinos que pueden volar
console.log("\tpinguinos que pueden volar");
pinguinos.forEach(p => {if (p.puedeVolar) console.log(`${p.nombre} puede volar.`);});

//f. primer pinguino que pudo valor
console.log("\tprimer pinguino que pudo valor");
let primerVolador = pinguinos.find(p => p.puedeVolar);
if (primerVolador) {
    console.log(`${primerVolador.nombre}, ${primerVolador.origen}`);
}

//g. agregar cantidad de hijos
console.log("\tcantidad de hijos");
pinguinos.forEach(p => p.cantidadHijos = Math.floor(Math.random()* 5) + 1);
pinguinos.forEach(p => console.log(`Nombre: ${p.nombre}, hijos: ${p.cantidadHijos}`));

//h. pinguinos con happy en el origen
let happy = pinguinos.filter(p => p.origen.includes("Happy"));
console.log(happy);

//i. pinguinos que tengan mas de dos hijos
let muchosHijos = pinguinos.filter(p => p.cantidadHijos > 2);
console.log(muchosHijos);

//j. insetar un nuevo pinguino en la posicion 2
pinguinos.splice(1,0,{nombre: "Lucas", origen: "Madagascar", puedeVolar: false, decirHola(){console.log("Hooolaaa");}});
console.log(pinguinos);