

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola'
    } )
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero limite de multiplicaciones'
    } )
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base debe ser un numero'
        }
        if( isNaN( argv.h ) || argv.h < 1 ){
            throw 'Introduce un limite valido'
        }
        return true;
    } )
    .argv;

module.exports = argv;