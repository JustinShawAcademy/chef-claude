import styles from './Main.module.css'

export default function Main() {
    return (
        <main className={styles.mainContainer}>
            <form className={styles.addIngredientForm}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}