/*
 1. App should use JavaScript, HTML, and CSS
2. The page should display a grid of buttons containing numbers from 1-25
3. The initial class name of any button containing numbers must be “tile” with a hex
code of rgb(27, 62, 119) and this color may NOT be used anywhere else in the
exercise.
4. Numbers should have a randomized order
5. When a user clicks a number, if it is the next number in order, then its background
turns a different color for the remainder of the test. If it is the wrong number,
nothing happens
6. Once all numbers have been clicked in order, display a win message with the text
“You Win!”.
7. Include a button to start a new game at any time with the text content “Start!”.
8. Hitting the “Start!” button defaults to starting a game containing 25 numbers and
clicking the start button on subsequent clicks defaults to starting a game
containing 25 numbers and will shuffle the numbers and restart the game. No
other buttons to start a game are allowed.
*/ 

/////// TONY

let startButton = document.getElementById("buttonStart")
let allButtons = document.getElementById("buttons")
let numbersFoundLabel = document.getElementById("numbers-found")
let winLabel = document.getElementById("win")

// The amount of grid spots
var gridSpots = document.getElementById('tileNumberInput').value;

//need to make a loop adding numbers into an array up to max number 
//should be like while i<max array.push i
//rng to select a number from the array that is UNIQUE
//maybe just need to guarantee the array value is unique? so if array[random] = array[random] then jump to top
/* since we are doing input max we need to have the HTML grid be of variable height/width, 
could maybe do width=sqrt(max) or maybe set it a rectangle? */
//maybe we could remove it from the array in the same function we are pushing it to html?

// Generate a random number from 0 to y
let RandomRange = (y) => {
    return Math.floor(Math.random() * y);
}

// Check if value exists in an array
let ValueInArray = (v, arr) => {
    // Set the return value
    let ret = false
    arr.forEach(x => {
        if (x == v) {
            ret = true; // Exit the loop
        }
    });

    return ret;
}

// Get button by number
let GetButtonByNumber = (num) => {
    for (let index = 0; index < allButtons.children.length; index++) {
        const element = allButtons.children[index];
        if (String(element.textContent) == String(num)) {
            return element
        }
    }
    return null
}

// Generate the button div's
let GenerateButtons = () => {
    var spots = []
    // Loop through each button slot
    for (let i = 0; i < gridSpots; i++) {
        var x = RandomRange(gridSpots);
        while (ValueInArray(x, spots)) {
           x = RandomRange(gridSpots)
        }
        spots.push(x)
        allButtons.innerHTML += "<button class= \"tile\">" + (x+1) + "</button>"
    }
}

// Generate the listeners
let GenerateListeners = () => {
    for (let index = 0; index < allButtons.children.length; index++) {
        const element = allButtons.children[index];

        element.addEventListener("click", () => {
            var x = Number(element.textContent)
            if (selectedTileIsCorrect(x))
            {
                correctTileClassChanger(element);
                if (gameHasEnded(x))
                {
                    displayWinMessage();
                }   
            }})
        
    }

}

// Clear the game
let ClearGame = () => {
    allButtons.innerHTML = ""
}

// Reload the game
let ReloadGame = () => {
    winLabel.innerText = ""
    gridSpots = document.getElementById('tileNumberInput').value;
    ClearGame()
    GenerateButtons()
    GenerateListeners()
}

/* put the event listener for max number and submit button here and function call */

/* end of event listener calls */

////////////////////////////////////////////////////////////////////////////////////////////////
//lucas will do this one 
/* put the rng array and random loop caller here */ 
// math.rand(array.length) - 1? 
//loop while array.length>0 then put number in html and strip from array


/* end of the rng and loop array */

/////////////////////////////////////////////////////////////////////////////////////////////////////

//set up if color statement if(number click = previous + 1){change color}

// end of color changer

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Start the game
ReloadGame()
startButton.addEventListener("click", ReloadGame)

function correctTileClassChanger(element) {
    element.className = "selected-tile";
}

function selectedTileIsCorrect(x) {
    return x == 1 || GetButtonByNumber(x - 1).className == "selected-tile";
}

function displayWinMessage() {
    winLabel.innerText = "YOU WIN!";
}

function gameHasEnded(x) {
    return x == allButtons.children.length;
}
