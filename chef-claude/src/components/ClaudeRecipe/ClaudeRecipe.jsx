import styles from './ClaudeRecipe.module.css'

import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    return (
        <section className={styles.suggestedRecipeContainer} aria-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>
                {props.claudeRecipe}
            </ReactMarkdown>
        </section>

    )
}