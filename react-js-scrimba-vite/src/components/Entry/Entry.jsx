import styles from './Entry.module.css'
import locationIcon from "../../assets/location-icon.svg"

export default function Entry(props) {
    return (
        <article className={styles.journalEntry}>
            <div className={styles.mainImageContainer}>
                <img className={styles.mainImage} src={props.img.src} alt={props.img.alt} />
            </div>
            <div className={styles.textContainer}>
                <div>
                    <img className={styles.locationIcon} src={locationIcon} alt="location-icon"/>
                    <span className={styles.countryName}>{props.country}</span>
                    <a className={styles.googleMaps} href={props.googleMapsLink}>View on Google Maps</a>
                    <h2 className={styles.interestName}>{props.title}</h2>
                </div>
                <div>
                    <p className={styles.date}>{props.dates}</p>
                    <p className={styles.text}>{props.text}</p>
                </div>
            </div>
        </article>
    )
}