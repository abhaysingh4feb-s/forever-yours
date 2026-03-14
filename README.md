# Valentine's Cinematic Experience for Anamika

A romantic, cinematic interactive website built with pure HTML, CSS, and Vanilla JavaScript.

## Features

- Cinematic fade-in scenes with emotional transitions
- Floating hearts animation
- Playful "No" button that can't be clicked
- Confetti and heart burst effects
- Hindi romantic message with typing animation
- Ambient background music
- Mobile-first responsive design
- Movie-like ending sequence

## Folder Structure

```
valentine/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and animations
├── js/
│   └── main.js         # Interactive logic
├── audio/
│   └── romantic-bg.mp3 # (Add your own romantic music)
└── README.md           # This file
```

## Adding Background Music

1. Find a royalty-free romantic/ambient track
2. Name it `romantic-bg.mp3`
3. Place it in the `audio/` folder

Recommended sources for free romantic music:
- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)
- [Bensound](https://www.bensound.com/)

> Note: The experience includes a Web Audio API fallback that generates ambient tones if no MP3 is provided.

---

## Running Locally

### Option 1: Direct Browser (Simplest)
Simply double-click `index.html` to open in your browser.

> Note: Audio may not work with file:// protocol. Use a local server for full features.

### Option 2: Python HTTP Server
```bash
# Navigate to the valentine folder
cd valentine

# Python 3
python -m http.server 8000

# Python 2
python -SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

### Option 3: Node.js (npx serve)
```bash
# Install serve globally (one time)
npm install -g serve

# Run from valentine folder
serve .
```
Then open the URL shown (usually `http://localhost:3000`)

### Option 4: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## Sharing Publicly

### Option 1: Cloudflare Tunnel (Recommended)

Cloudflare Tunnel provides a secure, fast way to share your local site.

#### Step 1: Install Cloudflared

**Windows (with winget):**
```powershell
winget install cloudflare.cloudflared
```

**Windows (manual):**
Download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation

**macOS:**
```bash
brew install cloudflared
```

**Linux:**
```bash
# Debian/Ubuntu
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb -o cloudflared.deb
sudo dpkg -i cloudflared.deb
```

#### Step 2: Start Local Server
```bash
cd valentine
python -m http.server 8000
```

#### Step 3: Create Tunnel (in new terminal)
```bash
cloudflared tunnel --url http://localhost:8000
```

You'll get a public URL like: `https://random-words.trycloudflare.com`

Share this URL with Anamika!

---

### Option 2: ngrok

#### Step 1: Install ngrok

**Windows:**
```powershell
# Using Chocolatey
choco install ngrok

# Or download from: https://ngrok.com/download
```

**macOS:**
```bash
brew install ngrok
```

**Linux:**
```bash
snap install ngrok
```

#### Step 2: Sign Up (Free)
1. Go to https://ngrok.com/
2. Create a free account
3. Get your auth token from dashboard

#### Step 3: Configure
```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

#### Step 4: Start Local Server
```bash
cd valentine
python -m http.server 8000
```

#### Step 5: Create Tunnel
```bash
ngrok http 8000
```

You'll get a public URL like: `https://abc123.ngrok.io`

---

### Option 3: GitHub Pages (Permanent)

For a permanent URL:

1. Create a GitHub repository
2. Push the valentine folder contents
3. Go to Settings → Pages
4. Select "main" branch
5. Your site will be at: `https://yourusername.github.io/reponame`

---

## Quick Start Commands

```bash
# Navigate to project
cd valentine

# Start local server
python -m http.server 8000

# In a new terminal, create public tunnel
cloudflared tunnel --url http://localhost:8000
```

---

## Customization Tips

### Change the name
Search and replace "Anamika" in `index.html`

### Change the message
Edit `romanticMessage` in `js/main.js`

### Change colors
Modify CSS variables in `css/style.css`:
```css
:root {
    --pink-light: #ffd6e0;
    --pink-medium: #ff85a2;
    --pink-dark: #ff4d6d;
    --purple-light: #e0b0ff;
    --purple-medium: #9d4edd;
    --purple-dark: #7b2cbf;
}
```

### Change timing
Modify `CONFIG` object in `js/main.js`:
```javascript
const CONFIG = {
    scene1Duration: 6000,    // Time before question appears
    typingSpeed: 60,         // Typing animation speed
    heartInterval: 800,      // Heart spawn rate
};
```

---

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

---

## Notes

- Works best in fullscreen (F11 on desktop)
- Enable sound for the full experience
- Mobile optimized with touch interactions
- No external dependencies required

---

Made with love for that special someone.
