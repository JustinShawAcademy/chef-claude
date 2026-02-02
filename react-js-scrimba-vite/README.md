When working on a react vite project, the file structure should look something like this:

```
index.html 
src
├── App.jsx
├── assets
├── components
│   └── Header
│       ├── Header.css
│       └── Header.jsx
├── index.css
└── main.jsx
```

## File Structure:
### `index.html` (entry point)
Unlike many other frameworks, Vite treats index.html as the actual entry point of your application.

- **what it does**: it provides the basic html shell. most importantly, it contains a `<div id="root"></div>` (where your react app will "live") and a `<script type="module" src="/src/main.jsx"></script>` tag that tells the browser to start running your javascript code.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=inter:wght@100..900&display=swap" rel="stylesheet">
    <title>react-js-scrimba-vite</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

### `scr` folder
this is the "source" folder. it contains all the code you write. everything inside here is processed, optimized, and bundled by vite when you build your project.

### `main.jsx` (bridge)
this file is the bridge between your html and your react code.

- **what it does**: it takes the top-level react component (`app.jsx`) and "mounts" it into the `div` with the id of `root` inside `index.html`. it usually also imports  global `index.css`. we do that in the code below

```jsx
import { createroot } from "react-dom/client"
import app from "./app.jsx"
import './index.css'

const root = createroot(document.getelementbyid("root"))
root.render(
    <app />
)
```

### `App.jsx` (root component)
Think of this as the "main container" of the website.

- **what it does**: It organizes the overall layout of your page. Instead of putting all your HTML here, you use it to call other components (like your `<Header />`). It acts as the parent of all other UI pieces.

```jsx
import Header from "./components/Header/Header.jsx"


export default function App() {
    return (
        <>
        <Header />
        </>
    )
}
```

### `index.css` (global styles)
- **what it does**: This file is for styles that should apply to the entire website.
  - Examples: CSS resets (removing default margins), setting the default font for the whole page, or defining background colors for the `<body>`.
  - Recall that this will be imported by `main.jsx`.