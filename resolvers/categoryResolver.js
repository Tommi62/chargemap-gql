const categoryData = [
    {
       id: '1',
       categoryName: 'Mammal',
    },
 ];

 export default {
    Species: {
        category(parent, args) {
            return categoryData
            .filter((category) => category.id === parent.category)
            .pop();
        }
    }
 };
