# Valentine's Cinematic Experience

A romantic, interactive Valentine's Week website built with pure HTML, CSS, and JavaScript.

## Features

- 10 cinematic scenes covering Valentine's Week (Rose Day through Valentine's Day)
- Glassmorphism UI with "Midnight Romance" theme
- Falling chocolate catch mini-game
- Playful "No" button that runs away
- Hold-to-hug button with fill animation
- Hindi romantic messages with typewriter effect
- Background music with toggle
- Confetti and particle effects
- Mobile-friendly with touch support

## Folder Structure

```
valentine/
├── index.html          # Main HTML file (includes inline JS)
├── css/
│   └── style.css       # Styles and animations
├── js/
│   └── main.js         # Additional interactive logic
├── assets/
│   ├── rose.jpg
│   ├── rose_for_background.jpg
│   ├── dimand_ring.jpg
│   ├── chocolate.jpg
│   ├── teddybear.jpg
│   └── lips.jpg
├── audio/
│   └── romantic-bg.mp3 # Background music
└── README.md
```

## Live Demo

Hosted on GitHub Pages: `https://<username>.github.io/<repo-name>`

## Deployment (GitHub Pages)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://<username>.github.io/<repo-name>`

## Customization

### Change the recipient name
Search and replace "Anamika" in `index.html`

### Change final messages
Edit the `finalMessages` array in the `<script>` section of `index.html`

### Change theme colors
Modify CSS variables in `index.html`:
```css
:root {
    --primary-glow: #ff0a54;
    --accent-gold: #ffd700;
    --glass-bg: rgba(20, 10, 20, 0.6);
    --glass-border: rgba(255, 255, 255, 0.1);
}
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- Works best in fullscreen (F11 on desktop)
- Enable sound for the full experience
- No external dependencies — pure HTML/CSS/JS
