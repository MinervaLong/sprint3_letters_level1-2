// EXERCICI 1

let myName = ['V','A','N','E','S','A'];
let i;

for(i = 0; i < myName.length; i++){
    console.log(myName[i]);
}

// EXERCICI 2

let myName2 = ['V','A','N', 'E',3,'S','A'];
let j;

console.log('Partim del nom VANES3SA');
for(j = 0; j < myName2.length; j++){
    if(myName2[j] == 'A' || myName2[j] == 'E' || myName2[j] == 'I' || myName2[j] == 'O' || myName2[j] == 'U'){
        console.log('He trobat la VOCAL: ' + myName2[j]);
    }else if (typeof(myName2[j]) == 'number'){
        console.log('Els noms de persones no contenen el número: ' + myName2[j]);
    }else {
        console.log('He trobat la CONSONANT: ' + myName2[j]);
    }
}

// EXERCICI 3

const mapName = new Map();

mapName.set('A',2);
mapName.set('E',1);
mapName.set('N',1);
mapName.set('S',1);
mapName.set('V',1);

console.log(mapName);

// EXERCICI 4

let surName = ['P','E','R','E','A'];
let fullName = myName.concat(' ', surName);
console.log(fullName);

// NIVELL 2 

// Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:

let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';


function mailArray(string) {
    let regex = /[a-z\d.-]+@[a-z\d-\ñ]+\.(es)/gi;
 
    let mailArray = [...str.match(regex)]; // Return an array with all matches with that regex
    let mailFinalArray = [...new Set(mailArray)]; // Delete duplicates in the array

    return mailFinalArray;
}

console.log(mailArray(str));



