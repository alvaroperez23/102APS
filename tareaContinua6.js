//Apartado 6
console.log("\nAPARTADO 6\n");
console.log("\nSeleccione la opcion que quiera realizar: \n")
console.log("*	Mostrar todos los contactos (1)");
console.log("*	Mostrar un contacto específico (2)");
console.log("*	Anadir un nuevo contacto (3)");
console.log("*	Salir del programa (4)");


let opcion = prompt ("Introduce la opcion que desea ejecutar: ");


let objeto1 = new Object();
objeto1.nombre = 'Maxwell Wright';
objeto1.numero = '(0191) 719 6495';
objeto1.correo = 'Curabitur.egestas.nunc@nonummyac.co.uk';

let objeto2 = new Object();
objeto2.nombre = 'Raja Villarreal';
objeto2.numero = '0866 398 2895';
objeto2.correo = 'posuere.vulputate@sed.com';

let objeto3 = new Object();
objeto3.nombre = 'Helen Richards';
objeto3.numero = '0800 1111';
objeto3.correo = 'libero@convallis.edu';

let arrayDatos = [objeto1, objeto2, objeto3];

let objeto4 = new Object();
objeto4.nombre = 'Maisie Haley';
objeto4.numero = '0913 531 3030 ';
objeto4.correo = 'risus.Quisque@urna.ca.';


arrayDatos.push(objeto4);

function showAllContacts(arrayDatos) {
    if (arrayDatos instanceof Array){
        console.log(arrayDatos);
    }
}

function showContact(arrayDatos, index) {

    if (arrayDatos instanceof Array){
        console.log(arrayDatos[index]);
    }
}

function addNewContact(arrayDatos, nNombre, nNumero, nCorreo){
    if (arrayDatos instanceof Array && nNombre != "" && nNumero != "" && nCorreo != ""){
        let objeto5 = new Object();
        objeto5.nombre = nNombre;
        objeto5.numero = nNumero;
        objeto5.correo = nCorreo;
    
        console.log(objeto5);
        arrayDatos.push(objeto5);
        console.log(arrayDatos);
    } else {
        console.log("No se han cumplido los requisitos para añadir")
    }
    
}

if (opcion == 1){
    showAllContacts(arrayDatos);
} else if (opcion == 2){
    index = prompt ("Indice: ");
    showContact(arrayDatos, index);
} else if (opcion == 3){
    nNombre = prompt ("Introduce el nombre y apellido: ");
    nNumero = prompt ("Introduce el numero de telefono: ");
    nCorreo = prompt ("Introduce el correo electronico: ");
    addNewContact(arrayDatos, nNombre, nNumero, nCorreo);
}
