//Desarrollo del código
// document.write('<p>Estadisticas centro medico ñuñoa</p>');

//Definición de las estructuras de datos
let radiologia = [{
    hora: "11:00",
    especialista: "<ignacio zuñiga>",
    paciente: "<francisca rojas>",
    rut: "98787821", //no se que pasa que no acepta el guion del rut
    prevision: "fonasa"
},
{
    hora: "11:30",
    especialista: "<federico subercaseaux>",
    paciente: "<pamela estrada>",
    rut: "9153452413",
    prevision: "Isapre"
},
{
    hora: "15:00",
    especialista: "<fernando wurthz>",
    paciente: "<armando luna>",
    rut: "1164453459",
    prevision: "isapre"
},
{
    hora: "15:30",
    especialista: "<ana maria godoy>",
    paciente: "<manuel godoy>",
    rut: "176664190",
    prevision: "Fonasa"
},
{
    hora: "16:00",
    especialista: "<patricia suazo>",
    paciente: "<ramon ulloa>",
    rut: "114989389k",
    prevision: "Fonasa"
}

];
let traumatologia = [{
    hora: "8:00",
    especialista: "<maria pas altuzarra>",
    paciente: "<paula sanchez>",
    rut: "155547745",
    prevision: "fonasa"
},
{
    hora: "10:00",
    especialista: "<raul araya>",
    paciente: "<angelica navas>",
    rut: "1154441479",
    prevision: "Isapre"
},
{
    hora: "10:30",
    especialista: "<maria arriagada>",
    paciente: "<ana klapp>",
    rut: "178794239",
    prevision: "isapre"
},
{
    hora: "11:00",
    especialista: "<alejandro badilla>",
    paciente: "<felipe mardones>",
    rut: "15474236",
    prevision: "isapre"
},
{
    hora: "11:30",
    especialista: "<cecilia budnik>",
    paciente: "<diego marre>",
    rut: "16554741k",
    prevision: "fonasa"
},
{
    hora: "12:00",
    especialista: "<arturo cavagnaro>",
    paciente: "<cecilia mendez>",
    rut: "197475358",
    prevision: "isapre"
},
{
    hora: "12:30",
    especialista: "<andres kanacri>",
    paciente: "<marcial suazo>",
    rut: "112547855",
    prevision: "Fisapre"
}

];
let dental = [{
    hora: "08:30",
    especialista: "<andrea zuñiga>",
    paciente: "<marcela retamal>",
    rut: "11123456", //no se que pasa que no acepta el guion del rut
    prevision: "Isapre"
},
{
    hora: "11:00",
    especialista: "<maria pia zañartu>",
    paciente: "<angel muñoz>",
    rut: "98787892",
    prevision: "Isapre"
},
{
    hora: "11:30",
    especialista: "<scarlett witting>",
    paciente: "<mario kast>",
    rut: "179987895",
    prevision: "Fonasa"
},
{
    hora: "13:00",
    especialista: "<francisco von tueber>",
    paciente: "<karin fernandez>",
    rut: "18887662-k",
    prevision: "Fonasa"
},
{
    hora: "13:30",
    especialista: "<eduardo viñuela>",
    paciente: "<hugo sanchez>",
    rut: "17665414",
    prevision: "Fonasa"
},
{
    hora: "14:00",
    especialista: "<raquel villaseca>",
    paciente: "<ana sepulveda>",
    rut: "144412810",
    prevision: "isapre"
},
];


//Resolución de la pregunta 2
let ultimaPosicion = radiologia.length - 1;
//nombre paciente y previsión separado con guión y atenciones con barra vertical |
console.log('Atenciones de radiología')
console.log(`Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[ultimaPosicion].paciente} - ${radiologia[ultimaPosicion].prevision}
`);

ultimaPosicion = traumatologia.length - 1;
//nombre paciente y previsión separado con guión y atenciones con barra vertical |
console.log('Atenciones de traumatología')
console.log(`Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[ultimaPosicion].paciente} - ${traumatologia[ultimaPosicion].prevision}
`);

ultimaPosicion = dental.length - 1;
//nombre paciente y previsión separado con guión y atenciones con barra vertical |
console.log('Atenciones dentales')
console.log(`Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[ultimaPosicion].paciente} - ${dental[ultimaPosicion].prevision}
`);

//Resolución pregunta número 3: Recorrer todo el arreglo
for (let i = 0; i <= radiologia.length - 1; i++) {
    console.log(`${radiologia[i].hora} - ${radiologia[i].especialista} - ${radiologia[i].paciente} - ${radiologia[i].rut} - ${radiologia[i].prevision}`)
}
//copiar for y hacer lo mismo para los otros 2
for (let i = 0; i <= traumatologia.length - 1; i++) {
    console.log(`${traumatologia[i].hora} - ${traumatologia[i].especialista} - ${traumatologia[i].paciente} - ${traumatologia[i].rut} - ${traumatologia[i].prevision}`)
}

for (let i = 0; i <= dental.length - 1; i++) {
    console.log(`${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision}`)
}

//sugerencia: implementar función para usar el mismo for 3 veces

//cuidadito con el loop