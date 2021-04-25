import dataGlasses from '../js/data/data.js';

class GlassesList{
    constructor(){
        this.arrayGlasses = [];

    }

    addArrayGlasses(){
        this.arrayGlasses= [...dataGlasses];
    }
}

export default GlassesList;