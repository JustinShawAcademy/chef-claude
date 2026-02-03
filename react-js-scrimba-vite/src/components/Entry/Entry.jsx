import styles from './Entry.module.css'
import locationIcon from "../../assets/location-icon.svg"

export default function Entry() {
    return (
        <article className={styles.journalEntry}>
            <div className={styles.mainImageContainer}>
                <img className={styles.mainImage} src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount-fugi" />
            </div>
            <div className={styles.textContainer}>
                <div>
                    <img className={styles.locationIcon} src={locationIcon} alt="location-icon"/>
                    <span className={styles.countryName}>Japan</span>
                    <a className={styles.googleMaps} href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                    <h2 className={styles.interestName}>Mount Fuji</h2>
                </div>
                <div>
                    <p className={styles.date}>12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className={styles.text}>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </article>
    )
}