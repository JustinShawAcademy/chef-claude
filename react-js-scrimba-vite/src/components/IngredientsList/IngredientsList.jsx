import styles from './IngredientsList.module.css'

export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    return (
        <section>
            <h2 className={styles.ingredientHandTitle}>Ingredients on hand: </h2>
            <ul className={styles.ingredientsList}>
                {ingredientsListItems}
            </ul>
            {props.ingredients.length >= 3 &&
            <div className={styles.getRecipeContainer}>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.toggleRecipeShown}>Get a recipe</button>
            </div>}
        </section>
    )
}