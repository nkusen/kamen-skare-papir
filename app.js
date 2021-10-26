let korisnikScore = 0;
let racunaloScore = 0;
const korisnikScore_span = document.getElementById("korisnik-score");
const racunaloScore_span = document.getElementById("racunalo-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const kamen_div = document.getElementById("k");
const skare_div = document.getElementById("s");
const papir_div = document.getElementById("p");

function word(letter){
    if (letter == 'k') return "Kamen";
    if (letter == 's') return "Škare";
    if (letter == 'p') return "Papir";
}

function pobjeda(korisnik, racunalo){
    const korisnikList = document.getElementById(korisnik).classList;
    korisnikScore++;
    korisnikScore_span.innerHTML = korisnikScore;

    if (korisnik != 's')
        result_p.innerHTML = `${word(korisnik)} pobjeđuje ${word(racunalo)}. Pobjeda!`;
    else
        result_p.innerHTML = `${word(korisnik)} pobjeđuju ${word(racunalo)}. Pobjeda!`;
    
    korisnikList.add("green-glow");
    setTimeout(() => korisnikList.remove("green-glow"), 333);
}

function poraz(korisnik, racunalo) {
    const korisnikList = document.getElementById(korisnik).classList;
    racunaloScore++;
    racunaloScore_span.innerHTML = racunaloScore;

    if (racunalo != 's')
        result_p.innerHTML = `${word(racunalo)} pobjeđuje ${word(korisnik)}. Luzer!`;
    else
        result_p.innerHTML = `${word(racunalo)} pobjeđuju ${word(korisnik)}. Luzer!`;
    
    korisnikList.add("red-glow");
    setTimeout(() => korisnikList.remove("red-glow"), 333);
}

function izjed(korisnik, racunalo) {
    const korisnikList = document.getElementById(korisnik).classList;
    result_p.innerHTML = "Izjednačeno!";
    korisnikList.add("grey-glow");
    setTimeout(() => korisnikList.remove("grey-glow"), 333);
}

function getracunaloChoice(){
    const choices = ['k', 's', 'p'];
    return choices[Math.floor(Math.random()*3)];
}

function game(korisnikChoice){
    console.log(korisnikChoice);
    const racunaloChoice = getracunaloChoice();
    switch (korisnikChoice + racunaloChoice) {
        case "ks":
        case "pk":
        case "sp":
            pobjeda(korisnikChoice, racunaloChoice);
            break;
        case "kp":
        case "ps":
        case "sk":
            poraz(korisnikChoice, racunaloChoice);
            break;
        case "kk":
        case "pp":
        case "ss":
            izjed(korisnikChoice, racunaloChoice);
            break;
    }
}

function main(){
    kamen_div.addEventListener("click", () => game("k"));
    skare_div.addEventListener("click", () => game("s"));
    papir_div.addEventListener("click", () => game("p"));
}

main();
