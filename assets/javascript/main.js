const grosse = document.querySelector("#grosse")
const alter = document.querySelector("#alter")
const gewicht = document.querySelector("#gewicht")
const outputGrung = document.querySelector("#grundOutput")
const outputGesamt = document.querySelector("#gesamtOutput")
const berechnen = document.querySelector("#submit")
const gender = document.querySelector("#Weiblich")
const ArbeitFreizeit = document.querySelector("#ArbeitFreizeit")

let grundumsatz = ""
let gesamtumsatzOut =""
const kalorienRechnen = () => {

    if (gender.checked) {
        grundumsatz = 655.7 + (13.7 * gewicht.value)+(5 * grosse.value)-(6.8 * alter.value)
    } else {
        grundumsatz = 655.1 + (9.6 * gewicht.value) + (1.8 * grosse.value) - (4.7 * alter.value)
    } 
    gesamtumsatzOut = grundumsatz * ArbeitFreizeit.value
}

berechnen.addEventListener("click", () => {
    kalorienRechnen()
    outputGrung.innerHTML= grundumsatz.toFixed();
    outputGesamt.innerHTML = gesamtumsatzOut.toFixed();
}
)





// grundumsatz bei männer : 664.7 + (13.7 *korpergewicht) + (5 * korper grosse ) -(6.8 * alte)....


//grundumsatz bei frauen : 655.1 + (9.6 * korpergewicht ) + (1.8* koerper grosse ) - (4.7 * alte)....

//gesamtumsatz : PAL * Grundumsatz...

