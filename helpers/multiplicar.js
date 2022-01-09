const fs = require('fs');

const crearArchivo = async(numero, listado = false, hasta) => {
    
    try{

        let salida = '';
        
        for(let i=0; i <= hasta; i++){
            salida += `${numero} x ${i} = ${i * numero}\n`;
        }

        if(listado){
        console.log('===============');
        console.log(`Tabla del ${numero}`);
        console.log('===============');
        console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
        return `tabla-${numero}.txt`;
    } catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}