
//View
shuffleDeck();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="cardGameContainer">
        <p>Table:</p>
        <div id="cardsOnTableContainer">${cardsOnTableView()}</div>
        <p>Hand:</p>
        <div id="cardsOnHandContainer">${cardsOnHandView()}</div>

        <button id="drawCardsButton" onclick="drawCardsToHand()">Draw Cards</button>
    </div>
    `;            
    // <div id="deckofCardsDiv">${createDeckOfCardsView()}</div>
}

function createDeckOfCardsView(){
    shuffleDeck();
    let cardsHTML = '';
    for (let card of model.deckOfCards) {
        cardsHTML += /*HTML*/`
        <div class="cardDiv">
            <div>${card.value}</div>
            <div>of</div>
            <div>${card.type}</div>
            <img src="${card.img}" class="cardImage">
        </div>
        `;
    }
    return cardsHTML;
}

function shuffleDeck(){
    for (let index = model.deckOfCards.length -1; index > 0; index--){
        const shuffledIndex = Math.floor(Math.random() * (index + 1));
        [model.deckOfCards[index], model.deckOfCards[shuffledIndex]] = [model.deckOfCards[shuffledIndex], model.deckOfCards[index]]; 
    };
    return model.deckOfCards;
}
function cardsOnHandView() {
    let cardsOnHandHTML = '';
    for (let card of model.cardsOnHand) {
        cardsOnHandHTML += /*HTML*/`
        <div class="cardDiv" class="singleCard"  onclick="addToTable(this)">
            <div>${card.value}</div>
            <div>of</div>
            <div>${card.type}</div>
            <img src="${card.img}" class="cardImage">
        </div>
        `;
    }
    return cardsOnHandHTML;
}

function cardsOnTableView() {
    let cardsOnTableHTML = '';
    for (let card of model.cardsOnTable) {
        cardsOnTableHTML += /*HTML*/`
        <div class="cardDiv" onclick="tableCardRules(this)">
            <div>${card.value}</div>
            <div>of</div>
            <div>${card.type}</div>
            <img src="${card.img}" class="cardImage">
        </div>
        `;
    }
    return cardsOnTableHTML;
}
