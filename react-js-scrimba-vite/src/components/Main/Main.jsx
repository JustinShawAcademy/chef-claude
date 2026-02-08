import { useState } from 'react'
import styles from './Main.module.css'

import Container from '../Container'
import IngredientsList from '../IngredientsList/IngredientsList'
import ClaudeRecipe from '../ClaudeRecipe/ClaudeRecipe'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    function addIngredient(formData) {
        const submittedIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [
            ...prevIngredients,
            submittedIngredient
        ])
    }

    function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
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
                <IngredientsList 
                    ingredients={ingredients}                    
                    toggleRecipeShown={toggleRecipeShown}
                />}

                {recipeShown && <ClaudeRecipe />}

            </Container>
        </main>
    )
}