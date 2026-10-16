# Wallora — Wallpaper Collections

A fixed-screen three-column website. Each column scrolls independently while the page stays fitted to the viewport:

- Left: customer reviews and a dynamically calculated rating
- Middle: twelve wallpaper collections with format tags and previews
- Right: wallpaper bundle selector linking to the Wallora shop

## Files

- `index.html` — website structure
- `about.html` — About Us page
- `styles.css` — full responsive styling
- `script.js` — wallpaper collections, reviews, navigation, and order form handling

## Run locally

Open `index.html` in a browser, or serve the folder with any local web server.

Example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Payment setup

The shop button links to Buy Me a Coffee. Wallpaper previews include an email prompt and a delivery confirmation message; email delivery is not connected to a service yet.
