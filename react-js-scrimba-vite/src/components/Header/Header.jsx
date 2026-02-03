import styles from './Header.module.css'
import globalIcon from '../../assets/Globe.svg'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src={globalIcon} className={styles.headerIcon} alt="header-icon" />
            <span className={styles.headerText}>my travel journal.</span>
        </header>
    )
}