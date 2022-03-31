import Species from '../models/species';

 export default {
    Animal: {
        async species(parent, args) {
            return await Species.findById(parent.species);
        }
    },
    Mutation: {
        addSpecies: (parent, args) => {
           console.log('speciesResolver addSpecies', args);
           const newSpecies = new Species(args);
           return newSpecies.save();
        },
     },  
 };