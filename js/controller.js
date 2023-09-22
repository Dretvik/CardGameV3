//Controller



function drawCardsToHand(){
    if (model.deckOfCards.length === 0 || model.deckOfCards.length < 0){
        updateView();
        return;
    }
    const maxDraw = Math.min(5, 5 - model.cardsOnHand.length);  // Beregner maks mengde kort på hånda.
    if (maxDraw > 0) {
        for (let index = 0; index < maxDraw; index++) {
            const drawCard = model.deckOfCards.pop();         // Fjerner de siste kortene i decket.
            model.cardsOnHand.push(drawCard);                 // Legger til kortene til hånda.
        }
        //console.log(model.cardsOnHand);
        updateView();
    }
}

function addToTable(cardDiv) {
    // Henter/får indexen til det kortet som ble trykket på i kortets forelder/parent
    const cardIndex = Array.from(cardDiv.parentNode.children).indexOf(cardDiv); 
    // Fanger kort objektet
    const card = model.cardsOnHand[cardIndex]; 


    // console.log(card);
    // console.log(card.value);
    
        if(model.cardsOnTable.length === 0){
            model.cardsOnTable.unshift(card); // legger til kort på bordet
            model.cardsOnHand.splice(cardIndex, 1); // Fjerner trykket kort fra hånden via Index.
        } else if (model.cardsOnTable[0].value === card.value || model.cardsOnTable[0].type === card.type){
            model.cardsOnTable[0] = card; // Erstatter kort på index 0 hvis kriteriene på else if er oppfylt.
            model.cardsOnHand.splice(cardIndex, 1); 
        } else if (model.cardsOnTable.length !== 0){
            model.cardsOnTable.unshift(card); // Legger til kort på index 0.
            model.cardsOnHand.splice(cardIndex, 1); // Fjerner trykket kort fra hånden via Index.
        }

        if (model.cardsOnHand.length < 5) drawCardsToHand();
        updateView();
}
function tableCardRules(cardDiv){
    cardOnTableRuleForNextIndex(cardDiv);
    cardOnTableRuleForThirdIndex(cardDiv);
}
//////////////////////////////////////////////////////////////////////////////////////

function cardOnTableRuleForNextIndex(cardDiv){
    const cardIndex = Array.from(cardDiv.parentNode.children).indexOf(cardDiv); 
    const card = model.cardsOnTable[cardIndex]; 

    if (model.cardsOnTable[cardIndex+1].value === card.value || model.cardsOnTable[cardIndex+1].type === card.type ){
        //Erstatter kortet med index 1 over med kortet du trykket på.
        model.cardsOnTable[cardIndex+1] = model.cardsOnTable[cardIndex];
        // Fjerner trykket kort fra hånden via Index.
        model.cardsOnTable.splice(cardIndex, 1);      
    } 
    updateView();
}


function cardOnTableRuleForThirdIndex(cardDiv){
    const cardIndex = Array.from(cardDiv.parentNode.children).indexOf(cardDiv); 
    const card = model.cardsOnTable[cardIndex]; 

    if (model.cardsOnTable[cardIndex+3].value === card.value || model.cardsOnTable[cardIndex+3].type === card.type ){
        //Erstatter kortet med index 3 over med kortet du trykket på.
        model.cardsOnTable[cardIndex+3] = model.cardsOnTable[cardIndex];
        // Fjerner trykket kort fra hånden via Index.
        model.cardsOnTable.splice(cardIndex, 1);      
    } 
    updateView();
}

