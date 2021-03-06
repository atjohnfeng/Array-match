# Array Match #

[ArrayMatch is live here!](https://atjohnfeng.github.io/Array-match/)

## Background: ##

**Array Match** is an educational puzzle game utilizing arrays and Javascript 
array methods. Players will manipulate a given board (2D Array) in order to 
solve puzzles by combining cards that include numbers and array methods. There 
are two types of cards which a player may use:

1) Method Cards (ie. push, unshift, etc.)
2) Argument Cards (ie. 1, 2, 3, etc.)

By combining method and argument cards, a player will be able to manipulate the 
board and their hand. Combining a method and argument card will cause the method
to execute with the argument card passed in. Cards like pop and shift will allow
players to keep the card that was removed from the board, creating a more unique
and complicated layer to later levels.

## Functionality and MVPs ##

In **Array Match**, players will be able to:

1) Combine method and argument cards to manipulate the board and solve puzzles.  
![Cards](/level.gif)

By adding an event listener to the canvas object, the user can select cards based on mouse position upon click by checking whether the mouse position is within a card's coordinates.  
```
canvas.addEventListener('click', function (event) {
    let pos = grabMousePosition(canvas, event);
    cards.paramCards.forEach((card) => {
        if (isInCard(pos, card)) {
            selectCard(card);
        }
    });
    cards.funcCards.forEach((card) => {
        if (isInCard(pos, card)) {
            selectCard(card);
        }
    });
}, false);
```

2) Restart any level in which the player made a mistake.  
![Restart](/restart.gif)  

3) Select any level.  
![Level Select](/levelselect.gif)  

4) View instructions for cards.  
![Instructions](/instructions.gif)  

5) Keep their current level upon closing the browser, or refreshing the page.  

By utilizing Window.localStorage, progress is saved as a key in the browser so the user may pick back up at any level they left off upon leaving the page or refreshing the browser.
```
function getCurrentLevel() {
    switch (localStorage['currentLevel']) {
        case 'tutorial':
            return levels.tutorial;
    }
}
```

In addition, this project will include:

1) An instructions guide on how to play the game.
2) A production README.

## Wireframes ##

![Wireframe](/wireframe.png)

* Nav Links will link to Github repo and LinkedIn.
* Players will be able click cards to select them
* Players will be able to navigate through levels with
Level Select.
* A player may restart a level at any time.

## Technologies, Libraries, and APIs ##

* Canvas API to render the game board and hand.
* Webpack and Babel to bundle and transpile code.
* npm to manage project dependancies.

## Implementation Timeline ##

1) **Labor Day Weekend**: Code out HTML and CSS elements.
2) **Monday**: Create board and card logic.
3) **Tuesday**: Implement and design levels.
4) **Wednesday**: Complete implementation of user controls, and interface design. 
Squash bugs.
5) **Thursday**: Deploy to Github pages, and rewrite proposal as production README.

## Bonus Features ##

* Additional bonus levels.
* Additional animations and sound effects.