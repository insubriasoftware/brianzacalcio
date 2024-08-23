//contatore globale direzione carta
let cont_reverse_card = [];

//funzione che gira una carta
async function reverse_card(index) {
    let card = document.getElementsByClassName("card-base");
    let text = document.getElementsByClassName("card-excerpt");
    let text_back = document.getElementsByClassName("card-excerpt-back");
    
    //console.log(card);
    
    cont_reverse_card[index] ++;

    if (cont_reverse_card[index] % 2 != 0) {
        $(card[index]).addClass("card-back");
        $(card[index]).removeClass("card");
    
        $(text[index]).hide();
        $(text_back[index]).show();

    } else {
        $(card[index]).addClass("card");
        $(card[index]).removeClass("card-back");

        $(text_back[index]).hide();
        $(text[index]).show();
    }

}

//funzione che inizializza il contatore delle tessere
async function init_cont() {
    let text_back = document.getElementsByClassName("card-excerpt-back");
    let card = document.getElementsByClassName("card-base");
    for(let i = 0; i < card.length; i++) {
        cont_reverse_card.push(0);
        $(text_back[i]).hide();
    }
}