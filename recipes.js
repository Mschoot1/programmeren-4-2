/**
 * Created by marni on 3-5-2017.
 */
// Sample recipes database
// Source: https://en.wikibooks.org/wiki/Cookbook
var recipes = [
    {
        name: 'Lasagne',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'Calzone',
        category: 'Pizza',
        procedure: 'Steps to make calzone (pizza)'
    },
    {
        name: 'Tuna Salad',
        category: 'Salad',
        procedure: [
            'Mix ingredients in a bowl',
            'Chill before serving'
        ]
    },
    {
        name: 'Chicken Tikka',
        category: 'Chicken Recipes',
        procedure: [
            'Add all ingedrients except the chicken to a non-metallic mixing bowl',
            'Fry'
        ]
    }
];
module.exports = recipes;
