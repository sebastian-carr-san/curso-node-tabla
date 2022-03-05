

const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
        
        try{

            let salida = '';
            let consola = '';

            for(let n=1; n<=hasta; n++){
                salida += `${base} x ${n} = ${base*(n)} \n`;
                consola += `${base} x ${n} = ${base*(n)} \n`.rainbow;
            }

            if(listar === true){
                console.log('============='.cyan);
                console.log(' Tabla del', base.toString().cyan );
                console.log('============='.cyan);
                console.log(consola);
            }

            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

            return `tabla-${ base }.txt`;
        } catch (err) {
            throw err;
        }
}

module.exports = {
    crearArchivo
}