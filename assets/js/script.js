//Desarrollo del código
// document.write('<p>Estadisticas centro medico ñuñoa</p>');

//Definición de las estructuras de datos
let radiologia = [{
    hora: "10:00",
    especialista: "<NAME>",
    paciente: "<NAME>",
    rut: "12345678",
    prevision: "Isapre"
},
{
    hora: "12:00",
    especialista: "<NAME1>",
    paciente: "<NAME>",
    rut: "12345678",
    prevision: "Fonasa"
},
{
    hora: "13:00",
    especialista: "<NAME2>",
    paciente: "<NAME>",
    rut: "12345678",
    prevision: "Fonasa"
}
];
let traumatologia = [{
    hora: "10:00",
    especialista: "<NAME3>",
    paciente: "<NAME3>",
    rut: "12345678",
    prevision: "Isapre"
},
{
    hora: "10:00",
    especialista: "<NAME4>",
    paciente: "<NAME4>",
    rut: "12345678",
    prevision: "Isapre"
},
{
    hora: "10:00",
    especialista: "<NAME5>",
    paciente: "<NAME5>",
    rut: "12345678",
    prevision: "Fonasa"
}
];
let dental = [{
    hora: "10:00",
    especialista: "<NAME6>",
    paciente: "<NAME6>",
    rut: "12345678",
    prevision: "Fonasa"
},
{
    hora: "10:00",
    especialista: "<NAME7>",
    paciente: "<NAME7>",
    rut: "12345678",
    prevision: "Fonasa"
},
{
    hora: "10:00",
    especialista: "<NAME8>",
    paciente: "<NAME8>",
    rut: "12345678",
    prevision: "Isapre"
}
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