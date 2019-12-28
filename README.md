# Hangman Game

This is the single player Hangman game. The player is given a random word and has 9 chances to guess the word one letter at a time.

**Link to live version - [Hangman](https://adrian80z.github.io/CI-Milestone-2/)**

#### Rules to play the game
If you have not played the game before, here are the rules:
- Depends on your game dificulty selection (easy, medium, hard) you will be provided with a random, unknown word, which has to be guessed.
- Select a letter of the alphabet, which you think might be present.
- If the letter is present in the word, continue to guess the rest of the letters. 
- If the letter isn't present in the word, one part of a gibbet is draw.
- Player has 9 chances to guess the word.
- Lost all chances will result in hanging the man ;).

## UX

The main goal of this project is to have fun while playing game. Game is for everyone who wants to stimulate theirs brain cells ;)

Game is written in pure Vanilla JavaScript without using any helping libraries. Layout is very simple and clean. 

#### User Stories
- As user I want to have fun playing game
- As a user I want to have choice between difficulty levels
- As a user I want to have info about game rules

#### Wireframes
* [Mobile Layout](https://github.com/adrian80z/CI-Milestone-2/blob/master/Wireframes/Mobile.png)
* [Desktop Layaut](https://github.com/adrian80z/CI-Milestone-2/blob/master/Wireframes/Desktop.png)

#### Mockups
* [Mobile Layout](https://github.com/adrian80z/CI-Milestone-2/tree/master/Mockups/mobile)
* [Desktop Layaut](https://github.com/adrian80z/CI-Milestone-2/tree/master/Mockups/desktop)

## Features

The game navigation is easy and consistent. 
Index page has Start Game and How to Play menu buttons. 
Clicking How to Play button cause that modal window appers with information about game. To close modal we can use either x symbol placed on top right corner above game title or click anywhere outside the modal.
Clicking Start Game button cause that four other menu buttons appears (hidden by default) while those two (Start Game and How to Play) become hidden. Those are 3 difficulty game levels (easy, medium, hard) and back to Main Menu button. Clicking on that button cause that previous two are showed again and current level buttons are hidden.
Clicking one of the three buttons (easy, medium, hard) moving player to gameboard.html page where the game begins. Each button is a link with apropriate parameter attached to url that passing user choice to script where apropriate function assign that parameter to 


Hyphens are displayed on the screen equal to the length of the word chosen randomly from a list. Player can guess a letter by clicking on one of the alphabet letters displayed on screen. If the letter is present in the word, the hyphens are replaced with the letter at the right position. If the letter occurs more than once in the word, each occurence of the letter is replaced for a correct guess. A letter can be guessed only once and for each wrong guess, the chances are decreased by 1 and gibbet image is drawn on the canvas part by part till all the nine chances are used up.

#### Existing Features
- Feedback on the screen how many turns left after inncorrect guess
- Image is drew step-by-step on canvas element
- Clicked letter change background color depends on correct/incorrect guess
- Reload button 
- Home button
- Different sounds effects after clicking letter depends on correct/incorrect guess (or win/game over game)

#### Features Left to Implement
- Different categories
- Hints
- Multiplayer
- Timer
- Score points
- Possibility to save results

## Technologies used

- **[JavaScript](https://en.wikipedia.org/wiki/JavaScript)** - used to program the behavior of Web pages.
- **[HTML5](https://en.wikipedia.org/wiki/HTML5)** - standard markup language for creating Web pages.
- **[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)** - used to define styles for Web pages, including the design, layout and variations in display for different devices and screen sizes.
- **[VS Code](https://code.visualstudio.com/)** - code editor redefined and optimized for building and debugging modern web and cloud applications.
- **[GitHub](https://github.com/)** - provides hosting for software development version control using Git.
- **[Git](https://git-scm.com/)** - version-control system for tracking changes in source code during software development.
- **[Google Fonts](https://fonts.google.com/)** - library of free licensed fonts, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS ('_IBM Plex Mono_' monospace font used in this project).

## Testing

For the testing was used following tools:
- **[Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)** - a set web authoring and debugging tools built into Google Chrome.
- **[JSLint](https://jslint.com/)** - a static code analysis tool used for checking if JavaScript source code complies with coding rules
- **[CSS Validation](https://jigsaw.w3.org/css-validator/)** -service helps to check validity of Cascading Style Sheets (CSS).
- **[Markup Validation](https://validator.w3.org/)** - helps check the validity of Web documents.

All validation tests passed: no errors in the DevTools console. CSS, HTML and JavaScript have correct syntax as well (no errors found in files during online validation process).

The project was tested across 4 browsers, Google Chrome, Mozilla Firefox, Edge, Opera. I used the Dev Tools in above browsers to check for compatibility issues on mobile devices. The project looks consistent and responsive on modern smartphones. Project also has been tested on physical devices such as Galaxy A20e and HTC One S.

Manual testing was performed by clicking every element on page which can be clicked.

index.html page
1. Click on Play Game button. Four buttons shows on screen (Easy, Medium, Hard and Main Menu). Current two are hide (Play Game, How To Play).
1.1 Click on Easy button moves to gameboard.html page.
1.2 Click on Medium button moves to gameboard. html page.
1.3 Click on Hard button moves to gameboard.html page.
1.4 Click to Main Menu button. Current four buttons are hide and previous two menu button are shown.
2. Click on How to Play button - modal window appears on screen
2.1 Click X letter on top right corner to close modal
2.2 Click any were outside modal close it.


gameboard.html page
1. Click on reload icon refresh page.
2. Click on home icon moves to index.html
3. Click on one of alphabet letters.
- If letter is in guessed word - background is changed to green. Sound is played. Letter and every its occurrence  is revealed on guessing word.
-If letter is not in guessed word - background is changed to red. Sound is played. One part of gibbet is drown on canvas. Counter shows turns is decreased by one.
4. Win/Game Over menu buttons:
4.1 Click Play Again. Reload page and game starts.
4.2 Click Main Menu moves to index.html page.

All links are working and pointing to correct place. Functions performing correct actions also. Project looks and works well on different browsers and screen sizes.

## Deployment
The project was developed, committed to git and pushed to GitHub using Visual Studio Code IDE. 
There are no differences between the deployed version and the development version.

#### GitHub Pages
This project was deployed to a hosting platform via GitHub Pages from the **_master branch_**.

To achieve this the following steps were taken:
1.	Go to the repository on GitHub: **https://github.com/adrian80z/CI-Milestone-2**
2.	Go to Settings (last tab under the Project title).
3.	Scroll and select GitHub Pages.
4.	From the Source dropdown select the **_master branch_**.
5.	The website being deployed and can be found at: **https://adrian80z.github.io/CI-Milestone-2/**

#### Local
To run this project locally:
1.	Go to the repository on GitHub: **https://github.com/adrian80z/CI-Milestone-2**
2.	Under the repository name, click "**_Clone or download_**".
3.	In the **_Clone with HTTPS_** section, copy the URL for the repository.
4.	In local IDE open Git Bash.
5.	Change the working directory to the location where you want the cloned directory to be made.
6.	Type `git clone`, and then paste the URL you copied in Step 3.
7.	Press Enter. Local clone will be created.

## Credits

#### Acknowledgements
 -	I received inspiration for this project through internet research. I visited websites such as http://joereisigl.com/joereisigl2/nmix4110/finalProject/, https://codepen.io/cathydutton/pen/ldazc, http://cis-linux2.temple.edu:8080/sp17_3344_1_tue51138/Tutorial/hangmanIndex.html and watched few youtube tutorials, which helped me to put all pieces together.
 
 #### Media
- Background texture was created by myself using Photoshop. 
- Home and reload icon were downloaded from https://icons8.com/icons/
- The audio sounds used in this site were obtained from http://www.pachd.com/sounds.html
- The game words was taken from the https://www.thegamegal.com/printables/

#### Code
-	Some of the JavaScript code was taken from the https://www.w3schools.com/
Code was used to create modal window( script placed in body section in index.html) appearing on the Homepage. All css styles was created by myself except some styling parts for mentioned above modal window.
- Part of the code for drawing hangman on canvas was taken from http://joereisigl.com/joereisigl2/nmix4110/finalProject/ and was modified to adjusted to needs.
