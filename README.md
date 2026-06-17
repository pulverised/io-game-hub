# 🎮 IO Game Hub

A modern browser-based game directory that allows users to browse and play popular .io games from one central website.

The project uses:

- HTML5
- CSS3
- JavaScript
- JSON game database
- GitHub Pages hosting


---

# Features

## Current Features

✅ Dark gaming interface  
✅ Game cards  
✅ Search system  
✅ Category filtering  
✅ Game launcher page  
✅ Embedded game player  
✅ Fullscreen mode  
✅ Recently played games  
✅ Mobile responsive design  


---

# Project Structure


```
io-game-hub/

│
├── index.html
├── play.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── games.js
│   └── player.js
│
├── data/
│   └── games.json
│
└── assets/
    └── images/

```


---

# Installation

## 1. Download the project

Clone the repository:


```bash
git clone https://github.com/YOUR_USERNAME/io-game-hub.git
```


Enter the folder:


```bash
cd io-game-hub
```



---

# Running Locally


Because the website loads JSON files, it is recommended to use a local server.


## Option 1: VS Code Live Server


Install:

```
Live Server Extension
```


Then:

```
Right click index.html
↓
Open with Live Server
```



---

## Option 2: Python Server


Run:


```bash
python -m http.server 8000
```


Open:


```
http://localhost:8000
```



---

# Adding New Games


Open:


```
data/games.json
```


Add:


```json
{
    "id":"newgame",

    "title":"Game Name",

    "description":"Game description",

    "category":"Arcade",

    "thumbnail":"assets/images/game.png",

    "url":"https://example.com"
}
```


The game will automatically appear on the homepage.



---

# Adding Images


Place images inside:


```
assets/images/
```


Example:


```
assets/images/newgame.png
```


Then reference:


```json
"thumbnail":"assets/images/newgame.png"
```



---

# GitHub Deployment

## Step 1

Create a new repository on GitHub.


Example:


```
io-game-hub
```



---

## Step 2

Open your project folder:


```bash
git init
```


Add files:


```bash
git add .
```


Commit:


```bash
git commit -m "Initial release"
```



Connect repository:


```bash
git remote add origin https://github.com/YOUR_USERNAME/io-game-hub.git
```



Upload:


```bash
git branch -M main

git push -u origin main
```



---

# Enable GitHub Pages


Go to:


```
Repository
↓
Settings
↓
Pages
```


Under:


```
Build and deployment
```


Choose:


```
Deploy from branch
```


Select:


```
main
/
root
```


Press:


```
Save
```



Your website will be available at:


```
https://YOUR_USERNAME.github.io/io-game-hub/
```



---

# Updating The Website


After changes:


```bash
git add .
git commit -m "Updated games"

git push
```


GitHub Pages automatically updates.



---

# Embedding Limitations


Some websites prevent iframe embedding.


Example error:


```
Refused to display in a frame
```


This happens because the game owner has disabled external embedding.



Solutions:


1. Use the official game URL:


```
https://gamewebsite.com
```


2. Add a launch button instead of iframe.


3. Ask the developer for permission.



---

# Legal Notice


This project does not host any games.

Games remain property of their original creators.


Before adding games:


✅ Check the game's terms of service  
✅ Confirm iframe permission  
✅ Keep developer credits  
✅ Remove content if requested  


Do not:


❌ Download and redistribute games  
❌ Modify third-party games  
❌ Remove advertisements  
❌ Claim ownership of games  


---

# Future Improvements


Possible upgrades:


## Backend

- User accounts
- Game ratings
- Comments
- Admin dashboard


## Database

Replace JSON with:


- Firebase
- MongoDB
- Supabase


## Extra Features

- Favorites
- Leaderboards
- User profiles
- Game requests
- Analytics



---

# License

This project only contains original website code.

Third-party games belong to their respective owners.
