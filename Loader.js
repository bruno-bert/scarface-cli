class LoadModuleStrategy{

    
    static dev(name, path){
       /* can implement a strategy to load modules in dev mode for example */
       return null;
    }

    static prod(name, path){       
        let module = require('../' + path + '/' + name);
        return module;
    }

}


class ModuleLoader {

    constructor(strategy='prod'){
        this.strategy = LoadModuleStrategy[strategy];        
    }


    changeStrategy(newStrategy){
        this.strategy = LoadModuleStrategy[newStrategy];
    }

    load(name, path) {    
     
        if(!path)
            throw ('plugin path is required');
        

      return this.strategy(name, path);
    }
    
}

module.exports = new ModuleLoader('prod');