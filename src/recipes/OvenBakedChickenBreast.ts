import { IRecipe } from "./recipe";
import chicken from "./oven-baked-chicken-breast.jpg";

export const ovenBakedChickenBreast:IRecipe = {
    name: "Oven Baked Chicken Breast",
    picture: chicken,
    ingredients: [
        ["10 - 12" , "", "large chicken breasts"],
        ["9", "tbsp", "brown sugar"],
        ["6", "tsp", "paprika"],
        ["6", "tsp", "dried oregano or thyme"],
        ["1 1/2", "tsp", "garlic powder"],
        ["2", "tsp", "salt"],
        ["2", "tsp", "black pepper"],
        ["", "", "olive oil"],
        ["", "", "fresh parsley", "chopped"],
    ],
    steps: [
        "Preheat the oven to 425",
        "Mix all of the seasoning",
        "Line two baking trays with aluminum foil",
        "Place chicken upside down on baking trays",
        "Rub chicken with olive oil",
        "Sprinkle with seasoning",
        "Flip chicken",
        "Rub chicken with olive oil",
        "Sprinkle generously with seasoning",
        "Bake 20 minutes or until golden brown",
        "Garnish with fresh parsley and serve"
    ]
}