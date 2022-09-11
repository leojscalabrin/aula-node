import { write, read } from "./arquivos.js";
import chalk from 'chalk';

// write("teste.txt", "testando again");
// console.log(chalk.blue('teste'))
console.log(chalk.bgGreen.blue(read('teste.txt')))
