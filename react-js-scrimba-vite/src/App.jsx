import Header from "./components/Header/Header.jsx"
import Entry from "./components/Entry/Entry.jsx"
import data from "./data/data.js"

export default function App() {

    const entryElemnts = data.map((entry) => {
        return <Entry 
                    img = {{
                        src: entry.img.src,
                        alt: entry.img.alt
                    }}
                    title = {entry.title}
                    country = {entry.country}
                    googleMapsLink = {entry.googleMapsLink}
                    dates = {entry.dates}
                    text = {entry.text}
                />
    }) 

    return (
        <>
            <Header />
            {entryElemnts}
        </>
    )
}