import { useLocalStorage } from 'unstateless';
import styles from './App.module.scss';
import { recipes } from './recipes';
import missingImage from "./recipes/missing-image.webp";
import { IRecipe } from './recipes/recipe';

const useSelectedRecipe = useLocalStorage.object<IRecipe>("selectedRecipe", {} as IRecipe);

const Recipe = () => {
  const [recipe, setSelectedRecipe] = useSelectedRecipe();
  const goToMenu = () => {setSelectedRecipe({} as IRecipe);}

  return !!recipe.name && <div className={styles.recipe}>
    <a href="#" onClick={goToMenu}>Return to menu</a><br/>
    <h1>{recipe.name}</h1>

    <img src={recipe.picture || missingImage} alt={recipe.name} />

    <h2>Ingredients</h2>
    <table className={styles.ingredientList}>
      <tbody>
        {recipe.ingredients.map((ingredient, i) => <tr key={i} className={styles.ingredient}>
          <td>{ingredient[0]}</td><td>{ingredient[1]}</td> <th>{ingredient[2]}</th> <td><em>{ingredient[3]}</em></td>
        </tr>)}
      </tbody>
    </table>

    <h2>Steps</h2>
    <ol className={styles.stepList}>
      {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
    </ol>
  </div>;
}

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useSelectedRecipe();
  const selectRecipe = (recipe:IRecipe) => () => {setSelectedRecipe(recipe);}

  return <>
    {!selectedRecipe.name && <>
      <h1>Wittrock Family Recipes</h1>
      <ul className={styles.recipeList}>
        {recipes.map((recipe, i) => <li key={i} className={styles.recipeListItem} onClick={selectRecipe(recipe)}>
          <img src={recipe.picture || missingImage} alt={recipe.name} />
          <h2>{recipe.name}</h2>
        </li>)}
      </ul>
    </>}
    <Recipe />
  </>;
}

export default App;
