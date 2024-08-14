type Amount = string;
type Unit = string;
type Ingredient = string;
type Preparation = string;

type FullIngredient = [Amount, Unit, Ingredient] | [Amount, Unit, Ingredient, Preparation];

export declare interface IRecipe {
    name: string;
    picture?: string;
    ingredients: FullIngredient[];
    steps: string[];
}
