# WDI-Project-1

First Project

Game

Gridlocked

This is a 1 player game.

##On the page:

- title
- 3 buttons - start, instructions & new game
- timer
- 4 x 4
- question display
- 3 answer buttons, which appear when player selects a square

![Main](./images/image1.png)

Before game play.

##Game play:

- the player can click on the instructions button to reveal game instructions.
- they then click start to begin the game.
- the player will click on a square and the question will appear in the display to the side of the grid.
- the square will change colour to show it has been selected.
- the player will then be able to pick 1 of 3 options by clicking the relevant button
- if the player enters the correct answer, the square will change colour and the player can move on to another square.
- if the player enters the incorrect answer, the square will go back to the original colour and the player can try again/do another square.
- the game ends when the timer runs out. The score will be displayed.
- if the player correctly answers all 16 squares within the 30 seconds, the game will end and the timer will stop and score will be displayed.
- the object of the game is to get as many questions correct as possible, turning all the squares a different colour.
- at the end of game play the new game button can be clicked to begin a new game.

![Gameplay](./images/image2.png)

During game play.

![Finish](./images/image3.png)

After game completion.

##Technologies used:

- In this project I have used HTML, CSS, Javascript and JQuery.

##Approach taken:

- Created a Trello board outlining what needed to be done, and depending on their importance, the order in which they needed to be executed.
- I then created all the (empty) files and directories within my project folder.
- Wrote pseudo code.
- I then created a basic HTML structure, to which I added some simple CSS styling, so as to create something simple to look at within the browser.
- I then concentrated on the javascript.
- I initially wrote my code in javascript, but later changed much of it to JQuery.
- First I created all the event listeners and global variables.
- I then built functions around these to create the game play.
- Once this was all done, I went back to the CSS styling to perfect the layout of the game.

##Functions used:

- getInstructions
- updateTimer
- getEquation
- generateRandomAnswer
- shuffleAnswers
- chooseAnswer
- newGame

##If I had more time:

- I would have created 3 levels of game play of differing degrees of difficulty.
- Create a high score feature that updates when the player scores higher than the previous turn.
- Add sound.
- Refacter the code - make it dryer.

##Initial ideas:

- Originally I was going to do a picture quiz based on a theme. But I then realised that once you have played it once, you're probably going to remember the answers if you play it again. 
- So then came the idea of a mathamatical quiz, where the questions are completely random and two of the answers are also random. This means that you can play as many times as you like.

##Challenges:

- I found creating the timer function very challenging. Even more so was getting the timer to stop if the player answered all 16 questions correctly.
- Generating random answers that were close to the correct answer was also a challenge. It took quite a bit of playing around with the formulas to get it to what it is now. It's still not perfect of course!