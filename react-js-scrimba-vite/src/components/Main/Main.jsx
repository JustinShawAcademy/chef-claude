import { useState } from 'react'
import styles from './Main.module.css'

import { getRecipeFromMistral } from '../../ai.js'

import Container from '../Container'
import IngredientsList from '../IngredientsList/IngredientsList'
import ClaudeRecipe from '../ClaudeRecipe/ClaudeRecipe'

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [claudeRecipe, setClaudeRecipe] = useState()

    function addIngredient(formData) {
        const submittedIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [
            ...prevIngredients,
            submittedIngredient
        ])
    }

    // write about async more in readme
    async function getClaudeRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setClaudeRecipe(recipeMarkdown) 
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
                    toggleClaudeRecipe={getClaudeRecipe}
                />}

                {claudeRecipe &&
                <ClaudeRecipe 
                    claudeRecipe={claudeRecipe}
                />}

            </Container>
        </main>
    )
}