const yargs = require('yargs');
const { options, boolean } = require('yargs');
const argv = require('yargs').options('n',{
        alias: 'numero',
        type: 'number',
        demandOption: true,
        describe: 'Es la base para multiplicar'
        })
        .options('l',{
            alias: 'listado',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .options('h',{
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Numero maximo de multiplicaciones'
        })
        .check((argv, options) => {
            if(isNaN(argv.n)){
                throw 'Falta un numero'
            }
            return true;
        })
        .check((argv, options) => {
            if(isNaN(argv.h)){
                throw 'Falta un maximo'
            }
            return true;
        }
        ).argv;

        module.exports = argv;