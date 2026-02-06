import { useState } from 'react'
import styles from './Main.module.css'

import Container from '../Container'

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    function addIngredient(formData) {
        const submittedIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [
            ...prevIngredients,
            submittedIngredient
        ])
    }

    return (
        <main className={styles.mainContainer}>
            <Container>
                <form className={styles.addIngredientForm} action={addIngredient}>
                    <input
                        type="text"
                        name="ingredient"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                    />
                    <button>Add ingredient</button>
                </form>
                {ingredients.length > 0 &&
                <section>
                    <h2 className={styles.ingredientHandTitle}>Ingredients on hand: </h2>
                    <ul className={styles.ingredientsList}>
                        {ingredientsListItems}
                    </ul>
                    <div className={styles.getRecipeContainer}>
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>
                </section>}
            </Container>
        </main>
    )
}