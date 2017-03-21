


//cards array holds all the possible cards
//cardsInPlay array will be built to represent the two cards the user selected
var cards = [
 {rank: 'queen',
  suit: 'hearts',
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/queen-of-diamonds.png"
},
  {
  	rank: 'king',
  	suit: "hearts",
  	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"

}
];



//Create the gameboard and the object to store the cards the user picked
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');



var twoCards = function(){
	if (cardsInPlay.length === 2){ 
			checkForMatch();
	}
}

//create function that stores all steps related to selecting, or flipping over, a card

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
    //code to display otherside of card
    this.setAttribute('src', cards[cardId].cardImage); 
	
	console.log("User flipped" + " " + cards[cardId].rank)
	//add the card the user selected to the array
	var cardId = cardsInPlay.push(cards[cardId].rank);
	//turn the card over and display to user
	twoCards();

	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	//var cardId = cardsInPlay.push(cards[cardId].suit);
	//var cardId = cardsInPlay.push(cards[cardId].cardImage);
	

}

//function to create the game board
var createBoard = function (){





    //loop through and add each card to the board
    for (var i = 0; i < cards.length; i++){
	//Create card element and store its variable in cardElement
	var cardElement = document.createElement('img');
	//Add src attribute for the cardElement that is the card image- cards will start face down
	cardElement.setAttribute('src', "images/back.png");
	//Add an attribute to set the cards id to be the index of the current element 
	cardElement.setAttribute('data-id', i);
	//Add a listener for a click event so that the cards respond when they are clicked 
	cardElement.addEventListener('click',flipCard);
	
	//Add the card to the game board
	gameBoard.appendChild(cardElement);	
	}
};

createBoard();


//Check if the cards match
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again")
	}
}	







 