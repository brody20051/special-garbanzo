# 🏁 Drag Strip Reaction Game

**Author:** Brody Hilliard
**Date:** 2026
**Live Game:** https://brody20051.github.io/special-garbanzo/
**Source Code:** https://github.com/brody20051/special-garbanzo

---

##  Project Overview

The **Drag Strip Reaction Game** is a single-page web game that simulates a real drag racing starting tree. The objective is to test the player’s reaction time by launching as quickly as possible after the green light appears.

This project was built using modern web development practices including semantic HTML, Bootstrap 5, modular JavaScript, and Web Storage for persistent data.

---

##  Game Objective

React as fast as possible when the green light appears.

* Click **Start Race**
* Watch the drag tree sequence
* Press **LAUNCH** as soon as the green light turns on
* Avoid launching early (red light penalty)

---

##  How to Play

1. Enter your **name** and select a **mode**:

   * **Sportsman Tree** (sequential yellow lights)
   * **Pro Tree** (all yellows at once)
2. Click **Start Race**
3. Wait for the lights to count down
4. Press the **LAUNCH** button as soon as the green light appears
5. Your reaction time will be displayed
6. Try to beat your best time!

---

##  Features

*  Real-time reaction timing using high-precision JavaScript
*  Two game modes: Pro Tree and Sportsman Tree
*  Best reaction time saved using localStorage
*  Player settings (name + difficulty) with validation
*  Animated drag strip background
*  Responsive design using Bootstrap 5
* Easter egg hidden in the console

---

##  Technologies Used

* HTML5 (semantic structure)
* CSS3 (custom styles, animations, variables)
* Bootstrap 5 (layout + components)
* JavaScript (ES Modules)
* Web Storage API (localStorage)
* Google Fonts

---

##  Code Explanation

```javascript
const reaction = (performance.now() - startTime) / 1000;
```

This line calculates the player’s reaction time using `performance.now()`, which provides high-precision timing. The difference between when the green light appears (`startTime`) and when the player presses the launch button is measured in milliseconds and converted into seconds.

---

##  Project Structure

```
/root
  index.html
  /scripts
    game.js
    storage.js
  /styles
    game.css
  /images
    dragstrip.jpg
    wireframe.png
  README.md
```

---

##  Wireframe

Included in the images folder

layout:

* Navbar at top
* Drag tree centered
* Controls below
* Score + settings underneath

---

##  Accessibility

* Semantic HTML elements (`header`, `main`, `footer`)
* Keyboard-accessible controls
* Sufficient color contrast for readability

--

---

##  Known Issues / Future Improvements

* Add sound effects (engine + tree)
* Add leaderboard or history tracking
* Improve mobile touch controls
* Add visual effects (smoke, camera shake)

---

##  Summary

This project demonstrates:

* Interactive UI design
* Event-driven JavaScript
* Accessibility best practices
* Clean, modular code structure

---

.
