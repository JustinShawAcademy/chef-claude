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
                
                <section>
                    <h2>Ingredients on hand: </h2>
                    <ul>
                        {ingredientsListItems}
                    </ul>
                </section>
            </Container>
        </main>
    )
}