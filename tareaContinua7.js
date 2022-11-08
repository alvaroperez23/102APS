//Apartado 7
console.log("\nAPARTADO 6\n");
console.log("\nSeleccione la opcion que quiera realizar: \n")
console.log("*	Mostrar todos los contactos (1)");
console.log("*	Mostrar un contacto específico (2)");
console.log("*	Anadir un nuevo contacto (3)");
console.log("*	Ordenar arrays (4)");
console.log("*	Salir del programa (5)");


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
    console.log(arrayDatos);
}

function showContact(arrayDatos, index) {
    console.log(arrayDatos[index]);
}

function addNewContact(arrayDatos, nNombre, nNumero, nCorreo){

    let objeto5 = new Object();
    objeto5.nombre = nNombre;
    objeto5.numero = nNumero;
    objeto5.correo = nCorreo;

    console.log(objeto5);
    arrayDatos.push(objeto5);
    console.log(arrayDatos);
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
} else if (opcion == 4){
    ordena = prompt ("* Ordenar por el nombre (1)\n* Ordenar por el telefono (2)\n* Ordenar por el correo (3)");
    
    if (ordena == 1 || ordena == 2 || ordena == 3){
        tipo = prompt ("* Ordenar en orden descendente (1)\n * Ordenar en orden ascendiente (2)");
    }
    
    if (ordena == 1 && tipo == 1){
        arrayDatos.sort((a, b) => {
            let sa = a.nombre.toLowerCase(),
                sb = b.nombre.toLowerCase();
        
            if (sa < sb) {
                return -1;
            }
            if (sa > sb) {
                return 1;
            }
            return 0;
        });
        console.log(arrayDatos);
    }
    if (ordena == 1 && tipo == 2){
        arrayDatos.reverse((a, b) => {
            let sa = a.nombre.toLowerCase(),
                sb = b.nombre.toLowerCase();
        
            if (sa < sb) {
                return -1;
            }
            if (sa > sb) {
                return 1;
            }
            return 0;
        });
        console.log(arrayDatos);
    }
    if (ordena == 2 && tipo == 1){
        arrayDatos.sort((a, b) =>{
            return a.nNumero - b.nNumero;
        })
        console.log(arrayDatos);
    }
    if (ordena == 2 && tipo == 2){
        arrayDatos.reverse((a, b) =>{
            return a.nNumero - b.nNumero;
        })
        console.log(arrayDatos);
    }
    if (ordena == 3 && tipo == 1){
        arrayDatos.sort((a, b) => {
            let xa = a.correo.toLowerCase(),
                xb = b.correo.toLowerCase();
        
            if (xa < xb) {
                return -1;
            }
            if (xa > xb) {
                return 1;
            }
            return 0;
        });
        console.log(arrayDatos);
    }
    if (ordena == 3 && tipo == 2){
        arrayDatos.sort((a, b) => {
            let xa = a.correo.toLowerCase(),
                xb = b.correo.toLowerCase();
        
            if (xa < xb) {
                return -1;
            }
            if (xa > xb) {
                return 1;
            }
            return 0;
        });
        console.log(arrayDatos);
    }
    
}




