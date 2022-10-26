const Logger = require('logplease');
const logger = Logger.create('utils');
const numeros = require ('./numeros');

const numeros = [2, 3, 101, 201, 202, 100];

for (const num of numeros) {
    if(num.esPar(num))
        logger.info(`El numero ${num} es par`)
    else
        logger.error(`El numero ${num} no es par`)
}



