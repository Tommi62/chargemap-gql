import Animal from "../models/animal";    
 
 export default {
    Query: {
       animals: async (parent, args) => {
         return await Animal.find();
       },
       animal: async (parent, args) => {
          return await Animal.findById(args.id);
       }
    },
    Mutation: {
      addAnimal: (parent, args) => {
         console.log('animalResolver addAnimal', args);
         const newAnimal = new Animal(args);
         return newAnimal.save();
      },
      modifyAnimal: async (parent, args) => {
         console.log('animalResolver modifyAnimal', args);
         return await Animal.findByIdAndUpdate(args.id, args, {new: true});
      },
   },  
 };
 