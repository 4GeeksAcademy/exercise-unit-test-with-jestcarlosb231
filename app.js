
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar){
    let result = (dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return result;
}

function fromEuroToDollar(euro){
    let result = euro * oneEuroIs["USD"];
    return result;
}

function fromYenToPound(yen){
   let result = (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
   return result; 
}


module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound}