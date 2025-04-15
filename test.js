let {fromDollarToYen,fromEuroToDollar,fromYenToPound} = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
     expect(dollars).toBe(3.745);
})


test("One dollar should be 146.26168224299064 yen", function() {
    const yen = fromDollarToYen(5);
     expect(yen).toBe(731.3084112149533);
})

test("One yen should be 136.155 pound", function() {
    const pound = fromYenToPound(189);
     expect(pound).toBe(1.0506709265175718);
})