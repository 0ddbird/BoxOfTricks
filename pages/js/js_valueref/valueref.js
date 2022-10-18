const recipes = [
    {
        "id": 1,
        "name" : "Limonade de Coco",
        "servings" : 1,
        "ingredients": [
            {
                "ingredient" : "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient" : "Jus de citron",
                "quantity" : 2
            },
            {
                "ingredient" : "Crème de coco",
                "quantity" : 2,
                "unit" : "cuillères à soupe"
            },
            {
                "ingredient" : "Sucre",
                "quantity" : 30,
                "unit" : "grammes"
            },
            {
                "ingredient": "Glaçons"
            }
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender",
        "appliance": "Blender",
        "ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
    },
    {
        "id": 2,
        "name" : "Poisson Cru à la tahitienne",
        "servings": 2,
        "ingredients": [
            {
                "ingredient" : "Thon Rouge (ou blanc)",
                "quantity" : 200,
                "unit" : "grammes"
            },
            {
                "ingredient" : "Concombre",
                "quantity" : 1
            },
            {
                "ingredient" : "Tomate",
                "quantity" : 2
            },
            {
                "ingredient" : "Carotte",
                "quantity" : 1
            },
            {
                "ingredient" : "Citron Vert",
                "quantity" : 5
            },
            {
                "ingredient" : "Lait de Coco",
                "quantity" : 100,
                "unit" : "ml"
            },
        ],
        "time": 60,
        "description": "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond).",
        "appliance": "Saladier",
        "ustensils": ["presse citron"]
    },
    {
        "id": 3,
        "name": "Poulet coco réunionnais",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poulet",
                "quantity" : 1
            },
            {
                "ingredient": "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity" : 25,
                "unit" : "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity" : 1
            },
            {
                "ingredient": "Poivron rouge",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 1,
               "unit": "cuillères à soupe"
            }
        ],
        "time": 80,
        "description": "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
        "appliance": "Cocotte",
        "ustensils": ["couteau"]
    }
]

let tags = ["Lait de coco", "Poivron rouge"]
let result = []
tags.forEach(tag => result.push(recipes.filter(recipe => hasIngredient(recipe, tag))))

function hasIngredient(recipe, tag) {
    console.log(recipe)
    let result = false;
    recipe.ingredients.forEach(object => {
        
        console.log(`%cingredient : ${object.ingredient}`, 'color: #3498db')
        
        if (object.ingredient === tag) {
            console.log(`%c${tag} === ${object.ingredient}`, 'color: #2ecc71', true)
            result = true
        } else {
            console.log(`%ctag : ${tag}`,'color: #e74c3c')
        }
    })
    return result
}

console.log (result)

/*

Pour chaque tag du tableau tags
Ajouter au tableau result le résultat de la fonction map sur le tabeau recipes
Pour chaque recette du tableau recipes, la fonction map appelle la fonction filter sur chaque objet du tableau
Pour chaque objet, on vérifie si la valeur associée à la clé ingrédient est égale à la valeur du tag.

> Si la condition est vérifiée, filter renvoie l'objet

Ce qu'on cherche à obtenir : la recette complète, pas uniquement l'objet qui contient l'ingrédient.

*/

/* https://stackoverflow.com/questions/38375646/filtering-array-of-objects-with-arrays-based-on-nested-value */


let arrayOfElements = 
    [
        {
           "name": "a",
           "subElements": 
           [
             {"surname": 1},
             {"surname": 2}
           ]
        },
        {
           "name": "b",
           "subElements": 
           [
             {"surname": 3},
             {"surname": 1}
           ]
        },
        {
           "name": "c",
           "subElements": 
           [
             {"surname": 2},
             {"surname": 5}
           ]
        }
    ];


let filteredArray = arrayOfElements.map((element) => {
    return {...element, subElements: element.subElements.filter((subElement) => subElement.surname === 1)}
    })



const inputToSquare = [1, 2, 3, 4, 5]
const squaredResult = inputToSquare.map(item => item ** 2)

const inputToFilter = [1, -4, 12, 0, -3, 29, -150]
const resultSumOfPositive = inputToFilter.filter(number => number > 0).reduce((a, b) => a + b)


const inputToMeanMedian = [12, 46, 32, 64];
const mean = inputToMeanMedian.reduce((a, b) => (a + b) ) / inputToMeanMedian.length
inputToMeanMedian.sort((a, b) => a - b)
const meanMedian = inputToMeanMedian.reduce((accumulator, currentValue, index, array) => {
    accumulator.mean += currentValue / array.length;
    if(Math.abs(index +1 - array.length / 2 ) < 1 ) {
        accumulator.median = currentValue
    }
    return accumulator;
}, {mean: 0, median: 0})