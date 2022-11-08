//Apartado 5
console.log("\nAPARTADO 5\n");
console.log("\nSeleccione la opcion que quiera realizar: \n")
console.log("*	Mostrar el primer contacto (primero)");
console.log("*	Mostrar el ultimo contacto (ultimo)");
console.log("*	Mostrar todos los contactos (todos)");
console.log("*	Anadir un nuevo contacto (nuevo)");
console.log("*	Salir del programa (salir)");

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
    
    let opcion = '';
    do {
    opcion = prompt ("Introduce la opcion (palabra entre parentesis): ");

        switch (opcion) {
            case 'primero':
                console.log(arrayDatos[0]);
            break;
            case 'ultimo':
                console.log(arrayDatos[(arrayDatos.length) - 1]);
            break;
            case 'todos':
                console.log(arrayDatos);
            break;
            case 'nuevo':
                let pantallaNombre = prompt ("Introduce el nombre y apellido: ");
                let pantallaNumero = prompt ("Introduce el numero de telefono: ");
                let pantallaCorreo = prompt ("Introduce el correo electronico: ");
            
                let objeto5 = new Object();
                objeto5.nombre = pantallaNombre;
                objeto5.numero = pantallaNumero;
                objeto5.correo = pantallaCorreo;
            
                arrayDatos.push(objeto5);
                console.log(arrayDatos);
            break;
            case 'salir':
                break;
        default:
            break;
    }
    
} while (opcion !== 'salir');
