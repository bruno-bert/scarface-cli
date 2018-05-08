#!/usr/bin/env node
const Loader = require('./Loader');

var argv = require('yargs')
  .usage('Usage: scarface -t [templateName] -l [toConsole/withDate/toFile/none] -o [outputDirectory]')
  .demand(['t'])
  .alias('t', 'templateName')
  .alias('l', 'log')
  .describe('t', 'Name of template to be used')
  .describe('l', 'Log Strategy')
  .describe('o', 'Output directory to generate project')  
  .argv;


const directory = argv.o || path.resolve(process.cwd());
const log = argv.l || 'toConsole';

const pluginPrefix = 'scarface-';
const template = argv.t;
const pluginPath = pluginPrefix + template;

const params = {
    template : template,    
    directory: directory,
    log: log
  };


const Generator = Loader.load('AspnetCoreGenerator', pluginPath);
new Generator(params).run();   