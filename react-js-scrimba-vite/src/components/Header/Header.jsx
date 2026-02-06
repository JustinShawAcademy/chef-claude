import styles from './Header.module.css'
import chefClaudeIcon from '../../assets/chef-claude-icon.svg'

import Container from '../Container'

export default function Header() {
    return (
        <header className={styles.headerOuter}>
            <Container>
                <div className={styles.headerContainer}>
                    <img className={styles.headerImage} src={chefClaudeIcon}/>
                    <h1 className={styles.headerTitle}>Chef Claude</h1>
                </div>
            </Container>
        </header>
    )
}