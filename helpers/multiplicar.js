const  colors  = require('colors');
const fs = require('fs');
const crearArchivo = async( base = 5, l = false, h = 10) => {

    try {

            let salida = '';


    for (let i = 1; i <= h; i++) {
        salida += `${base } ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    if (l){

        console.log('=============='.green);
        console.log(' Tabla del:'.green, colors.blue( base ));
        console.log('=============='.green);
        console.log(salida);

    }
    fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }
}
module.exports = {
   crearArchivo
}