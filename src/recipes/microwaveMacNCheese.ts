import { IRecipe } from "./recipe";
import macNCheese from "./microwaveMacNCheese.jpg";

export const microwaveMacNCheese:IRecipe = {
    name: "Grandma Sherry's Microwave Mac & Cheese",
    picture: macNCheese,
    ingredients: [
        ["2", "boxes", "Kraft Mac & Cheese"],
        ["2 2/3", "cups", "water"],
        ["1", "stick", "butter or margarine"],
        ["1/4", "cup", "milk"],
    ],
    steps: [
        "Combine macaroni and water in a large microwave safe dish",
        "Microwave on high until water is gone and macaroni is sticky (about 8 minutes), stirring every minute or so",
        "Add butter, milk, and cheese sauce mix (1 1/2 to 2 packets) and mix well",
    ]
}