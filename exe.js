#!/usr/bin/env node 
import { Command } from 'commander';
const program = new Command();

program
  .name('Hanna_Program')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('ifnti')

  .argument('<string>',"Niveau d'étude (L1,L2,L3) ")
  .action((str, options) => {

        // console.log(str);
        console.log("Bonjour "+str);

    console.log("IFNTI");
  });

program.parse(process.argv);